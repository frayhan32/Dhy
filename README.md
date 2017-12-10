# Dhy

A wellness application based on Node.JS and React.
Feature
1. Ilness detection based on disease
2. See nearest hospital location based on profile
3. Suggested medicine following the ilness
4. Freh news about healthy

## Prerequisite

1. Node the version at least 6 to support Ecmascript 6
2. Install nodemon to automatically resfresh the browser when there is a changes. Install by
   typing this command npm install -g nodemon

## Database Migration

1. Install globally migration tools for mongo npm install -g migrate-mongo
2. To create the migration type this command migrate-mongo create sample-migration-1
3. Run the migration just type this command migrate-mongo up
4. To unde the migratioin type this command migrate-mongo down

How to start your project

1. There are docker-compose.yml inside the root directory. This will be used to boot up some
    engine such **mongodb**, **redis** to make your application work. First make sure you already install docker
    depending on your operating system. For more information about docker you can visit this link https://docs.docker.com/
2. To start the server type cd to api directory first then run this command *PORT=3001 nodemon bin/www*
3. To start the client side cd to client directory first then run this command *npm start*

### Contributor

1. Faris Rayhan <frayhan94@gmail.com>
2. Miftahul Khoir
3. Dimas Prapanca
4. Arthur Yonathan
5. Tegar Budi Cahya

External depedencies link

1. https://www.npmjs.com/package/mongodb

