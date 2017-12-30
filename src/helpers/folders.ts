import fse = require('fs-extra')
import { join } from 'path'

const dir = join(__dirname, '../../logs/')

fse.ensureDir(dir, (err : Error) => {
  if (err) console.log(err)
  // dir has now been created, including the directory it is to be placed in
})
