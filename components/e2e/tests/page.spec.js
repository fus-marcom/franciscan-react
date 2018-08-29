/* eslint-env mocha */
const { expect } = require('chai')
const { test } = require('../browser')

describe('Page 2', () => {
  it(
    'Can be seen at /page',
    test(async (browser, opts) => {
      const page = await browser.newPage()
      await page.goto(`${opts.appUrl}/page`)

      const BODY_SELECTOR = 'body'
      await page.waitFor(BODY_SELECTOR)

      const innerText = await page.evaluate(sel => {
        return document.querySelector(sel).innerText
      }, BODY_SELECTOR)

      expect(innerText).not.to.contain('404')
    })
  )
})
