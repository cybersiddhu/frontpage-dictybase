frontpage-dictybase
===================

*The new dynamic FrontPage of dictyBase.*


---

# Introduction

Development of a dynamic framework for the dictybase using AngularJS, an open-source web application framework. The advantage of AngularJS is that the client side only requires HTML, CSS, and Javascript. The model-view-controller capability makes both development and testing easier. 

# Design principles

## FrontPage prototype

This is the initial design that we plan to accomplish. It will evolve as technology is implemented and rounds of interaction take place.

![Dicty Mockup](https://github.com/dictyBase/frontpage-dictybase/blob/master/images/frontpageNIHmockup.jpg)

## Footer

The footer will contain the full navigation menu of main sections and submenus. Everything will be generated dynamically. From now, the list of menus (or sections) and respective submenu will be provided in a file.

The basic scaffold is pre-specified and independent of the number of sections. It will also adapt to a wide range of devices. The scaffold is based on the default Bootstrap grid system of 12 columns.