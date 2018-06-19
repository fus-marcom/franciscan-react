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
  'oath-of-fidelity': {
    page: '/page',
    type: 'academicsPages',
    id: { default: 'oath-of-fidelity' }
  },
  search: { page: '/search' },
  'single-mission': { page: '/single-mission' },
  'missionary-outreach': {
    page: '/page',
    type: 'missionsPages',
    id: { default: 'missionary-outreach' }
  },
  'missions-of-peace': { page: '/missions' },
  // TODO: use the commented route below when the singleMission page is ready
  // 'missionary-outreach': {
  //   page: { default: '/missions', standard: '/single-mission' },
  //   type: 'missionsPages',
  //   id: { default: 'missionary-outreach' }
  // },
  major: { page: '/major' },
  minor: { page: '/minor' },
  departments: {
    page: { default: '/page', faculty: '/faculty-list' },
    type: { default: 'departments', faculty: 'faculty' },
    id: {
      default: 'departments',
      'hist-anthro': 'history-and-anthropology',
      'math-cs': 'mathematical-and-computer-science',
      'mod-lang-lit': 'modern-languages-and-literatures'
    }
  },
  'institutes-centers': {
    page: '/page',
    type: 'institutes',
    id: { default: 'institutes-centers' }
  },
  elder: {
    page: '/page',
    type: 'institutes',
    id: { default: 'elder' }
  },
  'center-for-bioethics': {
    page: '/page',
    type: 'bioethicsPages',
    id: { default: 'center-for-bioethics' }
  },
  'center-for-leadership': {
    page: '/page',
    type: 'institutes',
    id: { default: 'center-for-leadership' }
  },
  fish: {
    page: '/page',
    type: 'fishPages',
    id: { default: 'fish' }
  },
  fiwh: {
    page: '/page',
    type: 'fiwhPages',
    id: { default: 'fiwh' }
  },
  sabl: {
    page: '/page',
    type: 'majors',
    id: { default: 'sabl', classes: 'classics-classes' }
  },
  veritas: {
    page: '/page',
    type: 'veritasPages',
    id: { default: 'veritas' }
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
  economics: {
    page: '/major',
    type: 'majors',
    id: { default: 'economics', classes: 'economics-classes' }
  },
  anthropology: {
    page: '/major',
    type: 'majors',
    id: { default: 'anthropology', classes: 'anthropology-classes' }
  },
  accounting: {
    page: '/major',
    type: 'majors',
    id: { default: 'accounting', classes: 'accounting-classes' }
  },
  biology: {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'biology',
      classes: 'biology-classes',
      mission: 'biology-mission',
      faculty: 'biology'
    }
  },
  english: {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'english',
      classes: 'english-classes',
      'senior-thesis': 'senior-thesis',
      'senior-portfolio': 'senior-portfolio',
      faculty: 'english'
    }
  },
  'cs-cis': {
    page: { default: '/major' },
    type: { default: 'majors' },
    id: {
      default: 'cs-cis',
      classes: 'cs-cis-classes'
    }
  },
  communicationarts: {
    page: {
      default: '/major',
      faculty: '/faculty-list',
      'film-studies': 'minors'
    },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'comm-arts',
      classes: 'comm-arts-classes',
      'senior-thesis': 'comm-arts-senior-thesis',
      alumni: 'comm-arts-alumni',
      faculty: 'communication-arts',
      'film-studies': 'film-studies-minor'
    }
  },
  'comm-arts': {
    page: {
      default: '/major',
      faculty: '/faculty-list',
      'film-studies': '/minor'
    },
    type: { default: 'majors', faculty: 'faculty', 'film-studies': 'minors' },
    id: {
      default: 'comm-arts',
      classes: 'comm-arts-classes',
      'senior-thesis': 'comm-arts-senior-thesis',
      alumni: 'comm-arts-alumni',
      faculty: 'communication-arts',
      'film-studies': 'film-studies-minor'
    }
  },
  education: {
    page: {
      default: '/major',
      faculty: '/faculty-list'
    },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'education',
      classes: 'education-classes',
      'senior-thesis': 'education-senior-thesis',
      alumni: 'education-alumni',
      faculty: 'education'
    }
  },
  engineering: {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'engineering',
      classes: 'engineering-classes',
      faculty: 'engineering',
      'dual-degree': 'engineering-dual-degree',
      'franciscan-way-2013': 'engineering-franciscan-way-2013'
    }
  },
  finance: {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'finance',
      classes: 'finance-classes',
      faculty: 'finance'
    }
  },
  modernlanguages: {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'modernlanguages',
      classes: 'modernlanguages-classes',
      faculty: 'modernlanguages',
      'mission-aims-info': 'modernlanguages-mission',
      placement: 'modernlanguages-placement'
    }
  },
  'mod-lang-lit': {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'modernlanguages',
      classes: 'modernlanguages-classes',
      faculty: 'modernlanguages',
      'mission-aims-info': 'modernlanguages-mission',
      placement: 'language-placement-exams'
    }
  },
  'language-placement-exams': {
    page: '/major',
    type: 'majors',
    id: {
      default: 'language-placement-exams',
      information: 'language-placement-exams-info',
      spanish: 'language-placement-exams-spanish'
    }
  },
  history: {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'history',
      classes: 'history-classes',
      faculty: 'history-and-anthropology'
    }
  },
  'hist-anthro': {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'history',
      classes: 'history-classes',
      faculty: 'history-and-anthropology'
    }
  },
  humanitiesandcatholicculture: {
    page: '/major',
    type: 'majors',
    id: {
      default: 'humanitiesandcatholicculture',
      classes: 'humanitiesandcatholicculture-classes'
    }
  },

  hcc: {
    page: '/major',
    type: 'majors',
    id: {
      default: 'humanitiesandcatholicculture',
      classes: 'humanitiesandcatholicculture-classes'
    }
  },
  law: {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'law'
    }
  },
  management: {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'management',
      classes: 'management-classes',
      faculty: 'management'
    }
  },
  marketing: {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'marketing',
      classes: 'marketing-classes',
      faculty: 'marketing'
    }
  },
  'acc-bus-ec': {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'marketing',
      faculty: 'business'
    }
  },
  'chem-phys': {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'chem-phys',
      faculty: 'chemistry-physics-and-engineering'
    }
  },
  cmhc: {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'cmhc',
      faculty: 'clinical-mental-health-counseling'
    }
  },
  mathematicalscience: {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'mathematicalscience',
      classes: 'mathematicalscience-classes',
      faculty: 'mathematicalscience'
    }
  },
  nursing: {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'nursing',
      classes: 'nursing-classes',
      faculty: 'nursing',
      'aims-outcomes-information': 'nursing-aims-outcomes-information',
      'admissions-criteria': 'nursing-admissions-criteria',
      'drug-policy': 'nursing-drug-policy'
    }
  },
  pharmacy: {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'pharmacy',
      classes: 'pharmacy-classes',
      faculty: 'pharmacy'
    }
  },
  philosophy: {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'philosophy',
      classes: 'philosophy-classes',
      faculty: 'philosophy',
      'online-associates': 'philosophy-online-associates'
    }
  },
  psychology: {
    page: '/major',
    type: 'majors',
    id: {
      default: 'psychology',
      classes: 'psychology-classes'
    }
  },
  'psych-soc-swork': {
    page: {
      default: '/department',
      faculty: '/faculty-list',
      'psych-classes': '/major'
    },
    type: {
      default: 'departments',
      faculty: 'faculty',
      'psych-classes': 'majors'
    },
    id: {
      default: 'psych-soc-swork',
      faculty: 'psychology-sociology-and-social-work',
      'psych-classes': 'psychology-classes'
    }
  },
  socialwork: {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'social-work',
      classes: 'socialwork-classes',
      faculty: 'socialwork'
    }
  },
  sociology: {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'sociology',
      classes: 'sociology-classes',
      faculty: 'sociology'
    }
  },
  theatre: {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'theatre',
      classes: 'theatre-classes',
      faculty: 'theatre',
      events: 'theatre-events'
    }
  },
  drama: {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'theatre',
      classes: 'drama-classes',
      faculty: 'theatre',
      events: 'theatre-events'
    }
  },
  theology: {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', standard: 'theologyPages', faculty: 'faculty' },
    id: {
      default: 'theology',
      faculty: 'theology',
      classes: 'theology-classes'
    }
  },
  'graduate-theology': {
    page: { default: '/page', faculty: '/faculty-list' },
    type: { default: 'graduatePrograms', faculty: 'faculty' },
    id: {
      default: 'ma-theology',
      faculty: 'theology',
      classes: 'theology-classes'
    }
  },
  'ma-theology': {
    page: { default: '/page', faculty: '/faculty-list' },
    type: { default: 'graduatePrograms', faculty: 'faculty' },
    id: {
      default: 'ma-theology',
      faculty: 'theology',
      classes: 'theology-classes'
    }
  },
  'graduate-catechetics': {
    page: { default: '/page', faculty: '/faculty-list' },
    type: { default: 'graduatePrograms', faculty: 'faculty' },
    id: {
      default: 'graduate-catechetics',
      faculty: 'theology',
      classes: 'theology-classes',
      requirements: 'requirements'
    }
  },
  'cannon-law-track': {
    page: { default: '/page', faculty: '/faculty-list' },
    type: { default: 'graduatePrograms', faculty: 'faculty' },
    id: {
      default: 'cannon-law-track',
      faculty: 'theology',
      classes: 'theology-classes'
    }
  },

  politicalscience: {
    page: '/major',
    type: 'majors',
    id: { default: 'political-science' }
  },
  'political-science': {
    page: '/major',
    type: 'majors',
    id: { default: 'political-science' }
  },
  business: {
    page: '/major',
    type: 'majors',
    id: {
      default: 'business',
      classes: 'business-classes',
      'mba-4plus1': 'mba-4plus1'
    }
  },
  internationalbusiness: {
    page: '/major',
    type: 'majors',
    id: {
      default: 'internationalbusiness',
      classes: 'internationalbusiness-classes'
    }
  },
  sacredmusic: {
    page: '/major',
    type: 'majors',
    id: { default: 'sacred-music', classes: 'sacred-music-classes' }
  },
  'sacred-music': {
    page: '/major',
    type: 'majors',
    id: { default: 'sacred-music', classes: 'sacred-music-classes' }
  },
  catechetics: {
    page: '/major',
    type: 'majors',
    id: {
      default: 'catechetics',
      'why-catechetics': 'why-catechetics',
      classes: 'catechetics-classes',
      'application-information': 'catechetics-application-information'
    }
  },
  chemistry: {
    page: '/major',
    type: 'majors',
    id: { default: 'chemistry' }
  },
  classics: {
    page: { default: '/major', faculty: '/faculty-list' },
    type: { default: 'majors', faculty: 'faculty' },
    id: {
      default: 'classics',
      classes: 'classics-classes',
      faculty: 'classics',
      events: 'classics-events'
    }
  },
  'honors-program': {
    page: '/major',
    type: 'majors',
    id: {
      default: 'honors-program',
      requirements: 'honors-program-requirements'
    }
  },
  'fine-arts': {
    page: { default: '', faculty: '/faculty-list' },
    type: { default: '', faculty: 'faculty' },
    id: { default: 'fine-arts', faculty: 'fine-arts' }
  },
  finearts: {
    page: { default: '', faculty: '/faculty-list' },
    type: { default: '', faculty: 'faculty' },
    id: { default: 'fine-arts', faculty: 'fine-arts' }
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
    page: {
      default: '/page',
      'faculty-openings': '/job-list',
      'staff-openings': '/job-list',
      careers: '/job-list',
      thirdly: '/job'
    },
    type: 'humanResources',
    id: { default: 'employment-and-human-resources' }
  },
  'consumer-information': {
    page: '/page',
    type: 'aboutPages',
    id: { default: 'consumer-information' }
  },
  accommodations: {
    page: '/page',
    type: 'aboutPages',
    id: { default: 'accommodations' }
  },
  'strategic-planning': {
    page: '/page',
    type: 'aboutPages',
    id: { default: 'strategic-planning' }
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
    id: {
      default: 'admissions',
      requirements: 'online-program-application-info',
      'costs-financial-aid': 'costs-financial-aid',
      'the-franciscan-difference': 'the-franciscan-difference'
    }
  },
  fasttrack: {
    page: '/page',
    type: 'admissionsPages',
    id: { default: 'fasttrack', oncampus: 'fasttrack-on-campus' }
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
  },
  sass: {
    page: '/page',
    type: 'sassPages',
    id: { default: 'main' }
  },
  'core-curriculum': {
    page: '/page',
    type: 'academicsPages',
    id: { default: 'core-curriculum' }
  },
  'writing-center': {
    page: '/page',
    type: 'academicsPages',
    id: { default: 'writing-center' }
  },
  'the-catholic-core': {
    page: '/page',
    type: 'academicsPages',
    id: { default: 'core-curriculum' }
  },
  rotc: {
    page: '/page',
    type: 'academicsPages',
    id: { default: 'rotc' }
  },
  'academic-orgs': {
    page: '/page',
    type: 'academicsPages',
    id: { default: 'academic-orgs' }
  },
  pdp: {
    page: '/page',
    type: 'pdpPages',
    id: { default: 'priestly-discernment-program' }
  },
  'military-benefits': {
    page: '/page',
    type: 'sfsPages',
    id: { default: 'military-benefits' }
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
              if (translationObj[firstParam].page[id]) {
                page = translationObj[firstParam].page[id]
              } else if (translationObj[firstParam].page.standard) {
                page = translationObj[firstParam].page.standard
              } else {
                page = translationObj[firstParam].page.default
              }
            } else {
              page = translationObj[firstParam].page
            }
          }
          // find type
          if (translationObj[firstParam].type) {
            if (typeof translationObj[firstParam].type === 'object') {
              if (translationObj[firstParam].type[id]) {
                type = translationObj[firstParam].type[id]
              } else if (translationObj[firstParam].type.standard) {
                type = translationObj[firstParam].type.standard
              } else {
                type = translationObj[firstParam].type.default
              }
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
              if (translationObj[firstParam].page[id]) {
                page = translationObj[firstParam].page[id]
              } else if (translationObj[firstParam].page.thirdly) {
                page = translationObj[firstParam].page.thirdly
              } else {
                page = translationObj[firstParam].page.default
              }
            } else {
              page = translationObj[firstParam].page
            }
          }
          // find type
          if (translationObj[firstParam].type) {
            if (typeof translationObj[firstParam].type === 'object') {
              if (translationObj[firstParam].type[id]) {
                type = translationObj[firstParam].type[id]
              } else if (translationObj[firstParam].type.thirdly) {
                type = translationObj[firstParam].type.thirdly
              } else {
                type = translationObj[firstParam].type.default
              }
            } else {
              type = translationObj[firstParam].type
            }
          }
          // find id
          if (translationObj[firstParam].id) {
            // Check to see if the item has an id array
            if (typeof translationObj[firstParam].id === 'object') {
              // If thirdParam exists as key in id array
              if (translationObj[firstParam].id[thirdParam]) {
                // Use value of thirdParam key as id
                id = translationObj[firstParam].id[thirdParam]
              } else if (translationObj[firstParam].id.thirdly) {
                // Check that thirdly exists as a key in id array
                // Use thirdly value as id
                id = translationObj[firstParam].id.thirdly
              } else {
                // If no thirdly, then use second param as id
                id = thirdParam
              }
              // If no id array exists, use the id string as the id
            } else {
              id = translationObj[firstParam].id
            }
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
