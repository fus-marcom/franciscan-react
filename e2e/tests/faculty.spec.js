/* eslint-env mocha */
const { expect } = require('chai')
const { test } = require('../browser')
const fetch = require('isomorphic-unfetch')

describe('Faculty', () => {
  it(
    'Can be seen at /faculty/:someid',
    test(async (browser, opts) => {
      const page = await browser.newPage()
      await page.goto(`${opts.appUrl}/faculty/haenni-eric`)

      const BODY_SELECTOR = 'body'
      await page.waitFor(BODY_SELECTOR)

      const innerText = await page.evaluate(sel => {
        return document.querySelector(sel).innerText
      }, BODY_SELECTOR)

      expect(innerText).not.to.contain('404')
    })
  )
  it(
    'Can displays the correct data',
    test(async (browser, opts) => {
      const query = `{
        faculty(where: {name: "haenni-eric"}) {
          edges {
            node {
              id
              title
              slug
              content
              facultyDepartments {
                edges {
                  node {
                    id
                    name
                    count
                  }
                }
              }
            }
          }
        }
      }
      `
      const data = await fetch(`http://fcc-wp.nxtshare.co.in/graphql`, {
        method: 'POST',
        body: JSON.stringify({
          query
        })
      })
      const jsonData = await data.json()
      const content = jsonData.data.faculty.edges[0].node.content
        .replace(/<Details>/g, '<div class="details">')
        .replace(/<\/Details>/g, '</div>')
      const page = await browser.newPage()
      await page.goto(`${opts.appUrl}/faculty/haenni-eric`)
      const CONTENT_SELECTOR = 'div[data-testid*="content"]'
      await page.waitFor(CONTENT_SELECTOR)

      const innerHTML = await page.evaluate(sel => {
        return document.querySelector(sel).innerHTML
      }, CONTENT_SELECTOR)

      const page2 = await browser.newPage()
      page2.setContent(`<div id="ren">${content}</div>`)

      const RENDER_SEL = '#ren'
      await page2.waitFor(RENDER_SEL)

      const innerRenHTML = await page2.evaluate(sel => {
        return document.querySelector(sel).innerHTML
      }, RENDER_SEL)

      expect(innerHTML).to.be.equal(innerRenHTML)
    })
  )
})
