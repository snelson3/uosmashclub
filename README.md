# UO Smash Club Website

This project is the home of the website for the UO Smash club. The website will host information about the games/tournaments we run, as well as hosting a rankings system for our local tournaments.

The website is written using [https://angularjs.org/](AngularJS), a library for javascript. The project was started using a fork off of [https://github.com/angular/angular-seed](angular-seed).

Note, this readme is assuming you are running on linux or mac. If you are using Windows, your steps will probably look somewhat different than what is below.

## Getting Started

To get the site running locally you need to do a few things.

### Prerequisites

You need git to clone this repository.

You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Install Dependencies

The project has a number of dependencies, which can be installed using npm, and bower.

npm is the [node package manager][npm].

bower is the [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so to install dependenceis we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/ui/bower_components` - contains the angular framework files

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.



## Directory Layout

    app/                --> all of the files to be used in production
      data/             --> Where Ranking information/other data is kept
      img/              --> Where icons/images used on the site are kept
      ui/               --> Where all of the html/css/javascript is kept
       css/             --> css files
       fonts/           --> font files
       js/              --> javascript files
        controllers/    --> application controllers
        directives/     --> application directives
        services/       --> custom angular services
        app.js          --> application
        filters.js      --> custom angular filters
       templates/       --> partial html templates

## Git

For a quick introduction to git, try this short [http://try.github.io/levels/1/challenges/1](interactive tutorial).

We are using a simpler version of the gitflow branching structure, described [http://nvie.com/posts/a-successful-git-branching-model/](here).

We have two main branches, develop and master, and may have a number of temporary feature branches from time to time.

You can use `git branch` to see the list of branches you are on, and `git checkout BRANCH_NAME` to checkout a specific branch.

1) Develop: This is the default branch, and the one you should be on most of the time. Whenever you do work, check in to this branch, unless you are on a feature branch. By definition, develop should be the most unstable branch. 
1) Master: This branch won't be updated as often, and is hopefully more stable (uosmash.me is usually going to be running off of the latest version of master). I will periodically merge the changes from develop into master.

### Feature Branches

Lets say you have some big feature you want to work on, whether it is a major UI redesign or the creation of an account system. Whatever this feature is, it might take multiple days and you want to be able to check in changes without affecting the rest of develop (As the rest of the team will be making other changes). This is when you create a feature branch, with `git checkout -B BRANCH_NAME`. This will create BRANCH_NAME that is identical to the branch you are on, and it will check out the new branch for you. You can make as many changes as you want to this new branch and develop won't be affected.

When your feature is complete, make sure your branch is pushed to github (`git push origin BRANCH_NAME`), and then it is ready to be merged. Go to the github project [https://github.com/snelson3/uosmashclub](page), and create a pull request. Another member of the development team will then be able to review the changes made, and merge the branch into develop. Once this is done, the temporary feature branch will be deleted.

### Daily git workflow

At the beginning of every work session you should run `git pull` inside the project directory to pull the most recent version of the project to your machine. 

After you have made some changes, it is time to commit them.

1) run `git status` to see an output of all the files that have changed.
1) run `git add MODIFIED FILE` for each file modified.
1) run `git status` again to make sure all of your changes are staged.
1) run `git commit -m "MESSAGE" do commit your changes with MESSAGE describing your changes.

At the end of the day, you can push your changes to the server with `git push`.

## Issues

Github has a very nice issue tracker, for internally tracking/reporting bugs. If you encounter a bug, or think of an feature that should be added, go to [https://github.com/snelson3/uosmashclub/issues](issues) on Github, and create an issue. Describe what the issue is (if it is a bug include precise steps to reproduce), and add tags (there are tags for  bug/enhancement as well as how the issue should be prioritized), and you can assign it to be someones responsibility to fix.

## Testing

Tests will be added soon.

There are two kinds of tests in the angular-seed application: Unit tests and End to End tests.

### Running Unit Tests

TBD


## Contact

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://pivotal.github.com/jasmine/
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server