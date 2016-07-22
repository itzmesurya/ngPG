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

## Learnings:

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


[Back to top](https://github.com/itzmesurya/ngPG)