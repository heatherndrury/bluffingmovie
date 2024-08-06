# bluffingmovie
---

Overview
---
This is my capstone project for CODE:You. It is a marketing and information website for "Bluffing Movie," a debut feature-length film by Jon Ott. This website is consistent with existing design components and allows users to learn more about the film, its cast and crew, and updates on the film's progress in a simple and accessible way.
This site uses YouTube's iFrame API to embed a relevent video (and/or the film's trailer when available). It also contains form elements in the newsletter sign-up and on the contact form and connects with a database storage system in order to save supporter information for future marketing and outreach.
The goal of the project is to showcase my understanding of HTML, CSS and JavaScript in a visually-appealing and accessible way. 

Resources
---
1. [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference)
-this API connects to a video from Bluffing's YouTube page and has basic video functionality that allows the user to play/pause/etc.
2. [Fonts](https://fonts.google.com/)
-the fonts used throughout the page and design elements were sourced from fonts.google.com.
3. Images
-all images used were sourced from either stills from the film or from other film-specific marketing materials available 
4. [Pantry Cloud Storage API](https://getpantry.cloud/)
-any information collected from newsletter sign-up and contact form is sent here.

Project Overview
---
This project contains four main pages:

1. Home Page (index.html)
    - this contains the main title and connects with YouTube's IFrame Player API.
2. About Page (about.html)
    - This contains a synopsis of the film
3. Cast & Crew Page (Cast.html)
    - This contains information about each cast and crew member, pulling from a JSON file and populated using JavaScript
4. Support Page (support.html)
    - This contains a contact form, the information from which is then saved in a database via Pantry Cloud Storage API

## Features Utilized for the project

  | Feature        | Description                           |
  |----------------|---------------------------------------| 
  |Use arrays, objects, sets, or maps to store and retrieve information displayed in the app.| Used to store Cast & Crew data in JSON file (cast.json) to make any additions easier and remove redundancy in HTML.|
  |Use a regular expression to validate user input and either prevent the invalid input or inform the user about it.| Used with newsletter sign-up and contact form to ensure we receive correct email addresses|
  |Retrieve data from a third-party API and display it within the app.| YouTube IFrame Player API: show film trailer and/or relevant videos on main page|
  |Create a form and store the submitted values using an external API (e.g. a contact form, survey, etc).| Pantry Cloud Storage API used to store information collected in newsletter sign-up and contact form.|

To View Project
---
This website is hosted by GitHub Pages and can be found here: [Bluffing Movie](https://heatherndrury.github.io/bluffingmovie/).

Alternatively, clone this repository to your local machine and view index.html via Visual Studio Code's live server extenstion.


