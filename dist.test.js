import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { describe, expect, test } from 'vitest'

import Icon from './dist/0-circle-fill.astro' // Adjust the file path as wanted

describe('Test the Astro Bootstrap Icons', () => {
  test('Render the SVG element', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Icon)

    expect(result).toMatch(/<svg/)
  })

  test('Render the SVG attributes are correct', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Icon)

    expect(result).toMatch(/<svg[^>]*xmlns="http:\/\/www\.w3\.org\/2000\/svg"[^>]*>/)
    expect(result).toMatch(/<svg[^>]*width="16"[^>]*>/)
    expect(result).toMatch(/<svg[^>]*height="16"[^>]*>/)
    expect(result).toMatch(/<svg[^>]*fill="currentColor"[^>]*>/)
    expect(result).toMatch(/<svg[^>]*viewBox="0 0 16 16"[^>]*>/)
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

    expect(result).toMatch(/<svg[^>]*class="test-class"[^>]*>/)
    expect(result).toMatch(/<svg[^>]*aria-hidden="true"[^>]*>/)
    expect(result).toMatch(/<svg[^>]*aria-label="Test Icon"[^>]*>/)
  })

  test('Render the SVG path data is not empty', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Icon)

    expect(result).toMatch(/<path[^>]*d="[^"]+"[^>]*>/)
  })
})
