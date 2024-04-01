import { App } from '@slack/bolt'
import { Env } from './utils/Env'
import { AppComponent, render } from 'slack-thunder'

const app = new App({
  token: Env.botToken,
  clientId: Env.clientId,
  clientSecret: Env.clientSecret,
  signingSecret: Env.signingSecrets,
  scopes: ['chat:write'],
})

void (async () => {
  await render(<AppComponent slackApp={app} />)
  await app.start(Env.port)
  console.log('⚡️ Bolt app is running!')
})()
