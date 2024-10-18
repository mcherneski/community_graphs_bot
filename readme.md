# EthSafari Hackathon Bot

## Creating an Update: 

Updates are handled by changing the updates.ts file located in the src directory. 

It currently looks like this: 

``` typescript
// updates.ts
export const update = "\nWelcome to the EthSafari Hackathon! More updates coming soon.\n"
```

This file is meant to make it as simple as possible. That string will be used as the content for a `ctx.reply()` command located in /src/scenes/scenes.ts (lines 36 through 42)

Formatting the message may be a bit difficult. I recomend using escaped commands such as `\n` for new lines. Links will automatically be formatted by telegram. 

The repository is tied to an AWS CodePipeline which will be triggered whenever a commit is pushed. Please be careful to not modify anything but the updates.ts file. We can roll back deployments to previous versions but I may not be immediately available to revert a mistake. 

Hit me up on Telegram (@MikeCSki) for further questions. 