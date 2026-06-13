import { getViteConfig } from 'astro/config'

export default getViteConfig({
  test: {
    environment: 'node',
    include: ['**/*.{spec,test}.js']
  }
})
