notes

express, node, nodemon

nodemon -- to watch node development on every changes

Routing

get /users
post /users
get /user/:id
delete /users/:id
patch /users/:id

create schema

model

controllers

https://zellwk.com/blog/crud-express-mongodb/
https://zellwk.com/blog/mongoose/

https://docs.mongodb.com/manual/reference/mongo-shell/

Follow steps here to install mongodb on MacOS(bigsur)

https://shashank6341.medium.com/installing-mongodb-on-macos-catalina-big-sur-or-older-d47c18b0c57d

### Env (.env) file

DB_URI='mongodb://127.0.0.1:27017/users'

## Steps to start the server

run `mongo` in terminal
`show dbs` to list all the available data bases
`use users` use users db

### run the server

`npm start`
this will run the server in http://localhost:5000

### validate rest, use VS code add-on REST Client

then use the file called route.rest to run the full cred
