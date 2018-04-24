const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

// TODO: split this object up into three: one for for routes with 1 param, 2params, and 3 params. Then change routing function to use the correct obj depending on the num of params
const translationObj = {
  faculty: { page: '/faculty', type: 'faculty' },
  contact: { page: '/directory' },
  news: { page: '/news', type: 'news' },
  search: { page: '/search' },
  'single-mission': { page: '/single-mission' },
  'missionary-outreach': { page: '/missions' },
  // TODO: use the commented route below when the singleMission page is ready
  // 'missionary-outreach': {
  //   page: { default: '/missions', standard: '/single-mission' },
  //   type: 'missionsPages',
  //   id: { default: 'missionary-outreach' }
  // },
  major: { page: '/major' },
  minor: { page: '/minor' },
  departments: {
    page: '/page',
    type: 'departments',
    id: { default: 'departments' }
  },
  'exploring-majors': {
    page: '/page',
    type: 'academicsPages',
    id: { default: 'exploring-majors' }
  },
  'study-abroad': {
    page: '/page',
    type: 'austriaPages',
    id: { default: 'study-abroad' }
  },
  austria: {
    page: '/page',
    type: 'austriaPages',
    id: { default: 'austria', excursions: 'excursions' }
  },
  economics: { page: '/major', type: 'majors', id: { default: 'economics' } },
  anthropology: {
    page: '/major',
    type: 'majors',
    id: { default: 'anthropology', classes: 'anthropology-classes' }
  },
  accounting: { page: '/major', type: 'majors', id: { default: 'accounting' } },
  biology: {
    page: '/major',
    type: 'majors',
    id: {
      default: 'biology',
      classes: 'biology-classes',
      mission: 'biology-mission'
    }
  },
  english: {
    page: '/major',
    type: 'majors',
    id: {
      default: 'english',
      classes: 'english-classes',
      'senior-thesis': 'senior-thesis',
      'senior-portfolio': 'senior-portfolio'
    }
  },
  theology: {
    page: '/major',
    type: { default: 'majors', standard: 'theologyPages' },
    id: { default: 'theology' }
  },
  politicalscience: {
    page: '/major',
    type: 'majors',
    id: { default: 'politicalscience' }
  },
  'political-science': {
    page: '/major',
    type: 'majors',
    id: { default: 'politicalscience' }
  },
  business: {
    page: '/major',
    type: 'majors',
    id: { default: 'business' }
  },
  internationalbusiness: {
    page: '/major',
    type: 'majors',
    id: { default: 'internationalbusiness' }
  },
  sacredmusic: {
    page: '/major',
    type: 'majors',
    id: { default: 'sacred-music' }
  },
  'sacred-music': {
    page: '/major',
    type: 'majors',
    id: { default: 'sacred-music' }
  },
  catechetics: {
    page: '/major',
    type: 'majors',
    id: { default: 'catechetics', 'why-catechetics': 'why-catechetics' }
  },
  chemistry: {
    page: '/major',
    type: 'majors',
    id: { default: 'chemistry' }
  },
  classics: {
    page: '/major',
    type: 'majors',
    id: { default: 'classics', classes: 'classics-classes' }
  },
  sabl: {
    page: '/page',
    type: 'majors',
    id: { default: 'sabl', classes: 'classics-classes' }
  },
  'comm-arts': {
    page: '/minor',
    id: { 'film-studies': 'film-studies-minor' }
  },
  associate: { page: '/associate', id: { default: 'main' } },
  studentlife: {
    page: '/page',
    type: 'studentLifePages',
    id: { default: 'student-life' }
  },
  households: {
    page: '/page',
    type: 'householdsPages',
    id: { default: 'main' }
  },
  excite: {
    page: '/page',
    type: 'studentLifePages',
    id: { default: 'excite' }
  },
  baronday: {
    page: '/page',
    type: 'admissionsPages',
    id: { default: 'baron-day' }
  },
  academics: {
    page: '/page'
  },
  hr: {
    page: '/page',
    type: 'humanResources',
    id: { default: 'employment-and-human-resources' }
  },
  'consumer-information': {
    page: '/page',
    type: 'aboutPages',
    id: { default: 'consumer-information' }
  },
  ferpa: {
    page: '/page',
    type: 'aboutPages',
    id: { default: 'ferpa' }
  },
  'fact-book': {
    page: '/page',
    type: 'aboutPages',
    id: { default: 'fact-book' }
  },
  'campus-security': { page: '/page', type: 'campusSecurity' },
  studentprofiles: { page: '/faculty', type: 'studentProfilePages' },
  admissions: {
    page: '/page',
    type: 'admissionsPages',
    id: { default: 'admissions' }
  },
  swop: {
    page: '/page',
    type: 'sfsPages',
    id: { default: 'swop' }
  },
  sfs: {
    page: '/page',
    type: 'sfsPages',
    id: { default: 'main' }
  }
  // 'missionary-outreach': {
  //   page: '/page',
  //   type: 'missionsPages',
  //   id: { default: 'missionary-outreach' }
  // }
}

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: dev ? 5 : 1000 * 60 * 60 // 1hour
})

