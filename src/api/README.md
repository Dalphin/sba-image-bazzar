## MongoDB installation

Install the latest version of mongoDB in your local system (https://www.mongodb.com/download-center/community).


## Configure backend api server

Navigate to src/api folder, then run the command one by one.
1. `npm init -y`
2. `npm install -g --save express body-parser cors mongoose`
3. `npm install -g nodemon --save-dev`

## Start MongoDB and Nodemon Server
Start the mongodb and nodemon server by using the command `mongod` and `nodemon server`. The server started in following path (localhost:4000)

## Run - MongoDB queries
open the mongo shell(mongo.exe) from your mongodb installation directory (or) run the `mongo` command in visual studio code terminal.

once db has pointed, then run the command one by one.
1. run `use imagebazzar` (switched to db imagebazzar)
2. run all the queries from the mongo-mock.txt file.
