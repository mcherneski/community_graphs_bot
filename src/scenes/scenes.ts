import { Scenes, Markup } from 'telegraf';
import { SafariContext } from "../context";
import { update } from "../updates"
/// ------------------------------------
///             Main Menu
/// ------------------------------------
export const mainMenu = new Scenes.BaseScene<SafariContext>("MainMenuScene");

mainMenu.enter(async (ctx) => {

  await ctx.reply(
    "EthSafari Hackathon Main Menu: ",
    Markup.inlineKeyboard([
      [Markup.button.callback("Updates", "updates")],
      [Markup.button.webApp("View Bounties", "https://www.notion.so/safaridao/Bounty-Breakdown-9cd81a059295431584298e253079b466")],
      [Markup.button.webApp("Mentor List", "https://safaridao.notion.site/b492217b1bb14563950f0e9adad8135c?v=36dd2f38cf3b49a788598b05e1a14a45")],
      [
         Markup.button.callback("Theme", "info"),
         Markup.button.callback("Help", "help"),
      ],
      [Markup.button.callback("Community Graphs", "graphs")],
      [Markup.button.callback("Calendar", "calendar")],
    ]),
  )
})

// Bounty Button changed to webapp rather than callback
// mainMenu.action("bounties", async (ctx) => {
//   await ctx.scene.enter("BountyMenuScene")
// })

// mainMenu.action('mentor', async (ctx) => {
//    await ctx.scene.enter("MentorMenuScene")
// })

mainMenu.action("updates", async (ctx) => {
   await ctx.reply(
      update // Imported from updates.ts
      ,Markup.inlineKeyboard([
         [Markup.button.callback("Back to Main", "backToMain")],
      ])
   )

})

mainMenu.action("backToMain", async (ctx) => {
    await ctx.scene.reenter()
})

mainMenu.action("info", async (ctx) => {
   await ctx.scene.enter("InfoMenuScene")
})

mainMenu.action("help", async (ctx) => {
   await ctx.scene.enter("HelpMenuScene")
})

mainMenu.action("calendar", async (ctx) => {
   await ctx.scene.enter("CalendarMenuScene")
})

mainMenu.action("graphs", async (ctx) => {
   await ctx.scene.enter("CommunityGraphsScene")
})

/// ------------------------------------
///        Community Graphs Menu
/// ------------------------------------
export const cgMenu = new Scenes.BaseScene<SafariContext>("CommunityGraphsScene")

cgMenu.enter(async (ctx) => {
   await ctx.reply(
      'Community Graphs',
      Markup.inlineKeyboard([
         [Markup.button.webApp("About", "https://www.notion.so/fa5b442c85054c56b5c029964bbff822")],
         [Markup.button.webApp("Join", "https://www.communitygraphs.xyz")],
         [Markup.button.webApp("Build", "https://documenter.getpostman.com/view/3131837/2sA3kd9cTA#b132f248-d80c-44ae-808a-5d57ba2b3552")],
         [Markup.button.callback("Connect", "connect")],
         [
            Markup.button.callback("Back to Main", "backToMain"),
            Markup.button.callback("Show Links", "links")
         ]
      ])
   )
})

cgMenu.action("connect", async (ctx) => {
   await ctx.reply(`Join the Telegram by clicking this link!\n
      https://t.me/+r-k9pQIEADhhMzMx`
   )
   Markup.inlineKeyboard([
      [Markup.button.callback("Back to Main", "backToMain")]
   ])
})

cgMenu.action("backToMain", async (ctx) => {
   await ctx.scene.enter("MainMenuScene")
})

cgMenu.action("links", async (ctx) => {
   await ctx.reply(`Community Graphs External Links:`)
   await ctx.reply(`\n
         Join: https://www.communitygraphs.xyz \n
         Build: https://documenter.getpostman.com/view/3131837/2sA3kd9cTA#b132f248-d80c-44ae-808a-5d57ba2b3552 \n
      `,
      Markup.inlineKeyboard([
         [Markup.button.callback("Back to Main", "backToMain")]
      ])
   )
})
/// ------------------------------------
///            Calendar Menu
/// ------------------------------------
export const calendarMenu = new Scenes.BaseScene<SafariContext>("CalendarMenuScene")

calendarMenu.enter(async (ctx) => {
   await ctx.reply(
      'Calendar Options',
      Markup.inlineKeyboard([
         [
            Markup.button.webApp("Google Calendar", "https://rb.gy/844mb"),
            Markup.button.webApp("Agenda", "https://safaridao.notion.site/What-is-this-years-ETHSafari-Hackathon-FAQ-Wiki-5da2435d8b8d4b3eb9e6460603bf7f32?pvs=97#c66a8fbd32cc404ea9b9ad7e960692f9")
         ],
         [Markup.button.callback("Back to Main", "backToMain")]
      ])
   )
})

calendarMenu.action("backToMain", async (ctx) => {
   ctx.targetMenu = 'MainMenuScene'
    await ctx.scene.enter('MainMenuScene')
})

/// ------------------------------------
///            Bounty Menu
/// ------------------------------------
// export const bountyMenu = new Scenes.BaseScene<SafariContext>("BountyMenuScene")

// bountyMenu.enter(async (ctx) => {

