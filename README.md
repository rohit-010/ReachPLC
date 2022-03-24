# ReachPLC Assignemt
Reach plc microservice and react assignment

Suggested architecture for assignment is as shown in below diagram

 1) There will be separate microservice for each api endpoint front end will call
 2) Each microservice will sync content to Event Bus , Event bus can be Apache kafka/RabbitMQ etc
 3) Aggregate microservice can be present if different front end client wants data , also can be used on initial front end application load

Advantages:
  1) If any of the microservice goes down , whole application wont go down as data will be synced between microservices and event bus
  2) We can introduce new microservices serving different content whenever needed
  3) Event bus data can be stored in permanent storage , which can be used to perform some analytics task or even by new microservices
    when introduced later in architecture
  4) Logic is maintained in backend microservices , so we can change front end clients or multiple front end clients can use same microservices

![image](https://user-images.githubusercontent.com/21234961/159929781-101ecca2-d7cb-4200-b8a4-78e5f058387c.png)
