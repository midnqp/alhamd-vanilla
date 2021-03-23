----ALHAMD-NODEJS----
TODO: How would you build this Node.js if were building a learning management system? Rethink stuffs.
TODO: How would you build this project if you were doing a social media project?
TODO: What about another github?
TODO: What about another google?
TODO: YuvaLife, Youskilleds.com, LinkedIn.

Specifications and tooling for hyper-performant & long-term-maintainable Node.js architectures. Build the future of info tech with Node.js!








----ARCHITECTURE----
[+] To achieve something, make definitive functions and finally invoke them all under a certain function to finalize the action.
[+] Try to make things be enclosed in a function. This way you can reuse that part in other models, without needing to copy-paste.

.
|-controller.js
|-model
    |-libar.js
      |-dbq()
      |-replace()
    |-login.js
    |-register.js
    |-ajax.js
    |-answer.js
    |-write.js
|-view
    |-style1.css
    |-script1.js
    |-index.html
    |-question_write.html
    |-question_view.html
    |-profile_view.html
    |-profile_edit.html
    |-profile_settings.html
    |-__template__.html
    |-login.html
    |-register.html
    |-about.html
    |-careers.html
    |-contact.html
    |-blog.html
    |-blog_write.html (if userrole != 'admin', "/blog/write/ Not Found!!!")
    |-blog_view.html





----TOOLING AND LIBRARIES----
:: An embeddable syntax, that evaluates Node.js code from within a file, almost like PHP.
  [+] You add the texts before & after, but you just eval the PHP code and put them into their place. However do notice that, <?php valid_php(); ?> -- semicolon! That means each of whatever is in the tags is a valid PHP "line".








----MISTAKES & ASSESSMENT----
--Model :: 
  [+] This is how I check if the current user is of this role, given the details by controller.
  [+] This is how I register them, given the details by controller.
  [+] This is how I log them in, given the login details by controller.
--View :: Whatever the user sees. The UI, and the /public/.
--Controller :: The middle-guardman. Processes user interactions. Example: Routings, receives & processes AJAX, POST Forms. Validates inputs from user:
  [+] "Oh, it's about registration! I'll simply just 'pass' the details to the 'section of the Model' concerned about user registration."
  [+] "Oh, he/she is subscribing to our newsletter! I'll inform the section of the Model concerned about newsletter_subscription, simply by invoking their function, and passing the details I've received through a POST AJAX."


[+] If we don't do an embedded syntax, then it becomes required to add a layer in the modelling that assesses the shortcodes from within the codes from /public/ and render their values. And that isn't efficient.
