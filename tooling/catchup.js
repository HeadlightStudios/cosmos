const fs = require('fs-extra')
const path = require('path')
const readPkg = require('read-pkg')
const { info } = require('prettycli')

/* get version from root package.json */
const { version } = readPkg.sync(path.resolve(__dirname, '../package.json'))

info('CATCH UP', `Picked up version ${version} from root`)

const directories = ['src/tokens', 'src/babel-preset', 'src/components']

/* copy version to all dependencies */
directories.forEach(directory => {
  const packageJSONPath = directory + '/package.json'
  let content = fs.readJsonSync(packageJSONPath)
  content.version = version

  /* components should import the same version of tokens and babel-preset */
  if (directory === 'src/components') {
    content.dependencies['@headlight/cosmos-tokens'] = version
  }

  fs.writeJsonSync(packageJSONPath, content, { spaces: 2 })
})
info('PREPARE', 'Updated version for all packages. Please commit this.')
