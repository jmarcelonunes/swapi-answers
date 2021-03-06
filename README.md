# swapi-answers
Node.js application to consume data from an back4app database, using parse-server, and deliver answers to predetermined questions in a csv format. 


### Prerequisites

You have to have installed NodeJs. Also, if you wish, you may have Yarn installed.
```
https://nodejs.org/en/
```

```
https://classic.yarnpkg.com/en/docs/install/
```

### Installing

First, clone the repo and enter in the src directory:
```
cd server\src
```
Then run:
```
yarn install
```
or
```
npm install
```

## Running
Just run the following command:
```
yarn start 
```
or
```
npm start 
```
After the server is running, go to your browser and type the following url:
```
http://localhost:3333/downloads/csv
```
At this point, the CSV file will be downloaded containing all the answers to the following questions:
```
What's the name of the first ever Star Wars film?
Which species live less on avarage? 
How many characters are male and how many are female?
What is the avarage height of the characters?
Wich characters speak the language Gungan Basic?
How many characters live in the most populated planet?
```
## The csv
The csv file will have the following structure:
```
"Pergunta 1";"Pergunta 2";"Pergunta 3";"Pergunta 4";"Pergunta 5";"Pergunta 6"
"Answer1";"Answer2,Answer2,Answer2";"Answer3";"Answer4";"Answer5,Answer5,Answer5";"Answer6"
```

## Running the tests

There are 4 tests suites. Three of them are unit tests, they test methods and uses parse-mockDB to mock the database and test it. Finally, there is a test suite dedicated to integration testing, it uses the library supertest so it can check the functionalities of the RestAPI and it's routes. 
It is good to mention that the server will not be listening on any port when the integration test execute.
To run the tests:
```
npm test
```
or 
```
yarn test
```


## Built With

* [Parse Server](https://www.npmjs.com/package/parse)
* [Express](https://www.npmjs.com/package/express)
* [SuperTest](https://www.npmjs.com/package/supertest)
* [Jest](https://www.npmjs.com/package/jest)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Parse-MockDb](https://www.npmjs.com/package/parse-mockdb)
* [Eslint](https://www.npmjs.com/package/eslint)
* [Json2csv](https://www.npmjs.com/package/json2csv)

