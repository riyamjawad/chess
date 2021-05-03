# Chess?

<<<<<<< HEAD
The project is a Chess app that is created using react, recoil, firebase and various API's.
It will have various features that mainly focus on the following:

- The app allows a user to sign up and log in, which then takes them to a profile page where they can see their own game history.
- Users can create or join games, either against other users or against an AI controlled player using stockfish.
- The user can play against the AI in a puzzle that has been fetched from an API.
- Completed games can be watched as a replay through the profile screen.

The app will manage all the users and chess games to match them up and provide any data needed to create a smooth user experience.

## What have we done

We have built a chess platfrom, where you are able to play puzzle games against an AI. From the chess data we are extrapolation profile information about a users recent matches as well as their track record.

The API and technologies that are being used are the following:

- [Firebase](https://firebase.google.com/) :: Serverless & Hosting
- [Recoil](https://recoiljs.org/) :: State management
- [Stockfish](https://stockfishchess.org/) :: Chess AI
- [Chess.com](https://www.chess.com/club/chess-com-developer-community) :: Chess Puzzle API
- [Gravatar](https://sv.gravatar.com/) :: Automated Profile avatars
- [Countryflags.io](https://www.countryflags.io/) :: Country flags API

So far we've implemented the following to a usable state:

- The app allows a user to sign up and log in, which then takes them to a profile page.
- The user can play against the AI in a puzzle that has been fetched from an API.

## What is planned

Our next features that we paln to implement include:

- Create & Play matches against other people
- Replay recent matches

This will include writing the logic for a two-player game, listing all open matches and allowing users to join a game of their choice.

## Rough outline of project structure

_(Note: We know you said write a short description/purpose of **each file**. However since we have so many, we hope that a rough outline will suffice)_

The app is written in `Typescript`, using `React` & `Recoil`, with a boilerplate provided by our build pipeline `Vitejs`, and hosted on firebase.

Repository file structure:

- `app` is the root of the app.
- `meetings` contains those meeting protocols that we remember to write down.
- `prototype` contains design prototypes for the app, designed in Figma.
- `.firebaserc` is a config file for firebase.
- `firebase.json` is a config file for firebase.
- `DESIGN_DOC.md` is the design doc we used when we developed the views for the app.
- `PROJECT_HANDIN.md` is the file that we handed in for the initial project review.
- `README.md` is this file.

App file structure:

- `vite.config.ts` is the config file for the build pipeline.
- `tsconfig.json` is the config file for the typescript transpiler.
- `package.json` is the config file for NPM, which is both a dependency manager as well as a scripts engine.
- `index.html` is the entry point for the build system.
- `public` contains all of your staticly served resources.
- `src` contains all of our typescript source files.

Source file structure:

- `main.tsx` is the entry point of the app.
- `index.css` contains some baseline css.
- `App.tsx` is the root react component of the app.
- `components` contains all of your stateless components.
- `hooks` contains all of our custom hooks.
- `lib` contains glue code for other libraries.
- `presenters` contains our presenters.
- `providers` containers jsx components that provide app wide functionality, such as theaming or route gating.
- `routes` contains routing components used by react router.
- `servies` contains code for interacting with 3rd party api's.
- `state` contains our app wide recoil state.
- `types` contains typescript types used across the entire app.
- `views` contains our view components.
=======
## Grading Criteria Defense

### Architecture/code

* No visible bugs,  no stacktrace in console. 
* Application state separated from all other concerns
* No views with different roles mixed.
* One file per View. 
* None of the four main concerns mixed
* At least one third-party component.

### Usability/User experience/ improve usability

* Clear target group, clear benefits for the user.  Application functionality is easy to discover through exploration
* Efficient task accomplishment. 
* Very good feedback on user actions
* Very good visibility of system status
* User feels in control.
* Documented user consultation, at least 30 min at prototyping stage and 30 min at formative evaluation stage, with  creative improvements from user feedback
* Very good user satisfaction

### Web APIs

* Remote data is used from a single source, creatively for the use case
* Good system status shown when waiting for API requests and the user can choose to perform other actions
* Application state persisted at server, for each user  with well-defined access rights (authorization suitable for use case). 
* Persisted data increases usability (e.g. efficiency user doesn’t need to enter data again, users sees comparisons with other users’ averages etc)

### Group cooperation

* Good balance of work in the group
* Role separation in the group (per component or per concern: views, interaction, model…)
* Work amount and roles well documented in self-reflections
>>>>>>> riyam/fix-issues
