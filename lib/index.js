/*

Copyright 2017 AJ Jordan <alex@strugee.net>.

This file is part of https-crawler.

https-crawler is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or (at
your option) any later version.

https-crawler is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
General Public License for more details.

You should have received a copy of the GNU General Public License
along with https-crawler. If not, see <https://www.gnu.org/licenses/>.

*/

'use strict';

const Crawler = require('simplecrawler'),
      hasScheme = require('has-scheme'),
      Queue = require('jankyqueue'),
      Sequelize = require('sequelize'),
      defaults = require('lodash.defaults'),
      assert = require('assert');

module.exports = function crawl(_opts, ) {
	assert(_opts.domain);

	const opts = defaults(_opts, {
		includeSubdomains: true,
		logger: function noop() {}
	});

	if (!hasScheme(opts.domain)) opts.domain = 'http://' + opts.domain;

	const sequelize = new Sequelize('https_urls', null, null, {
		storage: opts.dbpath,
		dialect: 'sqlite'
	});

	const Url = sequelize.define('url', {
		url: {
			type: Sequelize.STRING,
			primaryKey: true
		},
		offersHttps: {
			type: Sequelize.BOOLEAN
		},
		redirectsToHttps: {
			type: Sequelize.BOOLEAN
		},
		redirectsFromHttps: {
			type: Sequelize.BOOLEAN
		},
		inFlight: {
			type: Sequelize.BOOLEAN,
			defaultValue: true
		}
	});

	const dbSync = Url.sync();

	const crawler = new Crawler(opts.domain);

	crawler.ignoreWWWDomain = false;
	crawler.scanSubdomains = opts.includeSubdomains;

	crawler.on('fetchcomplete', function(queueItem) {
		Url.findOrCreate({where: {url: queueItem.url}, defaults: {
			url: queueItem.url
		}}).spread((row, created) => {
			
		});
	});

	dbSync.then(() => crawler.start());
};
