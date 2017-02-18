# kind-assistant
With the idea of bridging the front-end and back-end apps of _Logro_, this project aims to provide interfaces so that every app is modular. It works in tandem with the project called 'hungry-interceptor' which provides similar functionality, but only for back-end apps.

# Notes
See zenful-automata, another project for _Logro_ which assists in starting servers in unison.

# History
The controllers directory, written with express.js, includes code from two main areas:
1. 'activity.js', 'experience.js', and 'log.js' are the main centers of business logic which originated in the project called 'evgroio' - these methods were refactored to work with this application
2. Interceptors are the key to acting as middleware between front-end apps and the 'hungry-interceptor' project interfaces that provide statistical and processed information of logs/experiences/activities

The file 'app.js' which is at the root of the project was originated from the hackathon-starter project: https://github.com/sahat/hackathon-starter

# Future goals
* (DONE) Remove authentication/authorization logic in this project, and keep business logic into this project
* Then, in the other project, use JWT tokens.
* The main goal is to break this microservice into smaller component service parts
* Should this go well, it is prudent to consider dockerizing the auth project

# TODO
* Refactor - Controllers into more discrete modular sections of code
* Feat - Build method calls to retrieve previously run analyses

# Deploy instructions, for node 4.0+ running on AWS
I had to create the directory for the node-sass binding
1. kind-assistant/node_modules/node-sass-middleware/node_modules/node-sass/vendor
2. Add this file, this one is for node 4.0.0.... https://github.com/sass/node-sass-binaries/blob/master/darwin-x64-46_binding.node

For more references see these links:
* General issue page: https://github.com/sass/node-sass/issues/1162
* This one is for node 0.12: https://github.com/sass/node-sass-binaries/blob/master/darwin-x64-14_binding.node
* This one is for node 4.0.0: https://github.com/sass/node-sass-binaries/blob/master/darwin-x64-46_binding.node

# After installing packages

From the root directory:
```
cd kind-assistant/scripts
```

Run this command to start a cluster of node servers:
```
$ node ../cluster_app.js
```

# Inspiration notes
A substantial part of the code was inspired/modified from Hackathon Starter and can be found here: https://github.com/sahat/hackathon-starter

# License
GPLv3
