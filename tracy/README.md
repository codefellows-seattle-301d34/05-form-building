# Lab 05: Form Building Workshop

**Author**: Tracy Williams
**Version**: 1.5.0 

## Overview
This is a blogging application, which, in this version, only posts/formats/filters existing blog enteries. Filtering on author or category are provided as well as a Read more/less feature.  This version adds the ability to create a new blog article.

## Getting Started
git clone https://github.com/TCW417/05-form-building.git
open index.html (or load index.html into your browser of choice)

## Architecture
The application utilizes JQuery and Handlebars libraries.  Code is orgainzed into three js files: blogArticles.js (a data file containing blog objects), articles.js (creates array of Article objects and the toHtml method), and articleView.js (renders the page and handles filtering/presentation and new article creation).

Handlebars is used to create and populate <article> elements for blog articles and new article preview, and <option> elements for filters.

Markedjs is included allowing use of markdown in the blog article.

Highlightjs is included. Code blocks can be surrounded by <pre><code> tags to provide language-specific hightlighting.

## Change Log


## Credits and Collaborations
JQuery: www.jquery.com
Handlebars: www.handlebarsjs.com
Hightlightjs: highlightjs.org
Markedjs: github.com/chjj/marked
