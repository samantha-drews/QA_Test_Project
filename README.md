# QA_Test_Project
 Swag Labs testing suite built in Webdriver.io, Typescript, Cucumber & Allure Reporter.

## Instructions on how to set up, run the tests, and view the reports:
#### Set-up: 
- In your command line, verify you have node.js installed by running 
```node -v```

If no version number is returned, or if your version is lower than 14, please download it from https://nodejs.org/en/download 

- In your command line, verify you have Typescript installed by running
```tsc -v```

If no version number is returned, please install it via your command line by running 
```npm install -g typescript```

NOTE: At time of writing, my machine has node.js version "v20.12.2" and Typescript version "Version 5.4.5", so if you are having issues then it may be recommended to use these versions.

#### Running Tests: 
- Open your command line
  - ```cd``` into the ```test``` directory
  - Run ```npx wdio wdio.conf.ts```
 
#### Viewing Reports: 
- Allure reports have not been fully implemented yet.
- In the meantime, we can view results in the command line and in Saucelabs
  - After a test run, you will see the logs print the number of passing & failing scenarios, along with a Saucelabs URL - e.g. ```Check out job at https://app.eu-central-1.saucelabs.com/tests/ebdaeb0b15d14b8b8b76654250490ca4?auth=d3d7033ab789749cca0a18c4fe32d5f0```
  - Visit this link in order to see your Video, Screenshots, Logs and anything else relevant from the test run.
    
 ## An explanation of the folder structure and test design approach:
 TODO 
 ## Any neccessary background information or assumptions about the test scenarios:
 TODO
