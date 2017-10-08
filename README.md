# https-crawler

Build a SQLite database of per-page HTTPS support

Originally inspired by https://securethe.news/ and built to crawl the University of Rochester's internal service pages, but can be used for any website.

## Why?

I go to the University of Rochester. The University's pages are somewhat inconsistent in their support for HTTPS, which is unfortunate since I access internal services on `*.rochester.edu` all the time. So I built this to comprehensively evaluate their support for HTTPS.

This crawler is designed to create a comprehensive dataset that can be used for further analysis. It does this on a per-page basis, not per-domain, because sometimes different people are responsible for running different pages under the same (sub)domain, so HTTPS support varies. Also because on other websites administrators will often choose to only protect e.g. login pages with HTTPS, which is a Bad Idea™. So you want to be able to find out about that.

I will probably also build out better analysis tools, eventually.

## Author

AJ Jordan <alex@strugee.net>

## License

GPL 3.0 or later
