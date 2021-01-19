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
Module-Oriented Programming, in opposition to OOP, for scalable applications. Don't modularise/split unless things are way too unmaintainable.

-- Performance: Most JS frameworks are built with the help of Node.js, and are slow mostly because they add too much abstraction. 
      "Too many tiny units of abstraction get separated 
       from context, hence reducing meaning."
Rather, create abstractions only when you are sure that: not creating this abstraction will extensively complexify things.

-- Least Polymorphism: Polymorphism is Android Open Source Project (AOSP) being 250 GB, Chromium Project being 50 GB - to support all the OS at once in a single repo. This download corpus overhead is surely a high entry barrier for contributing to their projects. 
Instead, make branches & releases specific for OS. For reusing code among repos intended for specific OS, create symbolic links.
      "Do one thing - do it properly." - Unix

-- Properly-defined Restrictions are your Saviors: Tell me what makes Python slow, beside being interpreted. Dynamic typing. Use Cython, declare data types - suddenly things start to fly at speed. If browser rendering engines had restrictions on HTML, Chromium Blink developers could sleep a lot more hours.
      "CONSISTENCY is much important than SAVING FEW KEYSTROKES."



