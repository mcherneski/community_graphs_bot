import { Scenes, Markup } from 'telegraf';
import { CGContext } from "../context";

/// ------------------------------------
///             Main Menu
/// ------------------------------------
export const mainMenu = new Scenes.BaseScene<CGContext>("MainMenuScene");

mainMenu.enter(async (ctx) => {
  await ctx.reply(
    "EthSafari Hackathon Main Menu: ",
    Markup.inlineKeyboard([
      [Markup.button.callback("Community Graphs", "communityGraphs")],
      [Markup.button.webApp("Social Media Portals", "https://www.maitri.network/portals")],
      [Markup.button.callback("Schedule a Call", "scheduleCall")],
      // If you want two buttons side by side, use this example below
      // [
      //    Markup.button.callback("Theme", "info"),
      //    Markup.button.webapp("Google", "https://google.com"),
      // ],
      [Markup.button.webApp("Support", "https://t.me/+r-k9pQIEADhhMzMx")],
    ]),
  )
})

mainMenu.action("backToMain", async (ctx) => {
    await ctx.scene.reenter()
})

mainMenu.action("scheduleCall", async (ctx) => {
   await ctx.scene.enter("scheduleCallScene")
})

mainMenu.action("communityGraphs", async (ctx) => {
   await ctx.scene.enter("CommunityGraphsScene")
})

/// ------------------------------------
///        Community Graphs Sub Menu
/// ------------------------------------
export const cgMenu = new Scenes.BaseScene<CGContext>("CommunityGraphsScene")

cgMenu.enter(async (ctx) => {
   await ctx.reply(
      'Community Graphs',
      Markup.inlineKeyboard([
         [Markup.button.webApp("About", "https://www.maitri.network/communitygraphs")],
         [Markup.button.webApp("Join", "https://www.communitygraphs.xyz")],
         [Markup.button.webApp("FAQ", "https://www.maitri.network/communitygraphs-faq")],
         [Markup.button.callback("Build with Us", "buildWithUs")],
         [
            Markup.button.callback("Back to Main", "backToMain"),
         ]
      ])
   )
})

cgMenu.action("buildWithUs", async (ctx) => {
   await ctx.reply(`Check out our documentation on Postman!\n
      https://documenter.getpostman.com/view/3131837/2sA3kd9cTA#b132f248-d80c-44ae-808a-5d57ba2b3552 \n
      https://documenter.getpostman.com/view/3131837/2sA3kd9cTA#b132f248-d80c-44ae-808a-5d57ba2b3552 \n
      https://documenter.getpostman.com/view/3131837/2sA3kd9cTA#b132f248-d80c-44ae-808a-5d57ba2b3552 \n
      `
   )
   Markup.inlineKeyboard([
      [Markup.button.callback("Back to Main", "backToMain")]
   ])
})

cgMenu.action("backToMain", async (ctx) => {
   await ctx.scene.enter("MainMenuScene")
})

/// ------------------------------------
///            Calendar Menu
/// ------------------------------------
export const scheduleCallMenu = new Scenes.BaseScene<CGContext>("scheduleCall")

scheduleCallMenu.enter(async (ctx) => {
   await ctx.reply(
      'Schedule a Call with Jesse & Leo!',
      Markup.inlineKeyboard([
         [
            Markup.button.webApp("Jesse Calendly", "https://calendly.com/maitri-network"),
            Markup.button.webApp("Jesse + Leo Calendly", "https://calendly.com/d/cmkx-8ks-hht/maitri-w-leo-jesse")
         ],
         [Markup.button.callback("Back to Main", "backToMain")]
      ])
   )
})

scheduleCallMenu.action("backToMain", async (ctx) => {
   ctx.targetMenu = 'MainMenuScene'
    await ctx.scene.enter('MainMenuScene')
})

export const stage = new Scenes.Stage<CGContext>(
   [
      mainMenu,
      cgMenu,
      scheduleCallMenu
   ]
);
