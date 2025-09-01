<h1 align="center"><strong>Shot Caller</strong></h1>

[View the project live here.](https://)

A web application for film, TV and video production.<br>

## Purpose
A Film, TV, and Video Production Platform. The Platform includes Budgeting Software but this can also be purchased separately. It consists of two related apps, "Shot caller Production" and "Shot caller" each with a Backend and a Frontend. <br>

"Shot caller Production" is the commercial home site where users find out about and purchase the Platform and Budgeting software. 
"Shot caller" runs the Platform while the Budgeting software is held on “Shot Caller Production”. <br> 

This is the backend for Shot Caller Production. You may find the testing here.
[Shot Caller Production Testing](https://github.com/johnston9/Testing-Shot-Caller-Production/blob/main/TESTING.md)
<br>

The Platform contain both the Creative and the Production sides of media production.<br>
The Creative contains Scene Breakdowns, Character and Locations pages, Scene Workspaces, Shotlists, Moodboards and Index Cards.<br>
The Production side contains Scheduling, Callsheets and Cast and Crew management.
<br>

## Usage
In "Shot caller Production" a User can click on any of the features links on the Home page or Navbar to take them to that feature's information page. <br>
 
A User can create account by clicking on any of the Register links on "Shot caller Production" then on the subscription page they can select and purchase a Platform or Budgeting Subscription. The User now creates Projects or Budgets on their Account page, and they are given the URL which enables a specific version of the software for their Project or Budget to function. They are also given a Username and Password and the "superadmin" permission for their project.<br>

They can now register other Users who will in turn receive an email containing their Username and Password. These Users are each given a specific Permission, superadmin, admin, admincreative, crew or cast, admins, like superadmins, having the ability to register users to the Project. Once registered the User can use the features they have access to by clicking on the feature links in the navbar or home page.<br>

If a User just purchases the Budgeting software they will also receive a URL by email for it along with a username and password and the product will also now show in their account page along with the URL to it. To use the "Budgeting Software" the User clicks on the link to be taken to it and there they will find information on how to share and use it.<br>
 
## Installation and Requirements

There is no installation needed and no requirements for the app. If a User has any issues they can contact the site through the Contact Us page on "Shot caller Production".<br>

# Table of Content
  * [Purpose](#purpose)
  * [Usage](#usage)
  * [Installation and Requirements](#installation-and-requirements)
- [Table of Content](#table-of-content)
  * [Features “Shot Caller Production”](#features--shot-caller-production-)
    + [Product Information](#product-information)
    + [Subscriptions page](#subscriptions-page)
    + [Accounts Page](#accounts-page)
    + [Transaction Page](#transaction-page)
    + [Login/Register/Logout Pages](#login-register-logout-pages)
    + [Stripe](#stripe)
    + [Responsive Design](#responsive-design)
    + [Budgeting](#budgeting)
  * [Features “Shot Caller”](#features--shot-caller-)
  * [Features testing](#features-testing)
  * [Permissions](#permissions)
  * [Information Architecture](#information-architecture)
    + [Databases](#databases)
    + [Database structure for Shot Caller Production - Model Tables by App](#database-structure-for-shot-caller-production---model-tables-by-app)
      - [Django contrib auth](#django-contrib-auth)
      - [Accounts App](#accounts-app)
      - [Budget App](#budget-app)
      - [Profiles App](#profiles-app)
      - [Followers App](#followers-app)
      - [Likes App](#likes-app)
    + [Database structure for Shot Caller - Model Tables by App](#database-structure-for-shot-caller---model-tables-by-app)
  * [Languages Used - (Shot Caller and Shot Caller Production - Front and Backend)](#languages-used----shot-caller-and-shot-caller-production---front-and-backend-)
  * [Frameworks, Databases, Libraries & Programs Used - (Shot Caller and Shot Caller Production - Front and Backend)](#frameworks--databases--libraries---programs-used----shot-caller-and-shot-caller-production---front-and-backend-)
  * [Testing](#testing)
  * [Deployment (Shot Caller and Shot Caller Production - Front and Backend)](#deployment--shot-caller-and-shot-caller-production---front-and-backend-)
    + [Development platform](#development-platform)
    + [Repository](#repository)
    + [Deploy to Heroku](#deploy-to-heroku)
    + [Requirements for the Shot Caller Production DRF Backend](#requirements-for-the-shot-caller-production-drf-backend)
    + [Dependencies for the Shot Caller Production React Frontend](#dependencies-for-the-shot-caller-production-react-frontend)
  * [Credits - (Shot Caller and Shot Caller Production - Front and Backend)](#credits----shot-caller-and-shot-caller-production---front-and-backend-)
    + [Code](#code)
    + [Content](#content)
    + [Media](#media)
    + [Acknowledgements](#acknowledgements)
  * [User Experience (UX)](#user-experience--ux-)
    + [Strategy Plane](#strategy-plane)
      - [Brand Identity](#brand-identity)
    + [Scope Plane](#scope-plane)
    + [Structure Plane](#structure-plane)
    + [Skeleton Plane](#skeleton-plane)
      - [Design ?????????????????](#design------------------)
    + [User Stories](#user-stories)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


## Features “Shot Caller Production”

### Product Information
- The Home page contain information about the app’s features and links to pages containing more detail information.<br>

### Subscriptions page
- Where users can buy or upgrade Monthly Subscription with Stripe from a large selection.<br>

### Accounts Page
- Where Users can create projects and view they ones already created.<br>

### Transaction Page
- Where Users can view all their transaction for Subscriptions bought. <br>

### Login/Register/Logout Pages
- The user can Register, Login and Logout easily.<br> 

### Stripe 
- Stripe is used for the payment system.<br> 
 
### Responsive Design
- The site is responsive to all screen sizes and the images respond in proportion. <br> 

### Budgeting
- The Budget feature contains the Edit page and the Finalised Budget. The top of the Edit page contains the name of each Budget section and its current total. When clicked on it opens that section where a User can input values which are automatically totalled for that section and an number of other displaying Totals including the Grand Total. Globals can be used to quickly populate or change the crew Weeks length. The Finalised Budget, along with its Cover and Top pages can be viewed and downloaded. <br>
 
## Features “Shot Caller”
Find these here. [Shot Caller Readme](https://github.com/johnston9/shot-caller/blob/main/README.md)

## Features testing
All Features testing is covered here. [Testing](https://github.com/johnston9/Testing-Shot-Caller-Production/blob/main/TESTING.md)

[Back to Table of Content](#table-of-content)

## Permissions

Depending on their Permissions Users will has access to use different features of the app. 
Find these here. [Shot Caller Readme](https://github.com/johnston9/shot-caller/blob/main/README.md)

## Information Architecture

### Databases

- Development 
**SQLite3** was used during development and comes with Django Rest Frameworks. 

- Deployment 
**Postgres** 

### Database structure for Shot Caller Production - Model Tables by App

#### Django contrib auth
1 - <strong>User</strong> - to hold the authenticated users.<br>
  - OneToOne Key to Profile.

#### Accounts App
1 - <strong>Account</strong> - to hold the user's account details.<br>
  - Foreign Key to User.

2 - <strong>Project</strong> - to hold the user's Projects.
  - Foreign Key to User. 

#### Budget App
1 - <strong>Budget</strong> - to hold the Project's Budget information<br>
- Foreign Key to Project unless purchased as a sole product.

<!-- #### Profiles App
1 - <strong>UserProfile</strong> - to hold the registered users details.<br>
  - OneToOne Key to User

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
  - Foreign Key to Chat -->

[Back to Table of Content](#table-of-content)

### Database structure for Shot Caller - Model Tables by App
Find these here. [Shot Caller Readme](https://github.com/johnston9/shot-caller/blob/main/README.md)

## Languages Used - (Shot Caller and Shot Caller Production - Front and Backend)

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JAVASCRIPT](https://en.wikipedia.org/wiki/JavaScript)
- [PYTHON](https://en.wikipedia.org/wiki/Python_(programming_language))

## Frameworks, Databases, Libraries & Programs Used - (Shot Caller and Shot Caller Production - Front and Backend)

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
- [Postgres:](https://www.heroku.com/postgres) 
   - Postgres was added with Heroku and was used as the database for production
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
- [AWS S3:](https://aws.amazon.com/) 
   - AWS was used to send bulk Callsheet emails.
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

The React Dependencies and DRF Requirements can be found in the Deployment section.

[Back to Table of Content](#table-of-content)

## Testing
- Find the complete testing coverage here.
[Shot Caller Production Testing](https://github.com/johnston9/Testing-Shot-Caller-Production/blob/main/TESTING.md)

All functionality was tested as it was being built to ensure there were no errors, that it did what it was meant to do and that all database errors were handled correctly. <br> 

On completion the functionality of the entire app was repeatedly tested on various devices both by the development team and by Capital Numbers, the InfoTech company responsible for part of the development.<br> 

All pages were checked in Lighthouse. All errors were fixed. <br>

W3C Markup Validator, W3C CSS Validator, and JSHint were used to validate all HTML, CSS, and JS in the project, the results are in documentation.

- [W3C Markup Validator](https://validator.w3.org/) 
  - On validated by URL no errors were shown - Info messages were given for the trailing slash in the link and meta tags in index.html but were left in anyhow.
  [Result](documentation/testing/w3c-html.png)

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) 
  - W3C CSS Validator gave no errors.
  [Results](documentation/testing/w3c-css.png)

- [JSHint](https://jshint.com/) 
  - JSHint was used with "New JavaScript features (ES6)" checked in the configuration menu.
  [Results](documentation/testing/jshint)

[Back to Table of Content](#table-of-content)

## Deployment (Shot Caller and Shot Caller Production - Front and Backend)

### Development platform

   [Gitpod:](https://www.gitpod.io/docs/)
   - Gitpod was used as the development platform.

### Repository
   [Github](https://github.com/)
   - Github was used as the repository for the project.

### Deploy to Heroku
   - Heroku was used to deploy the project in development.
[Heroku](https://www.heroku.com/platform)

   - AWS was used to deploy the live project.

### Requirements for the Shot Caller Production DRF Backend

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

### Dependencies for the Shot Caller Production React Frontend

    "@emotion/react": "^11.13.3", <br>
    "@emotion/styled": "^11.13.0", <br>
    "@mantine/core": "^6.0.17",
    "@mantine/dates": "^6.0.17",
    "@mantine/form": "^6.0.17",
    "@mantine/hooks": "^6.0.17",
    "@mantine/modals": "^6.0.17",
    "@mui/material": "^6.0.1",
    "@stripe/react-stripe-js": "^2.8.0",
    "@stripe/stripe-js": "^4.3.0",
    "@tanstack/react-table": "^8.20.5",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.21.4",
    "bootstrap": "^4.6.0",
    "dayjs": "^1.11.9",
    "html2canvas": "^1.4.1",
    "jspdf": "^2.5.2",
    "jwt-decode": "^3.1.2",
    "react": "^17.0.2",
    "react-bootstrap": "^1.6.3",
    "react-dom": "^17.0.2",
    "react-hot-toast": "^2.4.1",
    "react-infinite-scroll-component": "^6.1.0",
    "react-router-dom": "^5.3.0",
    "react-scripts": "^4.0.3",
    "web-vitals": "^1.1.2"
 

[Back to Table of Content](#table-of-content)

## Credits - (Shot Caller and Shot Caller Production - Front and Backend)

### Code

- [Code Institute](https://codeinstitute.net/)
  The code for the basic React/DRF set-up for the app is from Code Institute. 
- [Django Rest Framework](https://www.django-rest-framework.org/)
Django Rest Framework documents was referred to for a number of backend issues in the project.
- [stackoverflow.com](https://stackoverflow.com/questions/45380397/scrollable-drop-down-lists-in-react-bootstrap)
Stack Overflow was referred to for different approaches to some issues including the Regex to allow only numbers and a decimal point in some Budget input boxes and how to add a scroll to a React dropdown.
- [w3schools.com](https://www.w3schools.com/)
W3schools was referred to a number of times for Javascript code examples.
  
### Content

All content was written by the developer and Capital Numbers Infotech. [Capital Numbers](https://www.capitalnumbers.com/)

### Media

The photos used for the images in the site were obtained from:

  1. [FreeImages.com](https://www.freeimages.com/)

  2. [pexels.com](https://www.pexels.com)

  3. [Unsplash.com](https://unsplash.com/photos/irRhPKPqP9Y)

### Acknowledgements
   
- I would like to thank ...

[Back to Table of Content](#table-of-content)

## User Experience (UX)
The business goals are to establish the app as a professional film production software platform, to create an online presence and to entice Users to register and purchase products.<br>

The User goals are to find out about the software, register an account, access their Account page to create and view their projects and use the "Software".

### Strategy Plane

The site aims to make an immediately impact on the User as to the nature and quality of its products through its obvious inherent professional knowledge of the film making process encouraging them to explore it's features fully, create an account and purchase products.<br>

The Budgeting Software is available as an individual product as a User will more readily open to purchase this smaller but necessary tool.

#### Brand Identity
- Brand promise: A complete film production software platform.
- Vision: Professional Creativity.
- Mission: To combine the creative and production sides of filmmaking in one all-encompassing platform.
- Values: Professional, Creative and Easy to Use.

### Scope Plane

The Scope was what was absolutely necessary for the app to deliver its basic functionality in the most enticing user friendly way. For the Budgeting Software the Scope was simply to build the most comprehensive and easy to use software possible.<br>

### Structure Plane

The site is structured so the user can navigate easily and in an intuitive way through the different features of the products. The user is taken on a journey from finding out about the two products, to purchasing products and finally using them.

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
2. As a Frequent User, I want to easily reset my password if I forget it.
3. As a Frequent User, I want to view my order history and payment details.
4. As a Frequent User, I want to easily change my password and username.
5. As a Frequent User, I want to use the Budgeting Software.

  - #### Owner/Admin User Goals 

1. As the Owner/Admin User I want to edit product prices and details.
2. As the Owner/Admin User I want to add testimonials and reviews to the Testimonial page.
3. As the Owner/Admin User I want add new testimonial lines and other marketing and sales items to the landing page.
8. As the Owner/Admin User I want to post or respond to messages in the Chat feature.
9. As the Owner/Admin User I want control over material posted on the site for legal and other purposes.

All User Stories testing is covered in the Shot Caller Production Testing page. [Testing](/TESTING.md)

[Back to Table of Content](#table-of-content)