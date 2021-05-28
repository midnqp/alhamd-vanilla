# `midnqp/frameworkless`
The fastest framework to build scalable web softwares in miniscule amount of time. Handles 200,000 requests per second.

Aims of this framework
- Be featherweight and fast and have a simple codebase.
- Developers will not spend time learning this framework. If you are good at programming, then you are good at this framework.
- Developers will focus on designing, and business logic. Not on: why is the website slow, or how to send proper mime types. This frameworks deals all that. Want a feature? Create an issue.




# `Specifications`
Websites/softwares built using `midnqp/frameworkless` will
- Serve enormous amount of requests
- __React-like minimal DOM manipulation__, to prevent reload of webpage
- Reuse UI components
- Simple & effective _routing_
- Extensively use AJAX
- __Write server-side Javascript code inside HTML files__
- Easy queries to database
- Builtin PWA
- Provided a CLI, and _hooks_ to use inside code to:
  - Create/View/Manage scheduled Tasks
  - Mass Mailing
  - Store Logs of tasks




# `Example Usage`
- An implementation of this framework is [StacksMergeOne](https://github.com/midnqp/StacksMergeOne), which merges multiple information/answers for a question into one perfect answer.
- [Build notes](https://midnqp.github.io/midnqp/blog/stacksmergeone-build-notes/) of StacksMergeOne explains how __simple__ using this framework is.




# `TODO`
- Route using `ROUTE_STRICT` and `ROUTE_REDIRECT` to fix the `./Public.ico.html not found` problem.

- Vanilla Javascript: a little infrastructure to reuse UI components.
  - `frameworkless-rui-main.js`
  - everything else are components

- vanilla-min.js
  - Ajax
  - `lib-frameworkless`: Ajax management

- Implement DOM minimal manipulation

- PWA support

- `lib-frameworkless`: Easy db queries

- CLI
  - implement hooks for Tasks!
  - implement mails
  - implement logging

- __The Last TODO__ Rewrite in order to ensure simplest configuration and usage for developers.
