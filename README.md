# Discord.JS Template

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

## About <a name = "about"></a>

A well organized layout for a multi-channel Discord bot in JavaScript.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites


https://discord.com/developers/applications

```
Create a 'New Application' and give it a name.
```
```
Navigate to the 'Bot' tab and 'Add Bot'.
```
```
You may now edit the bot's permissions on this page.
```
```
'Click to Reveal Token'. Make note of this TOKEN, you'll need it soon.
```


### Installing

A step by step series of examples that tell you how to get a development env running.

First make sure to have a copy of Node.JS installed for your system.
You can find the download here: https://nodejs.org/en/

To check that node is installed correctly run this command:
```
node --version
```
The output should say the version of node you have installed. If it does not, you did something wrong.

After Node.JS is installed, and you have your Application created in the Discord Developer's Portal, download the source code on this page. Unzip it to a folder on your desktop.

Open the pw.envEXAMPLE file and paste in the TOKEN between the single quotes after TOKEN=

```
TOKEN='token goes here'
```

Once your TOKEN is pasted in you may remove EXAMPLE from the end of the filename.
It should end up looking like this: 
```
pw.env
```

Before running the app, you must use Node Package Manager to install libraries needed to run the Discord bot.

First open your terminal, and cd into the folder containing the source code you just downloaded. Now run this command from within the root folder.
```
npm i
```

Once the packages are installed you may run the bot using this command:

```
node src/app.js
```

If you were successful, you should see an output in your terminal that looks something like this:
```
Connected as My Fricken Sweet First Bot#8716
```

### Usage
Now open the 'channel' folder and add a new .js file.\
Give it the name of the channel it's going to be working on.\
Export a single function which must be named 'on'.

```
const CH_NAME = "my-channel"
const on = function(msg,client){
    if (!(msg.author === client.user) && msg.channel.name === CH_NAME) {
        // process the message with client object.
    }
}

exports.on = on
```

Each time an on('message') event is fired, the bot will call your on() function and will pass it the message, and the client.\
All the logic to handle requests will be handled within this function.


Each time you create a new bot channel, it must be registered in the 'channel/_channel-list.js' file.\
It must be required, and then added to the list.
```
const // Require all the Channels from this folder
    admin = require('./admin'),
    general = require('./general')

    // Make a list of all the channels
const channels = [
    admin,
    general
]

// Export the channels to be used in onMessage.js
exports.channels = channels

```

Each service listed in this file will be called in order - from first to last - each time the on('message') event is fired from Discord.Client().

In this example, the code for the admin channel would be run first, then the general channel, and then, if you deicde to add your own channel after general, it would be called last.

This probably won't be much of a performance factor since its cutting the code off after the initial if statement in each file, but if you had thousands of requests with thousands of channels, you may need to optimize for the most active channel to be called first on the list.

Please refer to these links for more information about writing your bot.

https://www.devdungeon.com/content/javascript-discord-bot-tutorial

https://discord.com/developers/docs/intro

https://discord.js.org/#/

https://anidiots.guide/
