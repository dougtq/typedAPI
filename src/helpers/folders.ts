import fse = require('fs-extra')
import { join } from 'path'

const dir = join(__dirname, '../../logs/')

fse.ensureDir(dir, (err : Error) => {
  if (err) {
    console.dir(err)
    process.exit(1)
  }
  // dir has now been csreated, including the directory it is to be placed in
})
