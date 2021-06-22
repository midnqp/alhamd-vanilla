New developers learning to develop Web, faces the incovenient problem. Started off by learning HTML, CSS, JavaScript - when they're about to fall in love with the Web, and wanted to look for jobs or opensource - it's only then that they realize the existence of: [20+ Javascript](https://en.wikipedia.org/wiki/List_of_JavaScript_libraries#Web-application_related_(MVC,_MVVM)) and [PHP](https://en.wikipedia.org/wiki/Category:PHP_frameworks) frameworks.


![](https://raw.githubusercontent.com/midnqp/midnqp/main/cdn/frameworkless-intro.jpg)




[__`Midnqp\Frameworkless`__]() is designed with care and thoughts to let developers **not learn** so many frameworks - alongside learning the languages themselves. We made certain, this framework has the least to **no learning curve**.

<details>
  <summary>Example of <i>writing Node.js inside HTML</i></summary>
  
```html
<html>
<require>/comp/head.html</require>


  
<body>
  <require>/comp/navbar.html</require>
  
  
  <script nodejs>
  var sql = 'SELECT name, email FROM users'
  dbQuery(sql, function(result) {
    for (i = 0; i < result.length; i++)
      console.log(result.name, result.email)
  })
  </script>
    
    
  <require>/comp/footer.html</require>
</body>
  
  
  
</html>
```
</details>

    
    

<details>
  <summary>Explanation/Information of the example to an aspiring beginner</summary>
  
  - HTML, CSS, JS are languages executed by _web browsers_. Using them you can build _static_ websites. But, to build a _dynamic_ web site/app, which stores and retrieves data - having a _database_ is inevitable. 
  - Example: **MySQL**. Most databases like MySQL use a terribly simple language named **SQL** (Structured Query Language). Install the database service for your operating system, and learn SQL.
  - For security reasons, you can never ever talk to _database_ using browser-side languages. You'll need the _server-side_ ones. Since most people like you and us already know and love JavaScript, some very smart people used this browser-side language to build a server-side one. 
  - The name is **Node.js**. The syntax of Node is absolutely same as the JavaScript in our browser. But Node has extra capabilities. `Midnqp\Frameworkless` is built using Node. Since you already know JavaScript, there isn't much to learn.
</details>
  
  
  
  

  
  
  
# Changes We Made, Features We Glazed ✨

<details>
  <summary>The Overall Framework</summary>
  
  - Extremely quick & easy to write web apps/sites
  - **Hot reload** _(make changes to files, see them immediately at browser)_
  - Like ReactJS, **minimal DOM changes** ensure _swift & elegant_ UI ✨
  - Featherweight and lightspeed fast - **serve enormous requests** per second
  - Built-in support for Web Apps
  - Simple routing
  - Scheduled Tasks
  - Mails
</details>
  
  
<details>
  <summary>Added to HTML</summary>
  
  - `<require>` fetches an HTML file using AJAX and **inserts** right there.
  - `<script nodejs>` The server-side JavaScript you'll write within the script tags with `nodejs` boolean attribute, gets executed by this framework, and is never sent to web browsers.
</details>  
  
  
<details>
  <summary>Added to JavaScript</summary>
  
  - Little trick to easily reuse UI components
  - jQuery included. Browser-side JavaScript has long names like `getElementById`, jQuery doesn't. Using jQuery for _productivity & convenience_ will have little to none noticeable effects on performance.
</details>
