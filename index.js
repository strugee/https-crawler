/*
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

'use strict';

const Crawler = require('simplecrawler'),
      assert = require('assert');

const defaults = require('lodash.defaults');

module.exports = function crawl(_opts, ) {
	assert(_opts.domain);

	const opts = _.defaults(_opts, {
		includeSubdomains: true
	});

	const crawler = new Crawler(opts.domain);

	crawler.ignoreWWWDomain = false;
	crawler.scanSubdomains = opts.includeSubdomains;

	crawler.start();
};
