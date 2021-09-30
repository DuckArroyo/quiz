# challenge4
https://duckarroyo.github.io/challenge4/

#EXTERNAL SOURCE USED FOR THIS PROJECT
I used this video tutorial to develop the code. The creator also provides the code in a repo, however, I typed my code along to the video and then modified it to meet the project requirements
https://youtu.be/riDzcEQbX6k
https://github.com/WebDevSimplified/JavaScript-Quiz-App

##Quizeenater

##Notes
The application is not finished but it is functioning.
Non working parts

- User name is not properly being stored in local storage.
- User name is being overwritten after a retry
- Cannot "getItem" from storage to display
- Did not create items to display in scores page.

Working parts

- Quiz loops correctly
- Quiz can be retaken
- User name is asked and saved temporarily
- Scores button works
- Can return to quiz from Scores display
- Timer starts on click, stops when quiz ends, resets for next quiz.
- Questions can be easily updated to change quiz length

Challenge - user wants a quiz to test their JavaScript fundamentals!

Action items
*Create HTML, CSS, JavaScript
*create layout
create framework for game

- clock starts when question starts
- question requires input - validate input
- input needs to be verified correct or incorrect
- store score in localstorage

Requirements from Acceptance Criteria

1. Start button
2. On Start timer starts and question displays.
3. User enters input
4. - not requested, provide visual feedback Correct/Incorrect
5. When question is answered correctly - add to score
6. When question is answered incorrectly - remove time from clock
7. User provides initials for score

#Acceptance Criteria
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
