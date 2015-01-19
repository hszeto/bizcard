Angular JS project. <br>
Build with Yeoman. <br>
 <br>
A Business Card Orgainzer. <br>
Can be search and filter in the search page. <br>
 <br>
Dependencies include:
	'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule' <br>
 <br>
For Heroku deployment, refer to: http://www.sitepoint.com/deploying-yeomanangular-app-heroku/ <br>
	$ grunt --force <br>
 <hr>
	touch web.js <br>
		// A simple Node server for Heroku deployment <br>
		var express = require('express'); <br>
		var app = express(); <br>
		var public_path = require('path'); <br>
		app.use(express.static(public_path.join(__dirname, 'dist'))); <br>
		app.listen(process.env.PORT || 5000); <br>
 <hr>
	touch Profile <br>
	 	web: node web.js <br>
<hr>
How to use:<br>
- Enter card info
- click on "search" button
- try search query in the search box. result will automatically populate.
- click "Edit All" to edit any entry. 
- Remember to click "Save All".
- click "Delete" to remove an entry.
