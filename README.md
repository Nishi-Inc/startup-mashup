# startup-mashup
This repo contains solutions to the problems of Hackathon Web held in Startup Mashup. The language used here is Java.

## To build
1. Please have maven installed.
2. The project is created using IntelliJ Idea with LOMBOK plugin installed.
3. Please install lombok plugin to build this project.
4. The language level used is Java 1.8 hence it may not be compatible with Java SE7.
6. Admin panel is in the `admin-panel` branch of the same repository.
7. Database used in MongoDB, a NoSQL database.
8. The configuration is in ApplicationConfig.java file, please configure the MongoDB installation and/or set
variables as per your Mongo installation.
9. There must be a collection named `User` in the db.
10. It is a REST API.`api` module is deployable on Tomcat 7. The uri would be at `/v1`.

