import { Context, Scenes } from 'telegraf'

export interface CGSession extends Scenes.SceneSession{
   // Will be available under ctx.session.myPropName
   // bountyCompany: string
}

export interface CGContext extends Context {
   // Context is global, these extended properties will be available under ctx.myPropName
   userId: string
   targetMenu: string
   // Session
   session: CGSession
   scene: Scenes.SceneContextScene<CGContext>
}