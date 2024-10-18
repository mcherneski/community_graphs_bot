import { Telegraf, session } from 'telegraf'
import { type MenuButton } from 'telegraf/typings/core/types/typegram'
import { CGContext  } from './context';
import { stage } from './scenes/scenes'

require('dotenv').config()

const bot = new Telegraf<CGContext>(process.env.BOT_TOKEN as string)
let chatId: number
let userId: string

bot.use(session())
bot.use(stage.middleware())
// Middleware function for universal logging if you want it. 
// bot.use(async (ctx,next) => {
//    console.log('Context before handle: ', ctx)
//    await next()
//    console.log('Context after handle: ', ctx)
// })

bot.catch((err, ctx) => {
   console.log(`Error occurred in scene ${ctx.scene.current?.id}: `, err)
   ctx.reply('An error occurred. Please try again later.')
})

// If you uncomment the following,the users will get a 
// button next to their message input that will open the specified website. 
// const userMenuButton: MenuButton = {
//    text: 'Menu',
//    type: 'web_app',
//    web_app: {
//       url: 'https://yourwebsite.com',
//    }
// }

bot.start( async (ctx) => {
   if (ctx.chat) {
      chatId = ctx.chat?.id as number
      userId = ctx.from.username as string
      console.log(`Chat ID: ${chatId}, User ID: ${userId}`)
   }
   await ctx.reply(`Learn more about how Community Graphs unlocks a range of social coordination tools by better representing the extent of people's involvement in groups, and how Maitri is incentivizing interoperability between social media apps (web2 & web3) to create shared network effects!`)

   if (ctx.chat.type === 'private') {
      await ctx.scene.enter('MainMenuScene')
   }

   // Uncomment the following lines if you want to set a menu button for the user. (See line 26)
   // bot.telegram.setChatMenuButton({chatId: chatId, menuButton: userMenuButton})
   // .catch((error) => {console.log(`Error setting chat menu button for ${chatId} (${userId}): `, error)})
   
})

bot.on('text', async (ctx) => {
   await ctx.reply('Please use the menu to communicate with this bot.')
   return await ctx.reply('If you need to restart your session, message "/start" to the bot.')
})


bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
