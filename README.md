# REACTTUBE

This project utilizes Youtube v3 API. I basically built a simpler version of youtube. It allows you to search, play, and save your favorite videos.
<br />

To run this application locally, you can also fork and clone this repository.
<br />
To install depencies, navigate to the source directory:

```
npm install --save
```

Start up the React application:

```
npm start
```

API key is pushed into repo. This is not good practice and I would usually store this info in a process.env, however this was for simplicity sake as the process for you all to obtain a key is easy but tedious. Multiple tutorial also stated that this key in particular was okay to share.

### Description

The app is pretty simple, I basically built a simpler version of youtube. It allows you to search and play videos. You can also save and unsave your favorite videos, the app stores this data local memory.

### Dependencies

A quick rundown of some dependencies I used for this project:

- `react-router-dom`: React Router was implemented so that I could render different views for the application. With a larger scale project, it would be more useful in rendering additional views.
- `axios`: Promise based HTTP client

### Other Libraries/Framworks

- `Semantic UI`: Used for built in classes to design UI, sped up design process
- `Sass`: This library wasn't a nesessity but just wanted to show that I have worked with a CSS preprocessor

### Final Thoughts

I enjoyed working on this project and learning all of the information along the way. Learing about Redux and the Context system gave me an in depth grasp of how these systems work and when they should be used.
<br />
The most challenging part of this project was probably learning about modern React development and understanding how the new additions work. Also thinking about how they make things easier than before and if I need the new functionality in my code. Building the CSS while using a UI library also made me run into some bumps.
<br />
Here are some things I would have done, or plan on adding in the future:

- Add pagination to the application so that users can traverse through more results than the pre-set 5
- Take out Semantic UI and build the CSS from scratch, more ability to customize
- Add Context system after more components are added since a lot of the components in the middle wont need the data being handed down
