# ngPG

## Description

**Contains a sample app that shows steps to create a web application using Node and AngularJS**

###**Steps to setup this project in your machine:**<br />

1. Download the project onto your local machine. (If you are comfortable with git then clone it. It is equally simpler).

2. Make sure node and git-bash are installed on the machine. Git-bash is optional as the commands can be run even from windows terminal (command prompt).
    * Node download - https://nodejs.org/en/download/
    * Git-bash - https://git-scm.com/downloads

3. Now open the project folder, and open the git bash in the folder and type the command - <br /><pre>$ npm install</pre>

</br>

## Learnings - Step by step creation of this sample app:

###1. **GULP** :
* Gulp is a javascript task runner. To add a task in gulp first add a *"gulpfile.js"* to the folder.
* In the gulpfile.js add the following code : 
</br>
```
var gulp = require('gulp');

gulp.task('default', function () {
    console.log("default task created");
});

```

Later you can call the task from the git bash (or command prompt) that is opened in the root folder of the app as shown below:

<pre>$ gulp default</pre>

###2. **Add our vendor scripts** :
We are now going to use *bower* to install all the vendor scripts and css. For this we first install bower on the machine using following npm command:

<pre>$ npm install bower -g</pre> 
</br>("-g" is a global flag, this installs bower for the machine, rather than just the project. Also more info about bower can be found [here](https://bower.io/))

Now we are going to need the following bower packages:

* Jquery    (version 1.12.4)
* Angular   (version 1.5.7)
* Bootstrap (version 3.3.6)

It can be done with a single bower install command as shown below:

<pre>$ bower install --save jquery#1.12.4 angular bootstrap</pre> 

###3. **WIREDEP** :
Now that we have the gulp setup, we are going to try and wire the vendor scripts on the index.html.

*  First add the *wiredep* package using the npm command below :

<pre>$ npm install wiredep --save-dev</pre>

Note: --save-dev saves the package as a developement dependecy in package.json.

* Now we create a gulp task to inject the vendor scripts :

```
gulp.task("inject-vendor-scripts", function () {

    var wiredep = require("wiredep").stream;

    var wiredOptions = {
        bowerJson: require("./bower.json"),
        directory: "./public/lib",
        ignorePath: "../.."
    };

    return gulp.src("./public/app/views/*.html")
        // .src will look for source of html files which call for dependencies
        // using the syntax bower:js or bower:css.  
        .pipe(wiredep(wiredOptions))
        // wiredep options are passed to configure the wiredep stream 
        .pipe("./public/app/views");
        // Files will be picked from gulp.src call stated above and modified 
        // in the stream and placed into the gulp.dest ie in a specified 
        // destination.
});

```

[Back to top](https://github.com/itzmesurya/ngPG)