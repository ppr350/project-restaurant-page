# project-restaurant-page
A Restaurant homepage made by me using ES6 modules and Webpack

## This project is part of The Odin Project's Full Stack JavaScript course.

## The project
The aim of this project is to make a moke-up restaurant page using DOM manipulation by dynamically rendering. The HTML file in the 'src' folder only carries a container div. The main JavaScript file of this project is 'index.js' inside the 'src' folder. It loads all the components to the 'index.html' file.

It is a modular JavaScript project.

The 'index.js' file that lives inside the src folder is the main JavaScript file that imports the other two .js files.

Styling the page is being done in a separate CSS file called 'style.css'.

Webpack is used in this project to bundle all the neccessary files into a single file inside 'dist' fold called 'bundle.js'.

## JavaScript
The main JavaScript file 'index.js' creates the top menu when the page loads. It contains a function called 'startUp' in order to display the 'home' section of the page.

The 'home' section is written in this .js file in house and it is the only content out of three ('home', 'menu' and 'about') contents. When user clicks on 'menu' or 'about', it calls the corresponse JavaScript files that have already import into the main JavaScript file.

## Special Thanks
[Web Dev Simplified's Build Tabs Using HTML/CSS In Only 12 Minutes](https://youtu.be/5L6h_MrNvsk?si=narEeuhdZiDwYFBI)

[Web Dev Simplified's JavaScript ES6 Modules](https://www.youtube.com/watch?v=cRHQNNcYf6s)

[Traversy Media's Webpack 5 Crash Course](https://www.youtube.com/watch?v=IZGNcSuwBZs&t=1769s)

[FreeCodeCamp's Learn Webpack - Full Tutorial for Beginners](https://www.youtube.com/watch?v=MpGLUVbqoYQ&t=2060s)