//   ctx.deleteMessage()
//   ctx.reply(
//     "Select a sponsor to view their bounties: ",
//     Markup.inlineKeyboard([
//       [
//         Markup.button.callback("Company 1", "company1"),
//         Markup.button.callback("Company 2", "company2"),
//       ],
//       [Markup.button.callback("Back", "backToMain")],
//     ])
//   )
// })

// bountyMenu.action("backToMain", async (ctx) => {
//   ctx.targetMenu = 'MainMenuScene'
//    await ctx.scene.enter('MainMenuScene')
// })

// bountyMenu.action("backToBountyMenu", async (ctx) => {
//   ctx.targetMenu = "BountyMenuScene"
//    await ctx.scene.reenter()
// })


/// ------------------------------------
///            Mentor Menu
/// ------------------------------------

// export const mentorMenu = new Scenes.BaseScene<SafariContext>("MentorMenuScene")

// mentorMenu.enter(async (ctx) => {
//    ctx.reply(
//       "What do you need help with? ",
//       Markup.inlineKeyboard([
//          [Markup.button.callback("Development", "development")],
//          [Markup.button.callback("Biz Dev", "bizDev")],
//          [Markup.button.callback("General Hacking", "general")],
//          [Markup.button.callback("Back to Main", "backToMain")],
//        ])
//    )
// })

// mentorMenu.action("backToMain", async (ctx) => {
//    ctx.targetMenu = 'MainMenuScene'
//     await ctx.scene.enter('MainMenuScene')
// })

/// ------------------------------------
///            Help Menu
/// ------------------------------------
export const helpMenu = new Scenes.BaseScene<SafariContext>("HelpMenuScene")

helpMenu.enter(async (ctx) => {
   ctx.reply(
      "Available help Options: ",
      Markup.inlineKeyboard([
         [Markup.button.webApp("Hackathon Rules", "https://www.notion.so/safaridao/Rules-of-the-Hackathon-87816591e6c24a00a25610c0fbd0e5de")],
         [Markup.button.callback("Registration", "registration")],
         [Markup.button.callback("Back to Main", "backToMain")]
      ])
   )
})

helpMenu.action("backToMain", async (ctx) => {
   ctx.targetMenu = 'MainMenuScene'
    await ctx.scene.enter('MainMenuScene')
})

helpMenu.action("rules", async (ctx) => { 
   ctx.reply(
      'Rules go here',
      Markup.inlineKeyboard([
         [Markup.button.webApp("View Rules Page", "https://safaridao.notion.site/What-is-this-years-ETHSafari-Hackathon-FAQ-Wiki-5da2435d8b8d4b3eb9e6460603bf7f32?pvs=97#87816591e6c24a00a25610c0fbd0e5de")],
         [Markup.button.callback("Main Menu", "backToMain")]
      ])
   )
})

helpMenu.action("registration", async (ctx) => {
   await ctx.reply(
      `To register, \n
      1. Apply to the hackathon on Tally \n
      2. Create a profile on Ayalabs \n
      3. Join the ETHSafari Hackathon on Ayalabs \n

      Links Below!
      `,
      Markup.inlineKeyboard([
         [Markup.button.webApp("Tally", "https://tally.so/r/wooZYM")],
         [Markup.button.webApp("Create Ayalabs Profile", "https://www.ayalab.xyz/auth/signup")],
         [Markup.button.webApp("Join Hackathon on Ayalabs", "https://www.ayalab.xyz/hackathon/d94556af-ba23-4aaa-9dfc-ec54927a2f89?builderStatus=none")],
         [Markup.button.callback("Main Menu", "backToMain")]
      ])
   )
})
/// ------------------------------------
///            Info Menu
/// ------------------------------------
export const infoMenu = new Scenes.BaseScene<SafariContext>("InfoMenuScene")

infoMenu.enter(async (ctx) => {
   await ctx.reply(
      `This hackathon's theme is:
      \n
      PROSPERITY
      \n
      Challenge:
      \n
      Participants must identify a specific problem within these focus areas and propose a blockchain-based solution that is innovative, practical, and scalable.
      The projects should demonstrate the potential of on-chain technology to create positive social and economic impacts, particularly in emerging markets.
      \n
      `,
      Markup.inlineKeyboard([
         [Markup.button.callback("Focus Areas", "focusAreas")],
         [Markup.button.callback("Main Menu", "backToMain")]
      ])
   )
})

infoMenu.action("backToMain", async (ctx) => {
   ctx.targetMenu = 'MainMenuScene'
    await ctx.scene.enter('MainMenuScene')
})



infoMenu.action('focusAreas', async (ctx) => {
   await ctx.reply(
      `Infrastructure \n
         ✅ Mobile Technology \n
         ✅ Sustainability Infrastructure (solar, waste management...) \n
         ✅ Internet Infrastructure \n
      `
   ),
   await ctx.reply(
      ` Education \n
         ✅ Data Privacy and Sovereignty \n
         ✅ Community \n
         ✅ Tools (Web3 & Beyond) \n
         ✅ Financial Education      `
   ),
   await ctx.reply(
      `Healthcare \n
         ✅ Access to Credit \n
         ✅ Insurance \n
         ✅ Data Availability \n
      `,
      Markup.inlineKeyboard([
         [Markup.button.callback("Main Menu", "backToMain")]
      ])
   )

})

export const stage = new Scenes.Stage<SafariContext>(
   [
      mainMenu,
      // bountyMenu,
      // mentorMenu,
      helpMenu,
      infoMenu,
      calendarMenu,
      cgMenu
   ]
);
