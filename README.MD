# AngularJS Template Basic for JAVA Web Applications
## Requirements
1. Modern Browser (Firefox, Opera, Internet Explorer, Chrome, Safari ect... and relatives mobile versions see Bootstrap and AngularJS requisites)

## Requirements for developers
### Frontend
1. good with npm and node.js for testing (I use http-server also)
2. Chrome or Firefox for testing
3. A good IDE that support javascript, typescript and angularjs.
### Backend
1. Glassfish Server
2. a good IDE to programming in J2EE I found with Glassfish is very easy Netbeans.

## Introduction
With this template I integrate AngularJS (1.5.x) with Bootstrap and the data of this template is populated through a simple web service connected to a MYSQL DB.
I used AngularJS 1.5.8 because this version was tested directly from the AngularJS Team.

## Frontend features
The template uses 2 types of charts (chart.js, nvd3.js based on d3.js) . With these two libraries is possible to create many charts (and more) that are useful in many proposes.
Theoretically is possible to implement also Echarts that are very powerful for multivariate graphs.
The data are driven in to the controller through an angularjs AJAX calls. 
The sanitize module improve the security and animate module provide a management of angularjs native animations. (The security policy must also management via back-end)
JQuery is installed just for using some simple graphics features like preloaders. It is also possible to implement preloaders just with AngularJS (useful in ng-view transitions).

## Backend features
The webservice is on a glassfish server and uses objects entities related to the database(MYSQL). 
The servlet for the web service use session beans with entities (EJB) that improve the availability in multi-threads requests.
The parser json is programmed from the scratch. This type of web service is just for evaluate proposes and not is useful when the resources would be enormous (but is useful and effective for simple account interfaces). 
Normally I use Jackson libraries and Gson (from google).
This web service is very simple and return just the data that is useful for the frontend. This web service work with cross-origin domain that in production needs more security.
To improve security is important that the web service accepts just SSL requests, SSL encrypted sessions and uses security tokens.
In a Enterprise Application is important and useful to create JSP pages that support EL syntax and create templates.

## Contact
Other informations please contact me: francesco@capodanno.click
