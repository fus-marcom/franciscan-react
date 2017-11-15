/* eslint-env mocha */
const { expect } = require('chai')
const { test } = require('../browser')

describe('Index', () => {
  it(
    'Can be seen at /',
    test(async (browser, opts) => {
      const page = await browser.newPage()
      await page.goto(`${opts.appUrl}/`)

      const BODY_SELECTOR = 'body'
      await page.waitFor(BODY_SELECTOR)

      const innerText = await page.evaluate(sel => {
        return document.querySelector(sel).innerText
      }, BODY_SELECTOR)

      expect(innerText).not.to.contain('404')
    })
  )
})
