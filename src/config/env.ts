import { config } from 'dotenv'

export function getEnvValues () : Object {
  config()
  return Object.assign({}, process.env)
}
