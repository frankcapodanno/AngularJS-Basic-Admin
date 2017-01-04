# AngularJS Template Basic for JAVA Web Applications
## Requirements
1. Modern Browser (Firefox, Opera, Internet Explorer, Chrome, Safari ect... also mobile versions) 
You can visit this page to see this template: http://capodanno.click/bootstrap-examples/angularjs-admin-basic 

## Requirements for developers
### Frontend
1. Good with npm and node.js for testing (I use http-server also).
2. Chrome or Firefox for testing.
3. A good IDE that support javascript, typescript and angularjs.
### Backend
1. Glassfish Server.
2. A good IDE to programming in J2EE.
## Introduction
With this template, I integrate AngularJS (1.5.x) with Bootstrap and the data of this template is populated through a simple web service connected to an MYSQL DB.
I used AngularJS 1.5.8 because this version was tested directly from the AngularJS Team.

## Frontend features
The template uses 2 types of charts (chart.js, nvd3.js based on d3.js) . With these two libraries is possible to create many charts (and more) that are useful in many purposes.
Theoretically is possible to implement also Echarts that are very powerful for multivariate graphs.
The data are driven by the controller through an Angularjs AJAX call. 
The sanitize module improve the security and animate module provides a management of angularjs native animations. (The security policy must also management via back-end)
JQuery is installed just for using some simple graphics features like preloaders. It is also possible to implement preloaders just with AngularJS (useful in ng-view transitions).

## Backend features
The web service is on a Glassfish server and uses objects entities related to the database(MYSQL). 
The servlet for the web service use session beans with entities (EJB) that improve the availability in multi-threads requests.
The parser json is programmed from the scratch. This type of web service is just for evaluating purposes and not is useful when the resources would be enormous (but is useful and effective for simple account interfaces). 
Normally I use Jackson libraries and Gson (from google).
This web service is very simple and returns just the data that is useful for the frontend. This web service works with a cross-origin domain that in production needs more security.
To improve security is important that the web service accepts just SSL requests, SSL encrypted sessions and uses security tokens.
In an Enterprise Application is important and useful to create JSP pages that support EL syntax and create templates.

## Contact
For others information please contact me: francesco@capodanno.click
