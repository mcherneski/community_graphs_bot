# Mitri - Community Graphs Bot

## Steps for setup
1. Get an API key (bot token) from Telegram's BotFather service. (https://t.me/BotFather)
2. Put your key in the .env file. 
3. Build the project and run on whatever server you want. appspec.yml and buildspec.yml are configured for AWS CodePipeline with an EC2 instance target. Note: You may need to install the dependencies on the EC2 instance, including code base and infrastructure dependencies. This includes NPM/NodeJS, the AWS CodeDeploy agent and of course your standard NPM install (should be handled by buildspec.yml)

All deployment scripts referenced by appspec.yml are stored in the scripts folder. 
4. I currently use pm2 to run the bot on an AWS EC2 instance, because I'm a simple man. The ecosystem.config.js file is for pm2. I use the command `pm2 startOrRestart ecosystem.config.js` to start the bot. It CAN crash the server if you have a weird loop, because it's set to autorestart. 

## Bot Overview

The bot is built using the Telegraf framework and uses the Scenes API for handling different states. This bot is designed to leverage Telegraf scenes to handle different states of the bot. This allows us to change user menu options and buttons based on the user's inputs to ensure a clean UX and ensure high performance. 

### context.ts

The context is the main object used for user data storage and session management within the bot. This data is stored locally and is removed when the user leaves the bot or deletes their account. 

This file also handles scene session storage. Sessions are children of the overall context. You can access the session variables within a scene with 
`ctx.session.variableName`. That object is assignable like any other TS object. 

### index.ts

This file is the main entry point for the bot. It creates the bot object and attaches the scenes to it. It also handles main bot middleware including logging if you want that enabled. 

### scenes/scenes.ts

Currently this one file contains all of your scenes. The bot loads the main scene in inside index.ts after an intro message. That scene is called main scene. Scenes can call one another so they're a good way to create control flow within the bot. In more complex bots, you might want to break these out into separate files but for smaller bots this keeps everything pretty contained. 

Each child scene has a 'backToMain' action that will return the user to the main menu scene. This is useful for creating a navigation flow. 
``` typescript
mySubmenu.action("backToMain", async (ctx) => {
   ctx.targetMenu = 'MainMenuScene'
    await ctx.scene.enter('MainMenuScene')
})
```