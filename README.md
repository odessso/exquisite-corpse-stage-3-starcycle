# Exquisite Corpse in Silico
## 🔻 *starcycle* 🔻

This README file contains:
- Briefs for each stage of the assignment
- Comments from each person who has developed this work

**Please only edit the comments section for the stage of the assignmnent you are working on. Leave the rest of this file as it is.**

*****
## Briefs for each stage

### 🔴 Stage 1
Create a sketch that shows an unconventional representation of time. This 'clock' should be constantly changing, but its appearance can repeat in a subsequent cycle. It does not need to follow a 24-hour cycle (you can use any timescale). Give your sketch a unique title and edit the README file accordingly.

### 🟡 Stage 2
Respond to a Stage 1 sketch that you've chosen by using interactivity. You can either add to the chosen sketch or build a new one from scratch (this applies for all subsequent stages too).

### 🟢 Stage 3
Find or construct a dataset that relates to the sketch you've inherited. Incorporate visualisations of the dataset into your response to the Stage 2 sketch.

### 🔵 Stage 4
Adapt a Stage 3 sketch into a text-based game. There should be different pathways through the game. Images (still or moving) can accompany the words (but this is not required).

### 🟣 Stage 5
Reimagine something from a Stage 4 sketch as a living entity or an environment.

*****
## Comments for each stage

### 🟥 Stage 1
- Name/Alias: Cat Hayward
- Github account: https://github.com/cathayward
- Published webpage for stage 1: https://cathayward.github.io/exquisite-corpse-stage--1---starcycle-/

**stage one:**
Create a sketch that shows an unconventional representation of time. This 'clock' should be constantly changing, but its appearance can repeat in a subsequent cycle. It does not need to follow a 24-hour cycle (you can use any timescale). Give your sketch a unique title and edit the README file accordingly.

in regards to the unconventional representation of time i wanted to explore the lifecycle of a star from birth to death.

the cycle goes as follows:
1. a nebulas - which is a cloud of gases and dust that is being condensed by gravity
2. main sequence star - otherwise known as supermassive  and has a stable core - it then expands and gets hotter - 90% of its life time
3. a red supergiant is then formed which has an unstable core and when that core implodes, collapses and bursts into a
4. supernova - freeing all elements created in its lifetime
5. what’s left of the star is a stellar black hole that has an intense gravitational pull

- the idea is that i will code a sequence of images to change in accordance to the life cycle of a star perhaps over a background of everchanging stars in a galaxy
- i ran into an issue when trying to make the sequence loop without deleting the background and the stars, i was also trying to figure out a way to delay the start of the star sequence without slowing down the gap currently between each star forming.
- the idea is that the little stars will show up, and then the 5 larger images will show up in succession along the line, and then they will disappear and loop again.
- after a lot of trial and error, i managed to find a way to achieve a similar result to what i was  initially looking for. 
- i tried to use the createGraphics function but in the end it seemed to be a little too ahrd for my current abilities.
- eventually i just decided to set up another counter that cleared the screen after 5 images showed up with a delay of two seconds, and then i put the star background into the draw function so it was always looping no matter what.
- this created an everchanging backdrop of stars alongside the cycle of planets which i honestly prefer to my original idea.
- i think this represents time due to the fact that stars can live for millions of years but they all follow a similar cycle no mattter what
- it's just a different type of lifecycle and explores the cosmos beyond us

### 🟨 Stage 2
- Name/Alias: Roshni Bhatti
- Github account: https://github.com/rbha917 
- Published webpage for stage 2: https://rbha917.github.io/exquisite-corpse-stage-2-starcycle/

*I absolutely loved Cat's take on the first stage of this brief, I found it unique and visually stunning. As I admired it so much, I chose to keep all of the images, colours and patterns the same. I only played around with the sizing of them just to fit the screen better. To incorporate interactivity to this sketch, I have added in an input box that invites the user to enter in a word of their choice. The code then uses a series of RiTa.js functions to determine what type of word it is e.g. verb, noun or adjective and displays one of the star images accordingly. If the user presses the enter button without inputting anything or inputs something the code cannot recognise as a word then the sketch will display an error message asking them to try again with a valid word. My thought process in doing this was that using an input box gives the user a lot of freedom in what they want to do/say but I can still categorise their inputs to display something from them. I wanted the users to experiment with different kinds of words to see the different outputs they could get. I chose to keep Cat's setInterval of drawing stars and apply it to every time the enter button is pressed because as previously mentioned, I loved the way it looked. I thought it was fitting to use it in this manner because then the user is amused and engaged by this animation everytime they press the enter button. Overall, I wanted this sketch to allow the user to be playful and experimental with their choices while seeing some truly beautiful images. Some challenges I came across while making this sketch was the setInterval stars being drawn over the images. I attempted to separate them and the images into different layers using the createGraphics element but in trying to learn and apply it, I found that it was causing me more issues than solutions. Therefore, I decided that, considering time constraints, it was wiser to leave this issue alone. Instead, I opted to decrease the timeframe for when the stars are drawn so that there wouldn't be as many covering the image.*

### 🟩 Stage 3
- Name/Alias:
- Github account:
- Published webpage for stage 3:

*... comments to be added here*

### 🟦 Stage 4
- Name/Alias:
- Github account:
- Published webpage for stage 4:

*... comments to be added here*

### 🟪 Stage 5
- Name/Alias:
- Github account:
- Published webpage for stage 5:

*... comments to be added here*
