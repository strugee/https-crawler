#!/usr/bin/env node

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

const fs = require('fs'),
      crawler = require('./index'),
      defaults = require('lodash.defaults');

const config = defaults(JSON.parse(fs.readFileSync(process.argv[2]).toString()), {
	logger: console.log
});

crawler(config);
