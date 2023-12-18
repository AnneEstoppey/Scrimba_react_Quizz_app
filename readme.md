## Quizz app - Solo project (Scrimba)
This was the solo project at the end of the React class on Scrimba.
<br> For information about the content of the class please see [here](https://scrimba.com/learn/learnreact).

#### Install
Download the repo to your local, we were using React 18 and Vite.<br>
Please check out the dependencies and versions in the package.json file.<br>
The app will run on your local host.

#### Introduction
In this project we elaborated the app with chatGPT (both 3.5 and 4, as a plus user on openai). The aim was to learn using chatGPT as an assistant for coding. 
Also we had the design of the app in Figma, which of course helps a lot to start with (link to my Figma [here](https://www.figma.com/file/DdAGVzWAsASpXk1pj2fhRm/Quizzical-App-(Copy)?type=design&node-id=0%3A1&mode=design&t=h8hPHnzgke6cfX4t-1)).

We started by feeding chatGPT 4 with a prompt describing the context of the app and attaching a screenshot of the introduction screen from Figma:
<br> Promt: "I am starting a new project in react, which is a quiz app.
I need first help to design the app. Also I am using react 18 and Vite.  I am attaching a picture of the start screen for the app. 
Can you generate both the code (App.jsx, Intro.jsx) and the styling (style.css) for it?
Also keep in mind that this is just for starting the quiz game, then another component will be shown to the user with the actual quiz questions. 
I will give you another picture to build the question component."

From there on we developed the app first with chatGPT 4, and when we used all our free requests, we switched to chatGPT 3.5.

In our opinion, the most difficult part was the implementation of the answer options colours: lavender colour when answers are selected by user, and as soon as the user press the 'check answers' button, the correct answers will be shown in green, and the wrong answers in red (see screenshot below).

We reckon that this is one way of creating the app, and probably does not represent 'the' solution. But the app is fully functional as is.
<br>If you have feedback, please create a pull request 😊

#### Starting screen:
![scrimba_quizzical_01openingscreen](https://github.com/AnneEstoppey/Scrimba_react_Quizz_app/assets/35219455/a998844f-d733-4ea7-be9a-2c0b9f715179)

#### Example of questions and answers with final score:
![scrimba_quizzical_04questions_answers](https://github.com/AnneEstoppey/Scrimba_react_Quizz_app/assets/35219455/b5496fa4-1acb-4d08-87c9-ddae44d32e6e)

#### Conclusion
The experience with using chatGPT 4 and 3.5 for developing this app was very interesting. We believe that with more practice this will get considerably faster. Especially for apps which are not overwhelmingly complicated.
We also think that one has to have knowledge beforehand about how the app should be structured and how the components will interact with the main app.
Finally we believe that this way of developing is very suitable for people who are still learning, but still, want to be able to create apps 👍
