# alhamd-vanilla: 
# A vanilla framework for those who care about & strive for efficiency 


alhamd-vanilla 
	 |-- Purpose of Life
	 |-- Architecture
	 |-- Coding Styles
	 |-- Implementations



Alhamd Vanilla demonstrates deeply beneficial design architectures for efficiency and blazing-fast performance. Alhamd Vanilla lives on the idea to be performance-native as much as possible. For example: 
* GNU C is a high-level language, closest to CPU-readable code, through Assembly. 
* Node.js uses V8, the fastest Javascript engine we know and love.

--- Maintainability
Module-Oriented Programming, in opposition to OOP, for scalable applications. Don't modularise/split unless things are way too unmaintainable. Without OOP, some perceive this world as a lie, but:
			"GNU C doesn't have OOP. Linux kernel is built in C, without 
			 OOP. And, linux kernel has 15 million lines of code."

-- Performance
Most JS frameworks are built with the help of Node.js, and are slow mostly because they add too much abstraction. 
			"Too many tiny units of abstraction get separated 
			 from context, hence reducing meaning."
Rather, create abstractions only when you are sure that: not creating this abstraction will extensively complexify things.

-- Least Polymorphism
Polymorphism is Android Open Source Project (AOSP) being 250 GB, Chromium Project being 50 GB - to support all the OS at once in a single repo. This download corpus overhead is surely a high entry barrier for contributing to their projects. 
Instead, make branches & releases specific for OS. For reusing code among repos intended for specific OS, create symbolic links.
			"Do one thing - do it properly." - Unix

-- Properly-defined Restrictions are your Saviors
Tell me what makes Python slow, beside being interpreted. Dynamic typing. Use Cython, declare data types - suddenly things start to fly at speed. If browser rendering engines had restrictions on HTML, Chromium Blink developers could sleep a lot more hours.
			"CONSISTENCY is much important than SAVING FEW KEYSTROKES."





_______ ARCHITECTURE _______

Project architecture isn't what it's made of. Project architecture is what it's about. The directories/structures of your  application/project about a payment gateway, must scream at you that it's a payment gateway. And you as a developer will do everything to make your project scream. You are obliged to add structuring like this in your README:
				
				project-name
					|-- MainServer.c
					|-- modules
								|-- lib-avoidrepitition.js
								|-- lib-alhamd-vanilla.h
								|-- lib-python-builtins.h
								|-- rendering
											|-- index.js
											|-- question_view.js
											|-- question_write.js
											|-- profile_index.js
											|-- profile_contributions.js
											|-- profile_settings.js
								|-- ajax
											|-- login.js
											|-- register.js
											|-- comment.js
											|-- question_write.js
					|-- project
								|-- index
											|-- index.html
								|-- question
											|-- write.html
											|-- view.html
											|-- write.css
								|-- style.css
								|-- navbar.js
								|-- footer.js





_______ CODING STYLE _______

Alhamd Vanilla is all about super-fast development, super-performing application/projects, dexterous maintaining, and efficiency. Alhamd Vanilla strives to achieve maximum efficiency, while caring about the developer.



[[ Naming ]]
variables - no underscore, may have capital letter. Must be consistent.
					- elaborate acronymous variables. Not preferred at all.

			let IndexHTML = ...; 
			var cuteVarName = ...; 
			var eacVar = ...;		 // elaborate acronymous variables 


functions - must have underscores, no capital letters. Must be consistent.
							
			render_index_page:	()=>{...}
			render_questionview_page:	 ()=>{...}
			render_questionwrite_page:	 ()=>{...}

			exec_mysql(sql, callback_func) {...}


modules/libs - may have underscore, ALL CAPS. Must be consistent.

			const LIBAR = require('./modules/lib-avoidrepitition.js');
			const FS = require('fs');
			const DARIS_QUESTION_VIEW = require('./modules/rendering/question_view.js');


file names - consistence & speciality

			DarisMainServer.js
			daris/question/question_view.js
			daris/question/question_write.js
			modules/lib-avoidrepitition.js




[[ Each File ]]
*	Break lines exceeding 100, unless not breaking increases readability.
* No, do not split a feature/module too much.
* A file can be big, it "must do one thing, and do it properly"

					`daris/profile/profile.html`
					`daris/question/view.html`
					`daris/navbar.js`




[[ Ethics ]]
* "There should be (exactly) 1 approach to do something - most efficiently."
																- Rob Pike (Golang creator)





_______ IMPLEMENTATIONS _______

[https://github.com/midnqp/DARIS.js]
		The simpler StackOverFlow using Node.js

[https://github.com/midnqp/alhamd-server.c]
		Fully-fledged server in GNU C
