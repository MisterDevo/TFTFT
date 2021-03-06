<p align="center">
 <a href="https://tftft.herokuapp.com" >
  <img alt="TFTFT" src="https://raw.githubusercontent.com/MisterDevo/TFTFT/master/public/images/logo.png">
 </a>
</p>

[![TFTFT Version](https://img.shields.io/badge/Demo-Heroku_App-746cac.svg?style=flat-square)](https://tftft.herokuapp.com/)
[![GitHub version](https://badge.fury.io/gh/misterdevo%2Ftftft.svg)](https://tftft.herokuapp.com/)

[![Run Status](https://api.shippable.com/projects/56a61fc31895ca4474728105/badge?branch=master)](https://app.shippable.com/projects/56a61fc31895ca4474728105) [![dockeri.co](http://dockeri.co/image/misterdevo/tftft)](https://hub.docker.com/r/misterdevo/tftft/)

 [![Travis](https://img.shields.io/travis/MisterDevo/TFTFT/master.svg)](https://travis-ci.org/MisterDevo/TFTFT/branches)[![Cov Status](https://api.shippable.com/projects/56a61fc31895ca4474728105/coverageBadge?branch=master)](https://app.shippable.com/projects/56a61fc31895ca4474728105)

 [![Sauce Test Status](https://saucelabs.com/browser-matrix/misterdevo.svg)](https://saucelabs.com/u/misterdevo)

[![Code Climate](https://codeclimate.com/github/MisterDevo/TFTFT/badges/gpa.svg)](https://codeclimate.com/github/MisterDevo/TFTFT)[![Codacy Badge](https://api.codacy.com/project/badge/grade/a5046941e5224dba9984a773d32f82bd)](https://www.codacy.com/app/mister-devo/TFTFT)[![bitHound Code](https://www.bithound.io/github/MisterDevo/TFTFT/badges/code.svg)](https://www.bithound.io/github/MisterDevo/TFTFT) [![Dependency Status](https://img.shields.io/david/misterdevo/TFTFT.svg)](https://david-dm.org/misterdevo/TFTFT)[![devDependency Status](http://img.shields.io/david/dev/misterdevo/TFTFT.svg)](http://david-dm.org/misterdevo/tftft#info=devDependencies)[![bitHound Dependencies](https://www.bithound.io/github/MisterDevo/TFTFT/badges/dependencies.svg)](https://www.bithound.io/github/MisterDevo/TFTFT/master/dependencies/npm)

# Test First Test First Test ( TFTFT )  
## _An application that show basic test reports (mocha & istanbul) with a max of cool stuff_

_Run with NodeJs_  


### TFTFT ExpressJs - TFTFT AngularJs :

##### `npm install`  
* **ExpressJs** dependencies : _body-parser - cookie-parser - debug - express - jade - morgan - serve-favicon_
* **Bower** dependencies : _bower - bower-requirejs_
  * **`bower install`** is called in `npm postinstall`  **AngularJs - RequireJs - BootstrapCss**
  * **`bower-requirejs`** is called in `bower postinstall` (_see .bowerrc_) to generate main requirejs file
* _**md-mailgun** : my dependency to send me a mail with mailgun_

##### `npm start`
Start **ExpressJs** server and listen to `http://localhost:3000` to serve api and static files.

### TFTFT Test :

##### `npm test`  
_Mocha runner with config (`test/**/*.js`) and Istanbul auto-instrumented coverage/report_
* TFTFT Unit Test : **mocha**
* TFTFT Route Test : **supertest**
* TFTFT Coverage Test : **istanbul**
* TFTFT Specification Test : **selenium-webdriver**  in folder 'test/spec/'  
* _Note for Specification Test :  
  **Selenium Server** : Local or Remote ? ... Up to Developer !  
  Default to Remote for the needs of this repo : **saucelabs** instrumented in tests with **TravisCI** configuration._  


  _For local or remote :  
  **In `test/spec/test-wdjs-spec.js` change `var isLocalSeleniumServer = false;`**_
     * _**Local Selenium Server :**_  
       * _Change config with :_  
       ```
         var option_local = {
                 server: 'http://127.0.0.1:4444/wd/hub',
                 desiredCapabilities: { browserName: 'firefox' },
                 baseUrl:'http://localhost:3000'
         };
       ```

       * _Start a local selenium server_  

        ```
        /*Example with selenium-standalone (not include in this package)*/
        npm install selenium-standalone;
        ./node_modules/.bin/selenium-standalone install;
        ./node_modules/.bin/selenium-standalone start;
        ```  
     * _**Remote Selenium Server with SauceLabs :**_  

       _For Travis :  
       **In `test/spec/test-wdjs-spec.js` change `var travis = true;`**_

       * _**With Travis environnement** `var travis = true;` (default) :_  
        _Config in **`test/spec/option-travis-sauce.js`** :_  
       ```
        SAUCE_USERNAME=[secure] and SAUCE_ACCESS_KEY=[secure] must be set in Travis env variable
        TRAVIS_JOB_NUMBER, TRAVIS_BUILD_NUMBER are automatically set by Travis
        _BROWSER, _PLATFORM, _VERSION are define in .travis.yml matrix
        ```

       * _**Without Travis environnement** `var travis = false;` :_   
       _Config in **`test/spec/option-sauce.js`** :_
        ```
        In local environnement :
        $ export SAUCE_USERNAME=[secure]
        $ export SAUCE_ACCESS_KEY=[secure]
        ```

      _Change baseUrl to address app in a cloud developpement environnement  
      For this repo, **`baseUrl:'http://nodeXX.codenvy.io:XXXXX/'`** on Codenvy_  


### TFTFT Resources

_For app example  : Mocha test html reports + Coverage reports + saucelabs matrix_

##### `npm run app-resources`  

**Istanbul** auto-instrumented coverage/report - **Mocha** runner with default config (`test/unit/*.js test/route/*.js`) for :
* TFTFT Mocha doc reporter  _('one by one' in `public/report`)_
* TFTFT Istanbul Coverage Test Report in `public/cov`
* TFTFT Saucelabs matrix : download the last remote tests badge to `public/images/misterdevo.svg`

### TFTFT Automation
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/)

Tasks automation with Grunt for unit and route tests with Istanbul Coverage Test Report during developpement

##### `grunt`

* grunt-contrib-watch
* grunt-contrib-clean
* grunt-mocha-istanbul
* grunt-contrib-jshint
