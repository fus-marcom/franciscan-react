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
          backgroundImg="../static/img/biology-students.jpg"
          titleText="Missions"
          // subtitleText={<span>Missions</span>}
          primaryBtnText="Donate"
          primaryBtnLink="https://franciscanuniversity.force.com/portal"
        />
        <TextSection
          sectionTitle="Our Vision"
          text=" To educate, evangelize, and send forth joyful disciples to restore all things in Christ."
          btnLink="/about/our-mission"
          btnText="Learn More"
        />
        <TextSection
          sectionTitle="15 to 1 Student to Faculty Ratio"
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
                  src="https://www.youtube.com/embed/HpzwoD2oVSQ?modestbranding=1&rel=0&color=white"
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
                profileImg="https://www.franciscan.edu/uploadedImages/Content/Faculty_and_Students/Students/Noah_Fisher_landing_v2.jpg"
                profileImgTitle="Noah Fisher"
                profileType="Student Profile"
                profileName="Noah Fisher"
                content="I first learned about Franciscan from some people at my parish who studied here. They recommended I check it out, but I wasn’t so sure. When I visited, though, I was blown away by the people I met; they were so genuine and helpful. They were the biggest reason I decided to come to Franciscan."
                profileLink="/studentprofiles/noah-fisher"
              />
            </Grid>

            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
              <ProfileCard
                profileImg="https://www.franciscan.edu/uploadedImages/Content/Faculty_and_Students/Alumni_Profiles/IMG_1132.JPG"
                profileImgTitle="Maggie McDermott"
                profileType="Alumni Profile"
                profileName="Maggie McDermott"
                content="My choice to say Yes to giving my all even in those trying moments can be attributed to the growth and education I received at Franciscan."
                profileLink="/alumni-outcomes/mcdermott-maggie"
              />
            </Grid>

            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
              <ProfileCard
                profileImg="https://www.franciscan.edu/uploadedImages/Content/Faculty_and_Students/Faculty/Education/boury.jpg?n=1668"
                bgPosY="20%"
                profileImgTitle="Dr. Tiffany Boury"
                profileType="Faculty Profile"
                profileName="Dr. Tiffany Boury"
                content="Associate Professor of Education"
                profileLink="/faculty/boury-tiffany"
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
      </Layout>
    )
  }
}

export default withRoot(withStyles(styles)(Missions))
