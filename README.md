# IONCodingChallenge

# Prerequisites -
1. Node.js 8.14.0
2. MongoDB 3.6

# Setting up environment -
1. Start mongodb server -
   create a folder in any directory - "mongo_db" and then run below command in a command prompt -
   -> mongod --dbpath F:\Work\mongo_db
2. Open command prompt and move your cursor into assessments directory -
   -> cd assessments/
3. Install application dependencies -
   -> npm install

# How to run the programs -
1. -> node validatePassword.js
    (It will print the validity result of all the passwords in a given array).
2. -> node server.js
    (It will start a web service(server) on port 8080)

    # Follow these steps to use "todo REST API's HTTP methods" -
    1. POST URI - http://localhost:8080/todo/add
       Body - "Weekly call at 8 AM"
       Headers - "content-type" : "text/plain"
                 "Accept": "application/json"
    2. GET URI - http://localhost:8080/todo
       Headers - "Accept": "application/json"
    3. DELETE URI - http://localhost:8080/todo/delete/:id