# Project Two Heroes & Villains README #



**Contents** 

* Project Overview
* Brief
* Timeframe
* Deploy Link
* Technologies Used
* Planning
* Build
* Bugs
* Challenges
* Wins & Learning
* Areas For Future Development

<img src="https://i.imgur.com/BGbXObF.png" width="600" height="200" />

## Project Overview ##

Heroes & Villains Database is the title for my second project of General Assembly software engineering immersive. The function of this front end project is for the user to search for rare and unusual superheroes or villains across a wide range of publishers. There was no artistic guidance for this project in terms of cloning an existing website, we used the Bulma framework and created our styling. This 48-hour project was done in collaboration with Alex Chan.

## Project Brief ## 

* Consume a public API.
* Work in pairs.
* Have multiple components.
* The app can have a router - with several “pages”, this is up to your discretion and if it makes sense for your project.
* Include wireframes that you designed before building the app.
* Deploy online and be accessible to the public.

## Time frame ## 

48 hours

## Deployment ## 

Link [**here**](https://harrymurphyprojects.github.io/SEI60-Project-1/ "here")

## Technologies Used ## 

* HTML
* CSS
* Bulma
* JavaScript
* React
* Axios
* React-Router-Dom
* Git
* GitHub
* Excalidraw (planning)

## Planning ## 

One of the key factors we contended with when planning was, 48 hours is a very short amount of time to build a front end, especially when we were only 5 or 6 weeks into coding. Before we drew up our Excalidraw wireframe the first task was to find a “good” public API so we could request data to the front end. By “good”, the main things I was looking at was:

* How accessible is the data?
* Are there paywalls or limited to requests?
* Is there a large data set?
* Is the data interesting so we can make a project out of it?
* What is the quality of the documentation like on the public API?

After hours of searching, we found a Super Hero Database

When planning how the front end would operate, we designed the function of each page and created some stretch goals if we had time. 

The main pages we wanted to focus on in this project were: Homepage, Index Page, Show Page and as a stretch goal a Compare Stats page. The RESTful routes were displayed in the documentation, we would need to use the “.get” all, and “.get” single request.

Another feature we wanted to use was filtering the data so that the user can sort the information by Publisher, Alignment or simply type the character's name in the search box. You can see more about the planning process in the link to the Excalidraw or below.

<img src="https://i.imgur.com/BGbXObF.png" width="600" height="200" />

## The Build ## 

API Request

This is the API page where the get requests were refactored too. “getALLCharacters” is used for the index all page and “getSingleCharacter” is used for the superheroes show page. The main difference between these requests is the URL, the “getSingleCharacter” uses the character “/id” the URL whereas “getAllCharacters” uses “/all”. This was all written in the RESTful API documentation.

<img src="https://i.imgur.com/BGbXObF.png" width="600" height="200" />

Filtering functions 

There are hundreds of characters, so we created a filter where you can select the filter value and it will populate the screen superheroes according to their alignment, publisher or other characteristics. 

<img src="https://i.imgur.com/BGbXObF.png" width="600" height="200" />

Cards

When displaying the information on the index page, I created cards so that the information can be neatly displayed. With conditional rendering on Bulma, we allowed 5 cards for wide monitors and 3 cards in mobile view. Bulma is really simple when applying conditional styling to code in comparison to CSS/ SASS.

<img src="https://i.imgur.com/BGbXObF.png" width="600" height="200" />
<img src="https://i.imgur.com/BGbXObF.png" width="600" height="200" />

## Bugs ## 

One bug which we didn’t account for is that due to it being a public API, some of the data gets removed or doesn’t exist anymore. So it appears like the search functions and filtering options do not work on the index page when in fact it's just a lack of data. A good resolution of this would be to put in an error if zero results are found. 

## Challenges ## 

Working in a pair was challenging at the start as it was strange both dividing up the work responsibilities. But after a while, we got used to both working on separate areas of the code and helping each other out when we got stuck. 

It was challenging getting the filters working right, it was the first time I’d tried to filter data outside of the small workshop exercises we carried out. 

## Wins & Learning ## 

A win for me was that we got a working APP deployed with all of our MVP goals implemented. This was tough to do considering I had only been coding for six weeks and had 48 hours to complete the project. 

The key learning for me in this project was styling with Bulma. Bulma is easy to use for positioning pictures and creating buttons. This was the first styling framework I have used,  In some aspects, I prefer the freedom and mobility of using CSS. However, due to only being a 48-hour project Bulma did help in styling very quickly.

## Area For Future Development ## 

We tried to create a ‘Top Trumps’ style game where you could fight stats between two selected cards. We got close to having this code working but couldn’t finish it in 48 hours. I’d like to develop this in the future. 



