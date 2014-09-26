frontpage-dictybase
===================

*The new dynamic FrontPage of dictyBase.*


---

# Introduction

Development of a dynamic framework for the dictybase using AngularJS, an open-source web application framework. The advantage of AngularJS is that the client side only requires HTML, CSS, and Javascript. The model-view-controller capability makes both development and testing easier. 

# Design principles

## FrontPage

### Overall Framework
The size of the framework hosting the content will be limited to a maximum of width screen. This approach will enable:

- More control on how the user experience the web.
- Easy to read (avoiding long sentences).

![LimitSize](https://github.com/dictyBase/frontpage-dictybase/blob/master/images/newDictyLimitingSize.jpg)

### Frontpage layout
This is how the main sections will be organized in the front page:

![LimitSize](https://github.com/dictyBase/frontpage-dictybase/blob/master/images/newDictyFrontpageLayout.jpg)

### Frontpage mockup
This is the initial design that we plan to accomplish. It will evolve as technology is implemented and as consequence of rounds of interactions.

![Dicty Mockup](https://github.com/dictyBase/frontpage-dictybase/blob/master/images/frontpageNIHmockup.jpg)

## Footer

The footer will contain the full navigation menu of main sections and submenus. Everything will be generated dynamically as a Angular.JS directive.

The basic scaffold is pre-specified and independent of the number of sections. It will also adapt to a wide range of devices. The scaffold is based on the default Bootstrap grid system of 12 columns.

## Static pages
General layout for static pages:

![Dicty Mockup](https://github.com/dictyBase/frontpage-dictybase/blob/master/images/newDictyStatic.jpg)