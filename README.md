## Website Performance Optimization portfolio project

My challenge, was to optimize this online portfolio site by for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

### Steps to Run

#### Run Local Page

* open the index.html file in the root of this project folder in a browser
* select the Cam's Pizzeria link to examine the optimisations to this subpage

#### Run as a hosted GitHub Page

* open the site at [My Github hosted page](https://workerbee22.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.html)
* select the Cam's Pizzeria link to examine the optimisations to this subpage
* use this GitHub Page to verify PageSpeed Insights scores

### Details of Optimization Changes

#### Part 1: Optimize PageSpeed Insights score for index.html

Pagespeed Insights scores of the now optimised site are:

* 96 for Mobile
* 94 for Desktop

Achieved by making these optimisations:

* optimised use of print.css
* Remove the Google webfont in use
* used minified versions of profilepic.jpg and pizzeria.jpg
* made sure external javascript calls like Google Analytics where async calls
* minified CSS and put inline in main index.html file


#### Part 2: Optimize Frames per Second in pizza.html and Pizza Resize Slide Performance

To optimize views/pizza.html, I modified views/js/main.js until the frames per second rate is consistently 60 fps or higher. Changes were:

* removed the feature for the animated background of pizza images, as it is distracting and does not add anything much to the function of the page, also introducing several FSL issues
* Removed call to updatePositions function on scroll event and initial page load

To optimize the pizza size slider:

* Re implemented function changePizzaSizes to avoid Thrashing FSL
* bases on the only 3 sizes used
