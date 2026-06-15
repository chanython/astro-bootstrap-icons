import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync
} from 'fs'

/**
 * A mapping of source directory (name) to output directory for generated Astro components.
 * @typedef {{ [key: string]: string }} DirMap
 */

/** @type {DirMap} */
const dirMap = {
  icons: 'dist'
}

Object.keys(dirMap).forEach((dir) => {
  const files = readdirSync(`./node_modules/bootstrap-icons/${dir}`)
  const outDir = `./${dirMap[dir]}`

  if (existsSync(outDir)) {
    rmSync(outDir, { recursive: true })
  }
  mkdirSync(outDir, { recursive: true })

  files.forEach((file) => {
    const fileName = file.replace('.svg', '')
    const svgElement = readFileSync(`./node_modules/bootstrap-icons/${dir}/${file}`, 'utf-8')
    const componentScript = readFileSync('./ComponentScript.astro', 'utf-8')

    const removeClass = svgElement.replace(/class="[^"]*"/, '')
    const trimRemovedClass = removeClass.replace(/\s{2,}/, ' ')
    const svgIcon = trimRemovedClass.replace(/<svg([^>]*)>/, `<svg {...Astro.props}$1>`)

    writeFileSync(`${outDir}/${fileName}.astro`, `${componentScript}\n${svgIcon}\n`)
  })
})
