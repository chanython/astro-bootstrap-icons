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
    const svgIcon = svgElement.replace(/class="[^"]*"/, '{...Astro.props}')

    writeFileSync(`${outDir}/${fileName}.astro`, `${componentScript}\n${svgIcon}\n`)
  })
})
