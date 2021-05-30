# `midnqp\frameworkless`
Aims of this framework:
- Be _featherweight_ and _lightspeed fast_.
- Developers shall not spend time learning this framework. __If you're good at programming, then you're great at this framework__.
- Developers will rather focus on design and business logic. Not on: why is the website slow, or how to set proper mime types. This framework __deals all your hassle__.
<p align=center>
  <img src="https://raw.githubusercontent.com/midnqp/midnqp/main/cdn/frameworkless_architecutre.png" height=273px width=212px>
</p>

<p align=center><i>Architecture of a <b>production</b> blog platform. Having server-side Javascript inside HTML files.</i></p>




# `Specifications`
Websites/softwares built using `midnqp\frameworkless` will:
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
- An implementation of this framework will be [StacksMergeOne](https://github.com/midnqp/StacksMergeOne), which merges multiple information/answers for a question into one perfect answer.
- [Build notes](https://midnqp.github.io/midnqp/blog/stacksmergeone-build-notes/) of StacksMergeOne will explain how __simple__ using this framework is.




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
