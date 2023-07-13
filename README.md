# Bootcamp Challenge #14: Tech Blog using Model-View-Controller (MVC)

## Summary of the Challenge

In this week's challenge, we were tasked with the front and back end of a CMS-style blog, where developers can publish their own blog posts and comment on other developer's blog posts. The creation of the application follows the MVC paradigm, and utilizes 
tools such as Handlebars.js, Sequelize, and express-session.

## Acceptance Criteria
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```

## Installation
For this application, installation of Node.js and MySQL are required for setting up the API and database. Express, MySQL2, Sequelize, dotenv and other packages are also required and can be installed from the command line using ```npm install``` when in the directory of the application's code. The specific dependencies and the versions used by each package can be viewed in the package.json folder. 

If running the application from Heroku, no installation is required.

## Usage
To use the application, ensure that all packages/dependencies are installed by running ```npm install``` once in the directory of the application. Navigate to the db folder and login locally to MySQL to run schema.sql by typing in ```source schema.sql```. After the database has been created and populated, make a copy of the ```.env.EXAMPLE``` file and name it ```.env```. Enter your own MySQL login credentials (DB_USER and DB_PW) into this new file to ensure that the database can be configured and the application can run. Once the login information has been added, ensure that you are in the root of the directory and type ```npm start``` to run the application.

If running from Heroku, no installation steps or set-up are required. The application can be accessed at [this link](https://mvc-techblog-challenge-8486433376bf.herokuapp.com/). To gain access to viewing/commenting/posting posts, click the 'Login' button in the navigation bar.
If it is your first time using the application, sign up from the link redirect on the login page. To post your own posts, click 'New Post' on the dashboard page and enter a title and content for your post. To see other user's posts, go to 'Home'. You can comment on individual posts on
your homepage by clicking on the user's post and entering your comment on the respective post's page.

## Resources Used
- W3Schools
- MDN Web Docs
- Stack Overflow
- Github Issues
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [Node.js Documentation](https://nodejs.org/en/docs)
- [Sequelize Documentation](https://sequelize.org/)
- [dotenv Documentation](https://www.npmjs.com/package/dotenv)
- [bcrypt Documentation](https://www.npmjs.com/package/bcrypt)
- [express.session Documentation](https://www.npmjs.com/package/express-session)
- [JawsDB MySQL Documentation](https://devcenter.heroku.com/articles/jawsdb) (for deployment onto Heroku)

## Deployed Application
The deployed application can be accessed here: https://mvc-techblog-challenge-8486433376bf.herokuapp.com/