app.prepare().then(() => {
  const server = express()

  // Use the `renderAndCache` utility defined below to serve pages
  server.get('/', (req, res) => renderAndCache(req, res, '/'))

  server.get('/:first/:second?/:third?', (req, res, next) => {
    const firstParam = req.params.first ? req.params.first.toLowerCase() : null
    const secondParam = req.params.second
      ? req.params.second.toLowerCase()
      : null
    const thirdParam = req.params.third ? req.params.third.toLowerCase() : null
    // Prevent routes that should not be handled by this logic and send them to the next route in line
    if (
      firstParam !== '_next' &&
      firstParam !== 'robots.txt' &&
      firstParam !== 'service-worker.js' &&
      firstParam !== 'favicon.ico' &&
      firstParam !== 'static' &&
      firstParam !== 'json'
    ) {
      // initialize variables
      let page = '/page'
      let type = `${firstParam}Pages`
      let subtype = null
      let id = null
      if (Object.values(req.params).filter(Boolean).length === 1) {
        // Logic for routes with 1 parameter
        console.log('one parameter')
        // Set up default values for routes with 1 parameter
        page = '/page'
        type = `${firstParam}Pages`
        if (translationObj[firstParam]) {
          // find page
          if (translationObj[firstParam].page) {
            if (typeof translationObj[firstParam].page === 'object') {
              page = translationObj[firstParam].page.default
            } else {
              page = translationObj[firstParam].page
            }
          }
          // find type
          if (translationObj[firstParam].type) {
            if (typeof translationObj[firstParam].type === 'object') {
              type = translationObj[firstParam].type.default
            } else {
              type = translationObj[firstParam].type
            }
          }
          // find id
          if (translationObj[firstParam].id) {
            if (translationObj[firstParam].id.default) {
              id = translationObj[firstParam].id.default
            }
          }
        }
      } else if (Object.values(req.params).filter(Boolean).length === 2) {
        // Logic for routes with 2 parameters
        console.log('two parameters')
        // Set up default values for routes with 2 parameters
        page = '/page'
        type = `${firstParam}Pages`
        id = secondParam
        if (translationObj[firstParam]) {
          // find page
          if (translationObj[firstParam].page) {
            if (typeof translationObj[firstParam].page === 'object') {
              page = translationObj[firstParam].page.standard
            } else {
              page = translationObj[firstParam].page
            }
          }
          // find type
          if (translationObj[firstParam].type) {
            if (typeof translationObj[firstParam].type === 'object') {
              type = translationObj[firstParam].type.standard
            } else {
              type = translationObj[firstParam].type
            }
          }
          // find id
          if (translationObj[firstParam].id) {
            // Check to see if the item has an id array
            if (typeof translationObj[firstParam].id === 'object') {
              // If secondParam exists as key in id array
              if (translationObj[firstParam].id[secondParam]) {
                // Use value of secondParam key as id
                id = translationObj[firstParam].id[secondParam]
              } else if (translationObj[firstParam].id.standard) {
                // Check that standard exists as a key in id array
                // Use standard value as id
                id = translationObj[firstParam].id.standard
              } else {
                // If no standard, then use second param as id
                id = secondParam
              }
              // If no id array exists, use the id string as the id
            } else {
              id = translationObj[firstParam].id
            }
          }
        }
      } else if (Object.values(req.params).filter(Boolean).length === 3) {
        // Logic for routes with 3 parameters
        console.log('three parameters')
        // Set up default values for routes with 3 parameters
        page = '/page'
        type = `${firstParam}Pages`
        subtype = secondParam
        id = thirdParam
        if (translationObj[firstParam]) {
          // find page
          if (translationObj[firstParam].page) {
            if (typeof translationObj[firstParam].page === 'object') {
              page = translationObj[firstParam].page.thirdly
            } else {
              page = translationObj[firstParam].page
            }
          }
          // find type
          if (translationObj[firstParam].type) {
            if (typeof translationObj[firstParam].type === 'object') {
              type = translationObj[firstParam].type.thirdly
            } else {
              type = translationObj[firstParam].type
            }
          }
          // find id
          if (translationObj[firstParam].id) {
            id = translationObj[firstParam].id[thirdParam]
          }
        }
      }
      return renderAndCache(req, res, page, { id, type, subtype })
    }
    return next()
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey (req) {
  return `${req.url}`
}

function renderAndCache (req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.log(`CACHE HIT: ${key}`)
    res.send(ssrCache.get(key))
    return
  }

  // If not let's render the page into HTML
  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      // Let's cache this page
      console.log(`CACHE MISS: ${key}`)
      ssrCache.set(key, html)

      res.send(html)
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}
