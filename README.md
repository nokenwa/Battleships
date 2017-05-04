# Battleships - Term 2 Intro to Programming Project

##Introduction
Hi, this programming project was a multiplayer game based on the popular board game Battleships. It was meant to challenge me to learn how to build, interact with and maintain an online database through JavaScript. The only Database framework that I had any clue about was MySQL. WORST MISTAKE OF MY LIFE. MySQL is the worst way to implement a constantly updating game where responses are needed in real time. However, I was able to build a little login (NOT SECURE) and create some cool visual effects that linked together in a nice presentation.

I have not completed the game. I have barely completed the login part of the game. So please be aware that at the moment it is a work in progress.

##IMPORTANT NOTES
This game only works when hosted online. This is due to the need for Ajax requests to php files.

Here is a link to an online version of the game: http://doc.gold.ac.uk/~noken003/battleshiptest/P5_files/

When you click it will enter full screen Mode.
You will be required to register to create in a login and password. You can either register to create your own user or you can use the following:

-USERNAME: test
-PASSWORD: tester

## INSTRUCTIONS (P.S. NOT MUCH HAPPENS)
A) LOGIN OR REGISTER
B) Choose another player to challenge and click on them
C) You will be taken to the gameplay screen
D) The array of blue dots you see is derived from the game state and is being updated every 5 seconds
E) At the moment there is no way for you to change the data there but this could be very easily added with 5 coffees, 2hours and relaxing classical music.


## File Structure
Here is a short explanation of what files are doing what
  -Server Files - Everything in here is used to pass information between XHTML requests and the mysql database
  -Assets - All the images used in the game
  -Libraries - I don't know ask P5 :P

          -index.HTML
            -Web page holding everything together
          -sketch.js
            -Holds setup and draw. Also toggles to full screen when mouse is clicked
          -navigation_functions.js
            -Creates objects for all the buttons and menus used during the entire game
          -magicball.js
            -Creates the nice star moving effect in the background
          -user.js
            -Holds class for player object. Also holds methods for downloading player information.
          -openingScreen.js
            -Displays a welcome to user with flashy moving images
          -login.js
            -Login in Screen and link to register form
          -form.HTML  
            -Form to collect information on new users and send to database to create a new users
          -home.js
            -Homepage displaying players profile information collected from database also displays buttons to challenge other players

## Variables & if statements

### Baseline (4 marks)

- [x] Basic program with setup and draw

### Basic (max 2 marks)

- [x] At least 1 variable
- [x] At least 1 if statement
- [x] Several variables

### Advanced (max 2 marks)

- [x] Nested if statements
- [x] Boolean variables
- [ ] Complex Boolean conditions

## Loops

### Baseline (4 marks)

- [x] Your program uses ar lease one basic loop

### Basic (max 2 marks)

- [x] Many loops
- [x] Nested loop
- [x] Using the loop variable

### Advanced (max 2 marks)

- [x] Non-standard loop (e.g. backwards)
- [x] Searching or otherwise breaking out of loops with break or return
- [ ] While loop

## Arrays

### Baseline (4 marks)

- [x] Your program uses at least one basic array

### Basic (max 2 marks)

- [x] Loops with arrays
- [x] Functional programming (map, filter, reduce, etc)
- [x] Arrays of objects

### Advanced (max 2 marks)

- [x] 2D arrays
- [ ] Random access of arrays
- [ ] Random insertion/splicing arrays

## Functions

### Baseline (4 marks)

- [x] Your program uses at least one function defined by you

### Basic (max 2 marks)

- [x] Most of your code is in your own functions not draw, setup etc
- [x] Parameterised functions  
- [x] Return values

### Advanced (max 2 marks)

- [x] Anonymous functions
- [x] Functions that return different things depending on conditions or use conditions to return at different points in the function
- [x] Passing functions as arguments

## Objects/classes

### Baseline (4 marks)

- [x] Your program uses at least one object

### Basic (max 2 marks)

- [x] Your objects have functions attached
- [x] Use of classes or constructors
- [x] Parameterised functions

### Advanced (max 2 marks)

- [ ] All of the functionality relating to your objects is functions attatched to the object
- [x] Almost all of the functionality of the program is in objects
- [x] A design involving many objects that interact with eachother

# Bonus

## Using language features not taught

- [x] Use of some significant language features not used in the course (1 mark)
- [ ] Use of many advanced javascript features in highly competent and professional ways (3 marks)
- [ ] Marco hasn't heard of half the stuff in this program (5 marks)

## Program complexity

- [ ] This is one of the most complex programmes in the lab in terms of amount of code and quality of design. beyond 1st year level, tackling 2nd or 3rd year level problems (1 mark)
- [ ] Approaching professional level software (3 marks)
- [ ] One of the most impressive pieces of software I've ever used (5 marks)
