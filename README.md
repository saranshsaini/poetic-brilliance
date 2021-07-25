<h1>Poetry and Motivation for the Deserving Programmer</h1>

<p>It is indeed an indubitable fact that, in many cases, what the programmer requires is not lodash or react or express or any other fancy doohicky from npm. Instead, what the programmer requries is insight, motivation, and hope. The poetic-brilliance package allows programmers to address this requirement by adding the following words at the top of any high-stakes project file:

```javascript
const {getInspired, getMotivated, inspireMe, motivateMe} = require("poetic-brilliance");
```

 </p>
<h2>Usage</h2>
 <p>poetic-brilliance opens up a wide variety of possibilities, detailed here:</p>

<h3>Getting Insight From Poetry</h3>
<p>You can find hope through words by calling the provided methods:</p>

```javascript
getInspired(asJSON = false); //returns a random poem as text, or optionally, as JSON.
```

<p>The getInspired function returns a poem to help you through tough times. If the optional asJSON parameter is set to true, the inspiration comes in the form of JSON (if you're into that sort of thing).</p>
<br />
<h3>Getting Motivation From Quotes</h3>
<p> Very similar to the above getInspired function is the following means to obtain those crucial words of motivation the programmer so often needs:

```javascript
getMotivated(asJSON = false); //returns a random motivational quote as text, or optionally, as JSON.
```

<p>Again, pass in true as the optional parameter and you get JSON instead.</p>

<br />

<h3>Extra Features</h3>
<p>Sometimes, you dont want to get insight or motivation returned to you, you want it printed to the console immedietly so you can read all of those words easier without having to go out of your way to explicitly write out</p>

```javascript
console.log(getMotivated());
// getMotivated() and getInspired() return the poem/quote, so you need to do all that hard work of printing it out yourself. Very sad...
```

<p>We here at poetic-brilliance understand the struggle of those extra keystrokes, and so made two convenient functions to make your already tiresome life of programming just a little more convenient:</p>

```javascript
inpireMe(); //same as getInspired(), but it does the hard work of printing to the console for you. Hooray!
motivateMe(); //same as getMotivated(), but it does the hard work of printing to the console for you. Hooray!
//Both of these conventient functions also take the optional asJSON parameter. What fun!
```

<p>Don't say I never contributed anything to the world. You're welcome.</p>

<h2>Soon to Come</h2>
<p>Because I care about my fellow programmers so much, I do intend on adding to the brilliance of this package soon.</p>
<p>Let me know (on GitHub Issues or something) what can make life even better, and, if I feel generous, you and I may just be able to add those things to this package.</p>
