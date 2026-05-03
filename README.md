# Lab 5 
Name: Albert Bunyi  
Expose Website: https://albrrr.github.io/Lab5/expose.html

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user. 
      
    No, I would not use a unit test to test the message feature. Unit testing is used for testing small functionalities of a program, but sending messages between users involved a lot of parts working together making it not feasible to unit test it.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.  
     
   Yes, you would use a unit test to test the max message length feature. The function for checking whether a message is within the max length constraints can be a standalone function, making it feasible to unit test.