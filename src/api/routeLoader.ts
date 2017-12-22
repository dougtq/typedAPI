import { readdirSync } from 'fs'

const getModules = () =>
  readdirSync(__dirname).filter(dir =>
    !(dir.endsWith('.js')))

const getRouters = (modules : String []) =>
  modules.map(modulo =>
    require(`./${modulo}/router.js`))

const loaderRouters = (app : any, routers : any) =>
  routers.forEach(router =>
    router.default.map(route =>
      app[route.method](route.path, route.action)))

const bootstrap = (app : any) => {
  const modules = getModules()
  const routers = getRouters(modules)
  loaderRouters(app, routers)
}

export default bootstrap
