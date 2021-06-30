###Timestamp Microservice

https://blooming-harbor-86478.herokuapp.com/  (free account with initial loading delay)

**Objective**  
Build a full stack JavaScript app that is functionally similar to this: https://timestamp-ms.herokuapp.com/ and deploy it to Heroku.

**User Story**  
1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).  
2. If it does, it returns both the Unix timestamp and the natural language form of that date.    
3. If it does not contain a date or Unix timestamp, it returns null for those properties.  

**Technology**
- Node and Express 4.14.0
- Hbs (view engine)
- Mocha (test framework) 
- Expect (assertion library)
- Git (version control)
- Heroku (hosting)

**Notes** 
- hbs is a view engine for the handlebars templating language built as a plugin for express
- a unix timestamp is a measure in seconds while the Javascript Date object returns a time in milliseconds




