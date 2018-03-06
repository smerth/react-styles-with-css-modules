

# React: Building Styles With CSS Modules

## Installing base project

Use npm to install `create-react-app` there are issues with yarn

```bash
npm install -g create-react-app
```

Create starter project

```bash
create-react-app css-modules --scripts-version custom-react-scripts
```

the `custom-react-scripts` creates the `.env` file containing global variables.  if you do not create the app using this script you will not be able to run CSS modules without ejecting the app.

We're not going to eject the app.  So we want to run this script.

```bash
REACT_APP_DECORATORS = true;
REACT_APP_BABEL_STAGE_0 = true;

REACT_APP_SASS = true;
REACT_APP_LESS = true;
REACT_APP_STYLUS = true;

REACT_APP_CSS_MODULES = true;
REACT_APP_SASS_MODULES = true;
REACT_APP_STYLUS_MODULES = true;
REACT_APP_LESS_MODULES = true;

REACT_APP_WEBPACK_DASHBOARD = true;
```

Run the app, cd into the app folder and:

```bash
yarn start
```



## Cleanup files

remove 

`App.less`

`App.sass`

`App.styl`

remove

`*.module.*` files



@ `.env` delete everything and then add these settings

```bash
REACT_APP_DECORATORS = true;
REACT_APP_BABEL_STAGE_0 = true;

REACT_APP_CSS_MODULES = true;

REACT_APP_WEBPACK_DASHBOARD = true;
```



@ app.js remove 

```jsx
//styles
import './App.scss';
import './App.less';
import './App.styl';

//modules
import cssStyles from './First.module.css';
import sassStyles from './Second.module.scss';
import lessStyles from './Third.module.less';
import stylusStyles from './Fourth.module.styl';
```

and import styles

```jsx
import styles from './App.css';
```

remove everything in the app section

```jsx
class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}
```

remove unused imports

```jsx
import logo from './logo.svg';

//components
import Emoji from './Emoji';
```

and delete the `logo.svg` file

now you have a clean slate to start



## Initial Directory Structure

Create some directories to hold our components

@ `src`

```bash
mkdir Background Grid Rocket Title
```

Add `.js` and `.css` files to each component

```bash
touch Background/Background.js Background/Background.css Grid/Grid.js Grid/Grid.css Grid/GridItem.js Grid/GridItem.css Rocket/Rocket.js Rocket/Rocket.css Rocket/Smoke.js Rocket/Smoke.css Title/Title.js Title/Title.css 
```

Cut and paste the **stateful** component code into each new `.js` file from the tutorial resources folder.

```jsx
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Stateful component</h1>
      </div>
    );
  }
}
```

Except for `Title.js` which is stateless

```jsx
import React from "react";

const Title = () => {
  return (
    <div>
      <h1>Stateless component - Title</h1>
    </div>
  );
};
```

and add an export to the `Title.js` component

```jsx
export default Title;
```



**And change the name of the `const` to the name of each component.**

And to make it easier to see what's what Add the name of each component to the `<h1>` tag of each component

eg...

```jsx
<h1>Stateless component - Title</h1>
```

then @ `App.css` delete everything but

```css
.App {
  text-align: center;
}
```



Lastly, for these component files, import the styles for each component into each

```jsx

```







Change the `App` render function to use `App.css` styles

```jsx
  render() {
    return <div className="styles.app" />;
  }
```









Add `docs` folder

Move the readme file

```bash
mv readme.md docs/create-react-app-readme.md
```

create a new readme file

```bash
touch readme.md
```

@ `readme.md`

```markdown
# React Building Styles with CSS Modules

Tutorial project from [Lynda.com course](https://www.lynda.com/React-js-tutorials/React-Building-Styles-CSS-Modules/599632-2.html?)

## Releases

- Release - 1.0.0 Initial setup
```



Push to a github repo and tag a release

```bash
git tag -a 1.0.0 && git push origin 1.0.0
```





## Add components to the app



Add Google fonts 

@ `public/index.html` in the head tag

```html
<link href="https://fonts.googleapis.com/css?family=Roboto|Space+Mono" rel="stylesheet">
```





> SM - in VS Code if you want to edit two different lines of code with the the same replacement text use `opt - click` to highlight both at once...





Import the components into `App.js`

```jsx
import React, {Component} from 'react';
import Title from './Title/Title';
import Background from './Background/Background';
import Grid from './Grid/Grid';
import Rocket from './Rocket/Rocket';
import Smoke from './Rocket/Smoke';

//styles
import styles from './App.css';
```



Render the components

```jsx
class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Title />
        <Background />
        <Grid />
        <Rocket />
        <Smoke />
      </div>
    )
  }
}
```



Run the app

```bash
yarn start
```

For some reason the css `.app { text-align: center;}` doesn't work as it does in the video.

