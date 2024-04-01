export const Env = {
  port: Number(process.env.PORT) || 3000,
  botToken: process.env.SLACK_BOT_TOKEN || '',
  clientId: process.env.SLACK_CLIENT_ID || '',
  clientSecret: process.env.SLACK_CLIENT_SECRET || '',
  signingSecrets: process.env.SLACK_SIGNING_SECRET || '',
}
