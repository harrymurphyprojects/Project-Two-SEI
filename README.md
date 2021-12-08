Planning Stage
Link to our excalidraw plan:

https://excalidraw.com/#json=463qRv9TCXy_sEpanEslb,aw3FAi-c9CwBaVlQHoh2VA

###DAY 01
- home page
- Navbar to navigate around
Pages
- Home Page, route url "/" - basic landing page
- Index page, router url "/wines",- shows ALL the wines
- Show page, router url "/wines/:wineId" , shows a SINGLE wine in more detail


###DAY02
- Error Handling on fetching, Show & Index page
- Improve a Navbar, make it responsive
- Filters
- Sort
- Styling
- Profile Comparisons (if we have time)
- Add Favicon
- Find New Fonts For HomePage

###DAY03
- Sort Filters Bugs
- Create Comparisons/top Trumps

Review
The project went well, most of the data in the API was fairly easy to get a hold of once we got used to pulling it through. I got frustrated at times as i'd find myself getting a function almost completely working and then spend hours trying to resolves the errors to the point where I would throw away the whole code and start again. Alex was very helpful in fault finding as he only focused on one problem at a time.

We sadly couldn't get the top trumps working, we were very close thanks to Alara/Jack help but we ran out of time. Future developments to improve would be, increased styling maybe even an annoying superhero theme in the background. A top trumps game where you could save the character you like and randomly generate opponents from the index where you could battle them using a stat comparison. Some of the data was missing on some profiles so it would be good to update them if we had access to back end. 



# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) GA London React Template

## Using NPM

`npm run start` or `npm run dev`  to run the development server

`npm run build` to create a build directory

## Using Yarn

`yarn start` or `yarn dev`  to run the development server

`yarn build` to create a build directory

### ⚠️

To prevent the `failed-to-compile` issue for linter errors like `no-unsed-vars`, rename the `.env.example` to `.env` and restart your development server. Note this will only change the behaviour of certain linter errors to now be warnings, and is added just to allow your code to compile in development. These errors should still be fixed and other errors will still result in the code being unable to compile

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

