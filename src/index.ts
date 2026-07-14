import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'fs'

interface DirMap {
  [key: string]: string
}

const dirMap: DirMap = {
  icons: 'dist',
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
    const propsScript = readFileSync('./src/components/props.astro', 'utf-8')

    const removeAllAttributes = svgElement.replace(/<svg([^>]*)>/, '<svg>')
    const xmlnsAttr = removeAllAttributes.replace(
      /<svg([^>]*)>/,
      `<svg$1 xmlns={xmlns ?? "http://www.w3.org/2000/svg"}>`,
    )
    const widthAttr = xmlnsAttr.replace(/<svg([^>]*)>/, `<svg$1 width={width ?? 16}>`)
    const heightAttr = widthAttr.replace(/<svg([^>]*)>/, `<svg$1 height={height ?? 16}>`)
    const fillAttr = heightAttr.replace(/<svg([^>]*)>/, `<svg$1 fill={fill ?? "currentColor"}>`)
    const viewBoxAttr = fillAttr.replace(/<svg([^>]*)>/, `<svg$1 viewBox={viewBox ?? "0 0 16 16"}>`)
    const svgIcon = viewBoxAttr.replace(/<svg([^>]*)>/, `<svg {...props}$1>`)

    writeFileSync(`${outDir}/${fileName}.astro`, `${propsScript}\n${svgIcon}\n`)
  })
})
