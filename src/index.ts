import { Telegraf, session } from 'telegraf'
import { type MenuButton } from 'telegraf/typings/core/types/typegram'
import { SafariContext  } from './context';
import { stage } from './scenes/scenes'

require('dotenv').config()

const bot = new Telegraf<SafariContext>(process.env.BOT_TOKEN as string)
let chatId: number
let userId: string

bot.use(session())
bot.use(stage.middleware())
// bot.use(async (ctx,next) => {
//    console.log('Context before handle: ', ctx)
//    await next()
//    console.log('Context after handle: ', ctx)
// })

bot.catch((err, ctx) => {
   console.log(`Error occurred in scene ${ctx.scene.current?.id}: `, err)
   ctx.reply('An error occurred. Please try again later.')
})

const userMenuButton: MenuButton = {
   text: 'Menu',
   type: 'web_app',
   web_app: {
      url: 'https://ethsafari-bot-web.vercel.app/',
   }
}

bot.start( async (ctx) => {
   
   if (ctx.chat) {
      chatId = ctx.chat?.id as number
      userId = ctx.from.username as string
      // chatId = Math.abs(chatId)
      console.log(`Chat ID: ${chatId}, User ID: ${userId}`)
   }

   if (ctx.chat.type === 'private') {
      await ctx.scene.enter('MainMenuScene')
   }

   bot.telegram.setChatMenuButton({chatId: chatId, menuButton: userMenuButton})
   .catch((error) => {console.log(`Error setting chat menu button for ${chatId} (${userId}): `, error)})

})

bot.on('text', async (ctx) => {
   await ctx.reply('Please use the menu to communicate with this bot.')
   return await ctx.reply('If you need to restart your session, message "/start" to the bot.')
})


bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
