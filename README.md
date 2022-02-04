# Online Messaging App

This React app allows users to login, create chat channels and chat with multiple people simultaneously in real-time. It implements Firebase to allow user authentication and allow the app to store users, chat rooms and messages.

## Languages/Frameworks/Libraries Used

* React
* Redux
* Styled Components
* Material UI
* Firebase

## Key Features

* Allows users to login with Google with user authentication via Firebase Auth.
* Allows users to create new chat channels and send messages in them. This is done via Firebase-Hooks which create new collections and documents for the channels and then stores the messages within those channels in the Firebase cloud database.
* The channels list and the chat messages are also accessed via firebase-hooks from the firebase database. 
* Multiple users can log in and use the app to message eachother in real-time.
* Prevents anyone from accessing the website without successfully logging in due to strict session management.

## Demo Video

https://youtu.be/e7E3YzMj_ng