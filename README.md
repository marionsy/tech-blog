# Tech blog

## Description

  This is a CMS-style blog site where developers can publish blog posts, edit and delete them, as well as add comments to other posts.

  ## Installation

   *  Install Node.js to run the application
   *  Install MYSQL to source database
   * `npm install` to install required npm packages
   *  Run `node seeds/seed.js` to seed data
   *  Enter `node server.js` to initialize app on localhost:3001

  ## Usage

   * The user must source the database first by logging into MySQL and entering `SOURCE schema.sql`.
   * The user will then exit MySQL enter `npm run seed` to seed the data.
   * Then the user will initialize the app by entering `node server.js` and the server will begin listening on localhost:3001
   * Users will then be able to create an acoount.
   * Users will then create blog posts consisting of a title and content.
   * If a user wishes to edit a post, they must navigate to their dashboard and click on the post title.
   * Users will then be able to edit the post, or delete the post.
   * If a user wishes to add a comment to an existing post, they must navigate to their homepage and click on the post title.
   * Users will then be presented with the option to add a comment.
   * If a user is done creating blog posts and/or adding comments, they will navigate to the logout and returned to the login page.
  
  
  ## Video Demo
  
  https://user-images.githubusercontent.com/105673031/194767166-a43bb27b-e72b-4d4a-8be1-0739a98bee54.mov

  ## Features
  
   * Javascript
   * Node.js
   * npm
   * Express.js
   * MySQL2
   * Sequelize
   * dotenv
   * Handlebars.js
   
   ## Link to deployed Heroku application
   
   https://mysterious-depths-42715.herokuapp.com/ 
