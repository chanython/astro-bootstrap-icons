import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'fs'
import pascalcase from 'pascalcase'

interface DirMap {
  [key: string]: string
}

const dirMap: DirMap = {
  icons: 'dist/icons'
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
    const componentScript = readFileSync('./src/components/ComponentScript.astro', 'utf-8')

    const removeClass = svgElement.replace(/class="[^"]*"/, '')
    const trimRemovedClass = removeClass.replace(/\s{2,}/, ' ')
    const svgIcon = trimRemovedClass.replace(/<svg([^>]*)>/, `<svg {...Astro.props}$1>`)

    writeFileSync(`${outDir}/${fileName}.astro`, `${componentScript}\n${svgIcon}\n`)
  })
})

const indexFileContent = Object.keys(dirMap)
  .map((dir) => {
    const files = readdirSync(`./${dirMap[dir]}`)

    return files.map((file) => {
      const fileName = file.replace('.astro', '')
      return `export { default as Bi${pascalcase(fileName)} } from './icons/${fileName}.astro'`
    }).join(`\n`)
  })

writeFileSync('./dist/index.js', `${indexFileContent}\n`)
