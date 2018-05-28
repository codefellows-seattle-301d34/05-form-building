# Book List App
Client-side stuff

**Author**: Ria Agnes Jose 
**Version**: 1.0.0 (increment the patch/fix version number up if you make more commits past your first submission)

## Overview
This app will query a postgreSQL database to show a list of books in the database on a web-based application.

## Getting Started
To get started, you'll need a database to query, a way to access/query the database and administer and maintain it, a code editor to put together the JavaScript and other related files (styling and server configuration files), a controller/server to pass requests, responses, database queries, and database responses, and a web browser to view the resulting application.

## Architecture
We used PostgreSQL for the database. Node.js is used to provide an environment for communication between the web browser (Google Chrome in our case), our command line/terminal/console interface, the database, and our code editor (Visual Studio Code). Within the Node environment, we used psql to connect a command-line interface to the database, nodemon to auto-restart node when the backend code changes, pg to provide connection between the code editor and the database, and Express to view the backend using the web browser. The web application itself uses Handlebars to automatically and dynamically create content served from the database, jQuery to provide extra/easier html element functionality, Pagejs to allow for single-page functionality, Heroku for remote hosting of our database, and GitHub pages to serve up the frontend content to the web at large.
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log

20 May 2018 12:00PM 
<!-- Use this are to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

01-01-2001 4:59pm - Application now has a fully-functional express server, with GET and POST routes for the book resource. -->

## Credits and Collaborations
