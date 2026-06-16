import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { describe, expect, test } from 'vitest'

import Icon from './../../dist/0-circle-fill.astro' // Adjust the file path as wanted

describe('Test the Astro Bootstrap Icons', () => {
  test('Render the SVG element', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Icon)

    expect(result).toBeTruthy()
  })

  test('Render the SVG attributes are correct', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Icon)

    expect(result).toContain('xmlns="http://www.w3.org/2000/svg"')
    expect(result).toContain('width="16"')
    expect(result).toContain('height="16"')
    expect(result).toContain('fill="currentColor"')
    expect(result).toContain('viewBox="0 0 16 16"')
  })

  test('Render the Astro props are passed to the SVG element', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Icon, {
      props: {
        class: 'test-class',
        'aria-hidden': 'true',
        'aria-label': 'Test Icon'
      }
    })

    expect(result).toContain('class="test-class"')
    expect(result).toContain('aria-hidden="true"')
    expect(result).toContain('aria-label="Test Icon"')
  })

  test('Render the SVG path data is not empty', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Icon)

    expect(result).toMatch(/<path[^>]*d="[^"]+"[^>]*>/)
  })
})
