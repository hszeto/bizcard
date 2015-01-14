Angular JS project.

Build with the help of Yeoman.

A Business Card Orgainzer.

Can be search and filter in the search page.

Dependencies include:
	'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'

For Heroku deployment, read: http://www.sitepoint.com/deploying-yeomanangular-app-heroku/
	$ grunt --force

	touch web.js
		// A simple Node server for Heroku deployment
		var express = require('express');
		var app = express();
		var public_path = require('path');
		app.use(express.static(public_path.join(__dirname, 'dist')));
		app.listen(process.env.PORT || 5000);

	touch Profile
	 	web: node web.js
