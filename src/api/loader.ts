import { readdirSync } from 'fs'
import { join } from 'path'

const getModules = () : string[] =>
  readdirSync(join(__dirname, '/controllers/')).filter(file =>
    (file.endsWith('.js')))

const getRouters = (modulos : string[]) : any[]  =>
  modulos.map((modulo) => {
    return require(`./controllers/${modulo}`).default
  })


function bootstrap () {
  const modules : string[] = getModules()
  return getRouters(modules || [''])
}

export default bootstrap
