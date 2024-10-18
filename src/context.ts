import { Context, Scenes } from 'telegraf'

export interface SafariSession extends Scenes.SceneSession{
   // Will be available under ctx.session.myPropName
   bountyCompany: string
}

export interface SafariContext extends Context {
   // Context is global, these extended properties will be available under ctx.myPropName
   userId: string
   targetMenu: string
   // Session
   session: SafariSession
   scene: Scenes.SceneContextScene<SafariContext>
}