After consulting [custom-react-scripts](https://www.npmjs.com/package/custom-react-scripts) it says:

>Note: to use modules the file must be named in the following format: `$name.module.$preprocessorName`.
>
>For example `styles.module.css` or `header.module.sass` or `footer.module.less`, etc. Files that are not prefixed with module will be parsed normally.

So, I am renaming all the css files we created in the project to follow this convention...

`App.module.css`  I don't know what the other ramifications of this might be...



Commit to GitHub and push a release...



## Use Composes to leverage other styles

Copy and paste the image files from the tutorial `resources` folder into the public folder.

@ `Background.js` add divs and load the images as background

```jsx
  render() {
    return (
      <div>
        <div className={styles.stars}></div>
        <div className={styles.alpha}></div>
        <div className={styles.nebula}></div>
      </div>
    );
  }
```

Now in the `Backround.module.css` we can add the images

```css
.backgroundItems {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: block;
}

.stars {
    composes: backgroundItems;
    background: black url(/stars.png) repeat top center;
    z-index: -3;
}

.alpha {
    composes: backgroundItems;
    background: transparent url(/alpha.png) repeat top center;
    z-index: -2;
    animation: stargazing 500s linear infinite;
}

.nebula {
    composes: backgroundItems;
    opacity: 0.15;
    background: transparent url(/nebula.png) repeat top center;
    z-index: -1;
}

@keyframes stargazing {
    from { background-position: 0 0;}
    to { background-position: -10000px 5000px;}
}
```

The alpha image is animated quickly and as it is in front of the white dots that make up the star image it makes it look like the starts are flickering

The nebula image places a blue tinge over everything.

Note that first we define styles for `backgroundItems` and then we use `composes: backgroundItems;` to apply those styles across several other css selectors. (Cool? why not just use SASS,...)

Now we could also bring in CSS from another file using Compose as in this example!!!

Ok, that is pretty cool...

```css
.stars {
    composes: backgroundItems;
    background: black url(/stars.png) repeat top center;
    z-index: -3;
    composes: alphaanimation from './animation.css'
}
```









## Set up state and grid component



Copy `NASA_facts.json` from tutorial rseources into `src`

Then import it into `App.js`

```jsx
import facts from './NASA_facts.json';
```

Create the state for the app



```jsx
  constructor(props) {
    super(props);
    this.state = {
      facts,
    };
  }
```

And pass the `facts` into the `Grid` where we can use them

```jsx
<Grid facts={this.state.facts}/>
```

Now, @ `Grid` import the `GridItem`

```jsx
import GridItem from './GridItem';
```

Create a function to render the facts, or, map the json object facts passing each item of the json object into `GridItem` as a prop

```jsx
  renderFacts() {
    return this.props.facts.map(item => 
      <GridItem 
        key={item.id}
        fact={item}
      />
    );
  }
```

Then we can use this function in the render function

```jsx
  render() {
    return (
      <section className={styles.grid}>
        {this.renderFacts()}
      </section>
    );
  }
```



Note the style applied to the section,… we will create that in a bit...



## Complete GridItem

Add some style to `index.css`

```css
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', monospace;
  color: white;
}
```

@ `Grid.module.css`

```css
.grid {
    column-gap: 10px;
    column-count: 3;
    padding: 175px 20px 10px 20px;
}
```

@ `GridItem.module.css`

```css
.card {
    display: inline-block;
    width: 90%;
    font-family: 'Space Mono', monospace;
    border-radius: 3px;
    border: 1px solid rgba(168, 168, 168, 0.2);
    background-color: rgba(0, 0, 0, 0.3);
    padding: 20px 20px 25px 20x;
    margin-bottom: 10px;
}

.card:hover {
    animation-name: flash;
    animation-duration: 1s;
    border: 1px solid rgba(168, 168, 168, 0.2);
    background-color: rgba(0, 0, 0, 0.3);
}

.title {
    margin-top: 5px;
    margin-bottom: 10px;
}

.fact {
    text-align: justify;
}

```

That's a pile of css, none of which needs explaining.





## Basic Animation with CSS keyframes



Lets use [Animate.css](https://daneden.github.io/animate.css/) on [github](https://github.com/daneden/animate.css)

We're just going to ggrab some source code from `attention-seekers/flash.css`

```css
@keyframes flash {
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}

.flash {
  animation-name: flash;
}
```

Add that to `GridItem.module.css`

and add this to finish it off

```css
.badge {
    margin-bottom: 0px;
}
```

Now in `GridItem.js`

chanege to a stateless component

```jsx
import React from 'react';
import styles from './GridItem.css';

const GridItem = (props) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{props.fact.title}</h2>
      <article className={styles.fact}>{props.fact.fact}</article>
    </div>
  )
}

export default GridItem;
```

We pass in the json data via props, because we put the fact array on props previously.

OK, run the app...





## SVG Loading with State



In `App.js` add the function `updateClicked()`

```jsx
  updateClicked(id) {
    let stateCopy = Object.assign({}, this.state);
    stateCopy.facts[id].clicked = true;
    this.setState(stateCopy);
  }
```



Here we use `stateCopy` - Check that out in the docs

Pass the function to the Grid component.

```jsx
<Grid facts={this.state.facts} updateClicked={this.updateClicked.bind(this)}/>
```

Bug fix: @ `GridItem.module.css` fix the padding typo

```css
.card {
...
  padding: 20px 20px 25px 20px;
...
}
```



Now @ `GridItem.js`

Lets add the `updateClicked` function to the onClick event

```jsx
<div className={styles.card} onClick={() => props.updateClicked(props.fact.id) }>
```

and then render content based on a ternary operator

```jsx 
{props.fact.clicked ? <Explorer /> : <Badge />}
```

Of course that means importing the two missing components

```jsx
import Badge from './Badge';
import Explorer from './Explorer';
```

and lastly copy those two components over from the tutorial resources (to make life easier.)

Put them in the `Grid` folder.  These two files are svg represented as a component (neat,…  take a look at them...)



Lastly, we need to pass that function from `Grid.js` to where we used it just now in `GridItem.js`

so, @ `Grid.js` add the function

```jsx
  updateClicked(id) {
    this.props.updateClicked(id);
  }
```

and pass that to the `GridItem` component

```jsx
  renderFacts() {
    return this.props.facts.map(item => 
      <GridItem 
        key={item.id}
        fact={item}
        updateClicked={this.updateClicked.bind(this)}
      />
    );
  }
```



Run the app.  Clicking on a grid item should result in the new badge being rendered.





Copy the `NASA.mp3`, `shuttle.png`, and `smoke.mov` assets from resources and copy to the public folder.



@ `Title.js` change the title to "NASA Facts"



Update the `Title.module.css`

```css
.title {
    font-family: 'Roboto', sans-serif;
    font-size: 4em;
    position: fixed;
    left: 50%;
    transform: translate(-50%,0);
    width: 100%;
    margin-bottom: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
}
```





Now @ `Rocket.js`

Return the shuttle image

```jsx
    return (
      <div>
        <img src="/shuttle.png" alt="shuttle" className={styles.img}/>
      </div>
    );
```

Note: In React you get a warning if you try to use an `img` tag without an `alt` property.



Add css for the rocket

```css
.img {
    position: relative;
    bottom: -25px;
    width: 200px;
    margin-top: 0;
    margin-bottom: 0;
    height: auto;
    z-index: 99;
}
```

Add the smoke, so, @ `Smoke.js` return

```jsx
      <div className={styles.smoke}>
        <video className={styles.video} autoPlay loop src="/smoke.mov" />
      </div>
```



Add the `Smoke.css` rules

```css
.smoke {
    position: relative;
    bottom: 0px;
    margin-top: -500px;
    z-index: 99;
}

.video {
    width: 100%;
    height: auto;
    opacity: 0.5;
}
```

Add the rocket audio to the `index.html` file

```html
<audio autoplay=""loop="">
    <source src="/NASA.mp3" type="audio/mpeg">
</audio>
```

This works for chrome,… for other browser you need to do… what?

[For iOS](https://developer.apple.com/library/content/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html)





## Media Queries and Combine Styles



We are going to use [Classnames - A simple JavaScript utility for conditionally joining classNames together.](https://github.com/JedWatson/classnames)

Install it

```bash
yarn add classnames
```



Add a media query the normal way

@ `Title.module.css`

```css
@media (max-width: 768px) {
    .title {
        font-size: 3em;
    }
}
```



And lets add a media query to the Smoke

@ `Smoke.module.css`

```css
@media (max-width: 1365px) {
    .smoke {
        visibility: hidden;
    }
}
```







Run the app to test this

```bash
yarn start
```





To use CSS composition create another stylesheet @ `Grid` folder

```bash
touch src/Grid/Media.module.css
```



Remember the main advantage of CSS modules is the ability to grab a component - with all its styles - and pop it into another React project.

However maybe there is a case for splitting some css out from the component so that it can be easily removed when popping the component into a completely different React project.  

Here we'll put media queries into `Media.module.css` for just that purpose.

```css
@media (max-width: 1024px) {
    .grid {
        column-gap: 10px;
        column-count: 2;
        padding: 175px 10px 10px 10px;
    }
}

@media (max-width: 768px) {
    .grid {
        column-gap: 10px;
        column-count: 1;
        padding: 175px 5px 10px 5px;
    }
    .title {
        font-size: 3em;
    }
}
```

Now this css has no effect because its not loaded anywhere

Lets load it into the `Grid.module.js`

```jsx
import mediaStyles from './Media.module.css';
```

Import cx from classnames

```jsx
import cx from 'classnames';
```

Now we can apply the styles from two separate stylesheets to an element, using the `cx()` function

```jsx
  render() {
    return (
      <section className={cx(styles.grid,
        mediaStyles.grid)}>
        {this.renderFacts()}
      </section>
    );
  }
```



N.B.

- The classnames library provides a whole lot more functionality.
- You can use any of the preprocessors you want for CSS (like SASS, etc.) but you might not need them now,… and they require some extra setup.