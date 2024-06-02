# QA_Test_Project
 Swag Labs testing suite built in Webdriver.io, Typescript, Cucumber & Allure Reporter.

## Instructions on how to set up, run the tests, and view the reports:
#### Set-up: 
- Verify you have **node.js** installed by running 
```node -v```

If no version number is returned, or if your version is lower than 14, please download it from https://nodejs.org/en/download 

- Verify you have **Typescript** installed by running
```tsc -v```

If no version number is returned, please install it via your command line by running 
```npm install -g typescript```

- Verify you have **Allure Reporter** installed by running 
```allure --version```
If no version number is returned please download it using ```install npm install -g allure-commandline --save-dev```

NOTE: At time of writing, my machine has node.js "v20.12.2", Typescript "Version 5.4.5", and Allure "2.29.0". 
If you are having issues then it may be recommended to use these versions.

#### Configuration: 
- Configure your Saucelabs credentials:
  - You can get these credentials by signing up on: https://saucelabs.com/sign-up
  - Once registered > Sign into the Saucelabs website > Click on Key icon to expose your details
  - In wido.conf.ts, replace the <omitted> values where 'user'= your Username and 'key'= your Access Key/
    - NOTE: Keep 'region' as eu assuming your Saucelabs account is set-up from Europe. If you have issues, you may need to change this value. See https://webdriver.io/docs/configuration/#region for more details if needed.
   
#### Running Tests: 
- Open your command line
  - ```cd``` into the ```test``` directory
  - Run ```npx wdio wdio.conf.ts```
 
#### Viewing Results: 
- Results can be veiwed in the command line, and extra detail can be found in Saucelabs:
  - After a test run, you will see the logs print the number of passing & failing scenarios, along with a Saucelabs URL - e.g. ```Check out job at https://app.eu-central-1.saucelabs.com/tests/ebdaeb0b15d14b8b8b76654250490ca4?auth=d3d7033ab789749cca0a18c4fe32d5f0```
  - Visit this link in order to see your Video, Screenshots, Logs and anything else relevant from the test run (especially helpful to help debug why a Scenario may be failing).
- Allure Reports will also show the results:
  - Run ```allure generate allure-results --clean -o allure-report``` to generate the report
  - Run  ```allure open allure-report``` to view the report
    
 ## An explanation of the folder structure and test design approach:
 #### Folder Structure 
- test: This is the main directory. In a real-world project, where the application code is in the same repo, this is how we would separate test code from application code. 
- features: This directory contains Gherkin feature files that describe the behavior of the application from a user's perspective.
- step-definitions: This directory holds the implementation of the steps described in the feature files. Each step definition file contains code written in TypeScript that defines the behavior of the steps.
- node_modules: This directory contains all the dependencies installed via npm (Node Package Manager). It's generated automatically by npm and should not be manually modified.
- package-lock.json: This file locks down the exact version of each dependency and its transitive dependencies that were installed when npm install was run.
- package.json: This file contains metadata about the project and specifies the project's dependencies, scripts, and other configurations. It's used by npm to manage the project's dependencies and scripts.
tsconfig.json: This file contains TypeScript compiler options and configurations for the project. It specifies how TypeScript files should be compiled into JavaScript.
- wdio.conf.ts: This file contains configuration settings for WebDriverIO, and defines browser capabilities, test suites, reporters, and other settings for running tests.

 #### Test Design Approach
- Started Exploratory testing to understand the site and highlight test cases that would be good to automate
- Employed Behavior-Driven Development (BDD) principles to write clear and concise feature files outlining the behavior of the application:
  - These scenarios are split into feature files per Web page.
  - The Test Pyramid practice was followed (see assumption below - that unit test coverage is already existing).
 
 ## Any neccessary background information or assumptions about the test scenarios:
  - I have made the assumption that all input field validations would be already covered at unit test level e.g. min, max, empty, null, special characters, numbers, too long/too short, postcode invalid format etc.
- I have made the assumption that the site is fully functioning as intended, as my assertions are based on how the site currently behaves. 
