import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Layout from '../components/Layout'
import Head from 'next/head'
import withRoot from '../components/withRoot'
import Hero from '../components/Hero'
import Masonry from 'react-masonry-component'
import ProfileCard from '../components/ProfileCard'
import TextSection from '../components/TextSection'
import Grid from 'material-ui/Grid'
import Card, { CardMedia, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
// import throttle from 'lodash/throttle'
// import { sliceHeaders } from '../utils/getTopCoord'
// import each from 'lodash/each'

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

class Missions extends Component {
  // static async getInitialProps ({ query: { id, type } }) {
  //   return { id, type }
  // }

  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     headerPositions: [],
  //     scrollY: 0,
  //     activeSection: 0
  //   }
  //   this.handleScroll = throttle(this.handleScroll, 200)
  // }

  // componentDidMount () {
  //   window.addEventListener('scroll', this.handleScroll)
  //   this.setHeaders(sliceHeaders(this.refs))
  // }

  // componentWillUnmount () {
  //   window.removeEventListener('scroll', this.handleScroll)
  // }

  // setHeaders = headerPositions => {
  //   this.setState({ headerPositions: headerPositions })
  // }

  // handleScroll = () => {
  //   this.setState({ scrollY: window.scrollY }, () => {
  //     forEach(this.state.headerPositions, (position, key) => {
  //       if (this.state.scrollY > position - 1) {
  //         this.setState({ activeSection: key })
  //       }
  //     })
  //   })
  // }

  // handleNext = () => {
  //   const { stepIndex } = this.state
  //   if (stepIndex < 2) {
  //     this.setState({ stepIndex: stepIndex + 1 })
  //   }
  // }

  // handlePrev = () => {
  //   const { stepIndex } = this.state
  //   if (stepIndex > 0) {
  //     this.setState({ stepIndex: stepIndex - 1 })
  //   }
  // }

  // scrollToItem = header => {
  //   this.refs[header].scrollIntoView()
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
        <Hero
          backgroundImg="../static/img/Fr-Shawn-with-Missionaries-Blue.png"
          titleText="Missions of Peace"
          // subtitleText={<span>Missions</span>}
        />
        <TextSection
          sectionTitle="Serve - Inspire - Evangelize"
          text="Blessed are the peacemakers, for they shall be called children of God."
          btnLink="/about/our-mission"
          btnText="Learn More"
        />
        <TextSection
          sectionTitle="Mission trips across the U.S. and throughout the Western Hemisphere"
          bgColor="#21412a"
          textColor="#fff"
          borderColor="#998643"
        />

        <div className={classes.contentContainer}>
          <Masonry>
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

            <Grid
              item
              className={classes.gridItemFix}
              xs={12}
              sm={6}
              md={6}
              lg={6}
            >
              <ProfileCard
                profileImg="../static/img/SaintJunipero.jpg"
                profileImgTitle="Saint Junipero Serra"
                profileName="Saint Junipero Serra"
                content="Image by Amber Pitts -SENT Missionary & FUS Alumni"
                profileLink="#"
              />
            </Grid>

            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
              <Typography type="display1">
                Through those activities, but also through their personal
                witness of the love of Christ, students seek to be instruments
                of the Lord in promoting the culture of life. These missionary
                efforts are one way the university lives out the mandate of Ex
                Corde Ecclesiae that Catholic universities serve as “a living
                institutional witness to Christ and his message.
              </Typography>
            </Grid>

            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
              <Typography type="display1">
                Through those activities, but also through their personal
                witness of the love of Christ, students seek to be instruments
                of the Lord in promoting the culture of life. These missionary
                efforts are one way the university lives out the mandate of Ex
                Corde Ecclesiae that Catholic universities serve as “a living
                institutional witness to Christ and his message.”
              </Typography>
            </Grid>

            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
              <Typography type="display1">
                The trips are organized, planned, and funded by the students
                themselves, but they must be approved by the director of
                Missionary Outreach in order to advertise, fund raise, or
                operate on campus.
              </Typography>
            </Grid>
          </Masonry>
        </div>

        {/* <ul className="scroll-spy-nav">
          <li
            className={this.state.activeSection === 'spring' && 'active'}
            onClick={() => this.scrollToItem('spring')}
          >
            Spring Missions
          </li>
          <li
            className={this.state.activeSection === 'summer' && 'active'}
            onClick={() => this.scrollToItem('summer')}
          >
            Summer Missions
          </li>
        </ul> */}

        {/* <div className="missionHead" ref="spring" id="spring">
          Spring Mission Trips:
        </div> */}

        <div className={classes.contentContainer}>
          <Masonry>
            <Grid
              item
              className={classes.gridItemFix}
              xs={12}
              sm={6}
              md={6}
              lg={6}
            >
              <ProfileCard
                profileImg="../static/img/SonlifeSpringMission.jpg"
                profileImgTitle="Son Life (Panama City, Florida) Mission"
                profileType="Spring Mission"
                profileName="Son Life (Panama City, Florida) Mission"
                content="This is a Spring Break evangelization trip to the beaches of Panama City, Florida bringing Christ's love to other college students, the marginalized, and non-believers."
                profileLink="#"
              />
            </Grid>

            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
              <ProfileCard
                profileImg="../static/img/SpringEcuadorMission.jpeg"
                profileImgTitle="Ecuador Spring Mission"
                profileType="Spring Mission"
                profileName="Ecuador Spring Mission"
                content="This mission focuses on caring for the whole person by bringing the sacraments and basic medical care to rural Ecuadorian communities.This mission focuses on caring for the whole person by bringing the sacraments and basic medical care to rural Ecuadorian communities."
                profileLink="#"
              />
            </Grid>

            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
              <ProfileCard
                profileImg="../static/img/Springsandiegomission.jpg"
                bgPosY="20%"
                profileImgTitle="San Diego Mission"
                profileType="Spring Mission"
                profileName="San Diego Mission"
                content="This mission focuses on uniting all to Christ through retreat ministry sharing the awesome truth of St. Pope John Paul II’s Theology of the Body to junior high and high school students at local parish youth groups and high schools."
                profileLink="#"
              />
            </Grid>
            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="/static/img/adventure2-800w.jpg"
                  title="Austria Campus"
                />
                <CardContent>
                  <Typography type="display1">Austria</Typography>
                </CardContent>
              </Card>
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
                  src="https://www.youtube.com/embed/HzfPBp3lHTU?modestbranding=1&rel=0&color=white"
                  frameBorder="0"
                  allow="encrypted-media"
                  allowFullScreen
                />
              </Card>
            </Grid>
          </Masonry>
        </div>
        {/* <div className="missionHead" ref="summer" id="summer">
          Summer Mission Trips:
        </div> */}
      </Layout>
    )
  }
}

export default withRoot(withStyles(styles)(Missions))
