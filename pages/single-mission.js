import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Layout from '../components/Layout'
import Head from 'next/head'
import withRoot from '../components/withRoot'

import Masonry from 'react-masonry-component'

import TextSection from '../components/TextSection'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import ListCard from '../components/ListCard'
import { testimonyData } from '../data/listData'

const styles = theme => ({
  root: {
    '& br': {
      display: 'unset'
    }
  },
  white: {
    color: '#fff'
  },
  card: {
    width: '100%'
  },
  media: {
    minHeight: 280,
    [theme.breakpoints.up('xl')]: {
      minHeight: 1366
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: '400px'
    }
  },
  gridItemFix: {
    width: '100%',
    padding: '16px',
    [theme.breakpoints.down('sm')]: {
      padding: '8px'
    }
  },
  contentContainer: {
    width: '100%',
    maxWidth: '70%',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      maxWidth: '85%'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '95%'
    }
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: 0,
    alignItems: 'start'
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: 0
  },
  avatarBig: {
    width: '200px',
    height: '200px',
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      height: '100px'
    }
  },
  listItemTextBig: {
    fontSize: '34px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px'
    }
  },
  videoIframe: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    border: 'none'
  },
  videoIframeContainer: {
    width: '100%',
    height: 0,
    overflow: 'hidden',
    position: 'relative',
    paddingBottom: '56.25%'
  }
})

class SingleMission extends Component {
  // static async getInitialProps ({ query: { id, type } }) {
  //   return { id, type }
  // }
  render () {
    const { classes } = this.props
    return (
      <Layout>
        <Head>
          <link
            rel="stylesheet"
            href="/static/styles/page.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="/static/styles/missions.css"
            type="text/css"
          />
        </Head>
        {/* Put content under here */}
        <TextSection
          sectionTitle="MISSION TITLE HERE"
          btnLink="#"
          btnText="Apply Now"
          bgColor="#21412a"
          textColor="#fff"
          darkBg
        />

        <div className={classes.contentContainer}>
          <div>
            <p>
              Through those activities, but also through their personal witness
              of the love of Christ, students seek to be instruments of the Lord
              in promoting the culture of life. These missionary efforts are one
              way the university lives out the mandate of Ex Corde Ecclesiae
              that Catholic universities serve as “a living institutional
              witness to Christ and his message.
            </p>
            <p>
              Through those activities, but also through their personal witness
              of the love of Christ, students seek to be instruments of the Lord
              in promoting the culture of life. These missionary efforts are one
              way the university lives out the mandate of Ex Corde Ecclesiae
              that Catholic universities serve as “a living institutional
              witness to Christ and his message.”
            </p>
            <p>
              The trips are organized, planned, and funded by the students
              themselves, but they must be approved by the director of
              Missionary Outreach in order to advertise, fund raise, or operate
              on campus.
            </p>
          </div>
          <Masonry>
            <Grid item className={classes.gridItemFix} xs={12} sm={6}>
              <ListCard
                listTitle="Personal Testimonies"
                itemsArray={testimonyData}
              />
            </Grid>
            <Grid
              item
              className={classes.gridItemFix}
              xs={12}
              sm={6}
              md={6}
              lg={6}
            >
              <div className="slider">
                <img src="../static/img/adventure2-800w.jpg" alt="Slide 1" />

                <img src="../static/img/biology-students.jpg" alt="Slide 2" />

                <img src="../static/img/nicaragua-mission.jpg" alt="Slide 3" />

                <img
                  src="../static/img/Fr-Shawn-with-Missionaries-Blue.png"
                  alt="Slide 4"
                />
              </div>
            </Grid>

            <Grid
              item
              className={classes.gridItemFix}
              xs={12}
              sm={6}
              md={6}
              lg={6}
            >
              <Card
                className={`${classes.card} ${classes.videoIframeContainer}`}
              >
                <iframe
                  className={classes.videoIframe}
                  src="https://www.youtube.com/embed/bHSbib2wt90"
                  frameBorder="0"
                  allow="encrypted-media"
                  allowFullScreen
                />
              </Card>
            </Grid>
          </Masonry>
        </div>
      </Layout>
    )
  }
}

export default withRoot(withStyles(styles)(SingleMission))
