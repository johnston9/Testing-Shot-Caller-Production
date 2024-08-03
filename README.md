<h1 align="center"><strong>Shot Caller Production</strong></h1>

[View the project live here.](https://)

A web application for film, TV and video production.<br>

## Purpose
Essentially the site consists of three elements. The first to introduce the User to its two software products, an "All in One Film, TV, and Video Production Platform" and "Budgeting Software". This element aims to give them about them clear information about the products and encourage them to create an account and purchase them. The second contains the User's account page which allows them to purchase products and view their already purchased ones. The third is the actual Budgeting Software. This is available as a separate product but is also included as part of the "All in One Platform".
<br>

## Usage
To use the site to gather information the User can click on any link in the Home page or Navbar to take them to that feature's information page. <br>
To use the site to view and purchase products the User first creates an account by clicking on any of the Register links then on their Account page they can select and purchase products and view all their already purchased products.<br>

When a User has purchased an "All in One Platform" they will be given a URL by email to a separate application where the actual software is held along with a username and password for it. The product will also now show in their account page along with the URL to the platform and a separate link to the product's Budgeting software.<br>

If a User just purchases the Budgeting software they will also receive a URL by email for it along with a username and password and the product will also now show in their account page along with the URL to it. To use the "Budgeting Software" the User clicks on the link to be taken to it and there they will find information on how to use it.<br>

There is no installation needed or requirements for the "All in One Platform" or the "Budgeting Software". If a User has any issues they can contacts the site through the Contact Us page.<br>
Go to Shot Caller to view the Platform App's Readme. [Shot Caller](https://)<br>

# Table of Content

## User Experience (UX)
The business goals are to establish the app as a professional film production software platform, to create an online presence and to entice Users to register and purchase products.<br>

The User goals are to find out about the software, register an account, access their Account page to create and view their projects and use the "Budgeting Software".

### Strategy Plane

The site aims to make an immediately impact on the User as to the nature and quality of its products through its obvious inherent professional knowledge of the film making process encouraging them to explore it's features fully, create an account and purchase products.<br>

The Budgeting Software is available as an individual product as a User will more readily open to purchase this smaller but necessary tool and seeing its quality be more open to trusting the All in One Platform.

#### Brand Identity
- Brand promise: A complete film production software platform.
- Vision: Professional Creativity.
- Mission: To combine the creative and production sides of filmmaking in one all-encompassing platform.
- Values: Professional, Creative and Easy to Use.

### Scope Plane

The Scope was what was absolutely necessary for the app to deliver its basic functionality and what is the most enticing user friendly way of building this. For the Budgeting Software the Scope was simply to build the most comprenhensive and easy to use software possible.<br>

### Structure Plane

The site is structured so the user can navigate easily and in an intuitive way through the different features of the products. The user is taken on a journey from finding out about the two products, to purchasing products and finially using the Budgeting Software.

### Skeleton Plane

The interface is aesthetically functionally all the time creating a positive reaction in the user with every click making the user feel part of an productive and creative journey. 

#### Design ?????????????????

 - The logo:
 - Colour Scheme: The site aims to be professional...
 - Typography: Playfair Display, a serif non-formal friendly font was used as the main font for the site. It has a sophisticated classy feel. Lato was used alongside it for more matter of fact details. And Playball, a very stylish, 
 - Imagery: Images of the actual software were used to show the user how the software looks and how it works.

### User Stories

 - #### First Time User Goals

1. As a First Time User, I want to learn what the site has to offer and how to use the site quickly.
2. As a First Time User, I want to view information on the different features of the software.
3. As a First Time User, I want to register an account easily.

 - #### Returning User Goals

1. As a Returning User, I want to easily login and logout.
2. As a Returning User, I want to view or update my profile.
3. As a Returning User, I want to see what people are saying about the app and know if it is professional and trustworthy.
4. As a Returning User, I want purchase products easily.

  - #### Frequent User Goals

1. As a Frequent User, I want to view my purchased products and projects.
2. As a Frequent User, I want to easily recover my password if I forget it.
3. As a Frequent User, I want to view my order history and payment details.
4. As a Frequent User, I want to use the Budgeting Software,

  - #### Owner/Admin User Goals 

1. As the Owner/Admin User I want to edit product prices and details.
2. As the Owner/Admin User I want to add testimonials and reviews to the Testimonial page.
3. As the Owner/Admin User I want add new testimonial lines and other marketing and sales items to the landing page.
8. As the Owner/Admin User I want to post or respond to messages in the Chat feature.
9. As the Owner/Admin User I want control over material posted on the site for legal and other purposes.

All User Stories testing is covered in the Testing page. [Testing](/TESTING.md)

[Back to Table of Content](#table-of-content)

## Features

### Budgeting Software
- Create professional standard budgets easily, includes Globals.

### Login/Register/Logout Pages and Security
- The user can Register, Login and Logout easily and the entire software has both frontend and backend security.

### The Home Page
- This page primarily aims to give the User information about and sell the products. 

### The Creative, Production and Budgeting Features Explanatory Pages
- These give brief concise overviews of each feature.

### The User's Account Page
- This page holds all the User's projects and allows the userto create and purchase new projects.

### The Chat page
- This is where the User can view or add Chats and Comments, it also hols all the Users Profiles.

### Stripe ????????????????????
- Stripe is used for the payment system.

### Responsive Design
- The site is responsive to all screen sizes and the images respond in proportion. 

For the complete coverage of the Features Testing go to the Testing page. [Testing](/TESTING.md)

## Information Architecture ??????????????

- Development 
**SQLite3** was used during development and comes with Django Rest Frameworks. 

- Deployment 
**Postgres** is used for deployment, and was added as an add-on with Heroku.

### Database structure - Model Tables by App

#### Django contrib auth
1 - <strong>User</strong> - to hold the authenticated users.<br>
  - OneToOne Key to Profile

#### Accounts App
1 - <strong>Account</strong> - to hold the user's account details.<br>

2 - <strong>Project</strong> - to hold the user's Projects.
  - Foreign Key to User. 

#### Budget App
1 - <strong>Budget</strong> - to hold the Project's Budget information<br>

#### Profiles App
1 - <strong>UserProfile</strong> - to hold the registered users details.<br>
  - OneToOne Key to User

#### Chat App
1 - <strong>Chat</strong> - to hold the Chats.<br>
  - Foreign Key to User

#### Comments App
1 - <strong>Comment</strong> - to hold the Chat's Comments.<br>
  - Foreign Key to User
  - Foreign Key to Chat

#### Profiles App
1 - <strong>Profile</strong> - to hold the user's profile details.<br>
  - OneToOne Key to User

#### Followers App
1 - <strong>Follower</strong> - to hold the Profile's Followers.<br>
  - Foreign Key to User (as owner, who is following)
  - Foreign Key to User (as followed, who is followed)

#### Likes App
1 - <strong>Like</strong> - to hold the Profile's Followers.<br>
  - Foreign Key to User 
  - Foreign Key to Chat

[Back to Table of Content](#table-of-content)

## Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JAVASCRIPT](https://en.wikipedia.org/wiki/JavaScript)
- [PYTHON](https://en.wikipedia.org/wiki/Python_(programming_language))

## Frameworks, Databases, Libraries & Programs Used ?????????????????????????????????

- [React Bootstrap:](https://react-bootstrap.netlify.app/)
   - React Bootstrap with its grid-based format was used to create the overall    framework for the site. This included the primary responsiveness
     and overall styling of the website. Also specific 
     Bootstrap features like
     the Navbar were used in the site.
- [React:](//https://react.dev/)
   - React, the JavaScript library, was used to build the app's Front End User User Iterface.
- [Django Rest Frameworks:](https://www.django-rest-framework.org/)
   - Django Rest Frameworks the high-level Python Web framework was used to build the app's Backend.
- [SQLite3:](https://www.sqlite.org/index.html)
   - SQLight came with Django and was used as the database for development.
- [Postgres:](https://www.heroku.com/postgres) ?????????????????????????
   - Postgres was added with Heroku and was used as the database for production.
- [AWS S3:](https://aws.amazon.com/) ????????????????????????????
   - AWS was used to hold the media files.
- [Cloudinary:](https://cloudinary.com/)
   - Cloudinary was used to hold the media files.
- [Axios](https://axios-http.com/docs/intro)
   - Axios was used to make all the XMLHttpRequests.
- [jwt-decode](https://github.com/auth0/jwt-decode)
   - jwt-decode was used to decode the JSONweb tokens.
- [Stripe](https://stripe.com/en-ie)
   - Stripe was used to handle the payments.
- [PIP3](https://pip.pypa.io/en/stable/installing/)
   - PIP3 was used to install everything.
- [Font Awesome:](https://fontawesome.com/)
   - Font Awesome was used throughout the website for the icons.
- [Google Fonts](https://fonts.google.com/)
   - Google Fonts was used throughout the website for the fonts.
- [Git](https://git-scm.com/)
   - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
- [GitHub:](https://github.com/)
   - GitHub is used to store the projects code after being pushed from Git.
- [Freeformatter](https://www.freeformatter.com/html-formatter.html)
   - Freeformatter was used to tidy up the final code.
- [Gauger](https://gauger.io/fonticon/)
   - Gauger was used to create the favicon icon.
- [Am-I-Responsive](http://ami.responsivedesign.is/):
   - Am I Responsive was used to test the site's responsive sizings and to generate responsive sizing images.
- [GitHub Wiki TOC generator:](http://ecotrust-canada.github.io/markdown-toc/)
   - GitHub Wiki TOC generator was used to create the Table of Contents.
- [dbdiagram.io](https://dbdiagram.io/home)
   - dbdiagram.io was used to create the Entity-Relationship Diagram.
- [Gmail](https://www.google.com/gmail/)
   - Gmail was used for the email backend.

A number of imports were used in Django Rest Frameworks and an inventory of these can be found in the Deployment section.

[Back to Table of Content](#table-of-content)

## Testing
- For the complete coverage of Features, User Stories and Lighthouse testing go to the Testing page.
[Testing](/TESTING.md)

All functionality was tested as it was being built to ensure there were no errors, that it did what it was meant to do and that all database errors were handled correctly. 

On completion the functionality of the entire app was repeatedly tested on various devices both by the development team and by Capital Numbers, the InfoTech company responsible for some of the high level configuration work.

Pylint was also used in the backend workspace as the project was being built for Python and Django code and all errors were fixed on an ongoing process. 

All pages were checked in Lighthouse. All errors were fixed. <br>
The view the Lighthouse testing results go to the testing page. [Testing](/TESTING.md)

W3C Markup Validator, W3C CSS Validator, PEP8 and JSHint were used to validate all HTML, CSS, Python and JS in the project, the results are in documentation.

- [W3C Markup Validator](https://validator.w3.org/)   ?????????????????????????
  - On validated by URL no errors were shown - Info messages were given for the trailing slash in the link and meta tags in index.html but were left in anyhow.
  [Result](documentation/testing/w3c-html.png)

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) 
  - W3C CSS Validator gave no errors.
  [Results](documentation/testing/w3c-css.png)

- [JSHint](https://jshint.com/) 
  - JSHint was used with "New JavaScript features (ES6)" checked in the configuration menu.
  [Results](documentation/testing/jshint)
    
- [PythonChecker](https://www.pythonchecker.com/) 
  - PythonChecker approved all DRF python pages apart from a few too long lines in the setting.py which I decided to leave. 
  [Results](documentation/testing/)

[Back to Table of Content](#table-of-content)

## Deployment

### Development platform

   [Gitpod:](https://www.gitpod.io/docs/)
   - Gitpod was used as the development platform.

### Repository
   [Github](https://github.com/)
   - Github was used as the repository for the project.

### Deploy to Heroku
Heroku was used to deploy the project.

[Heroku](https://www.heroku.com/platform)

### Requirements
asgiref==3.5.2 <br>
cloudinary==1.29.0 <br>
dj-database-url==1.0.0 <br>
dj-rest-auth==2.2.5 <br>
Django==3.2.15 <br>
django-allauth==0.50.0 <br>
django-cloudinary-storage==0.3.0 <br>
django-cors-headers==3.13.0 <br>
django-filter==22.1 <br>
djangorestframework==3.13.1 <br>
djangorestframework-simplejwt==5.2.0 <br>
gunicorn==20.1.0 <br>
oauthlib==3.2.0 <br>
Pillow==9.2.0 <br>
psycopg2==2.9.3 <br>
PyJWT==2.4.0 <br>
python3-openid==3.2.0 <br>
pytz==2022.2.1 <br>
requests-oauthlib==1.3.1 <br>
sqlparse==0.4.2 <br>

[Back to Table of Content](#table-of-content)

## Credits

### Code

- [Code Institute](https://codeinstitute.net/)
  The code for the basic React/DRF set-up for the app from Code Institute. This includes the Requests, the Current User Context, the Profiles and the Posts, Likes and Followers in the Front End and the Models, Views and Serializers for all apps in the Back End.
- [Django Rest Framework](https://www.django-rest-framework.org/)
  I referred to these throughout the project.
- [stackoverflow.com]()
  I referred to Stack Overflow to check out different approaches for some issues. It was here I learnt the Regex for input boxes.
- [w3schools.com]()
  I referred to W3 a number of times for Javascript code examples.
  
### Content

All content was written by the developer and Capital Numbers.

### Media

The photos used for the images in the site were obtained from:

  1. [FreeImages.com](https://www.freeimages.com/)

  2. [pexels.com](https://www.pexels.com)

  3. [Unsplash.com](https://unsplash.com/photos/irRhPKPqP9Y)

### Acknowledgements
   
- I would like to thank ...

[Back to Table of Content](#table-of-content)