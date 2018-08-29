import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import TabbedSection from '../components/TabbedSection'
import TextSection from '../components/TextSection'
import withRoot from '../components/withRoot'

const IndexPage = ({ classes }) => (
  <Layout title="Home">
    <Hero
      backgroundImg="https://storage.googleapis.com/fus-wp-storage/img/biology-students.jpg"
      titleText="Franciscan University of Steubenville"
      subtitleText={
        <span>Academically Excellent &#8226; Passionately Catholic</span>
      }
      primaryBtnText="Request Info"
      primaryBtnLink="https://franciscan.secure.force.com/form?formid=217772"
      secondaryBtnText="Apply"
      secondaryBtnLink="https://franciscanuniversity.force.com/portal"
      tertiaryBtnText="Visit"
      tertiaryBtnLink="https://franciscan.secure.force.com/events"
    />
    <Grid
      container
      className={classes.contentContainer}
      styles={{ textAlign: 'center' }}
    >
      <Grid item className={classes.gridItemFix} xs={12}>
        <Typography variant="display2" component="h3" gutterBottom>
          Tuition
        </Typography>
      </Grid>
      <Grid item className={classes.gridItemFix} xs={12} sm={4}>
        <Typography>$24k</Typography>
        <Typography>Undergraduate</Typography>
      </Grid>

      <Grid item className={classes.gridItemFix} xs={12} sm={4}>
        <Typography>$18k</Typography>
        <Typography>Graduate</Typography>
      </Grid>

      <Grid item className={classes.gridItemFix} xs={12} sm={4}>
        <Typography>$3.50</Typography>
        <Typography>Online</Typography>
      </Grid>
    </Grid>

    <TextSection
      sectionTitle="Degrees"
      text=" We have lots of majors"
      btnLink="/academics/ug/majors"
      btnText="Learn More"
    />
    <TabbedSection />
    <TextSection
      sectionTitle="15 to 1 Student to Faculty Ratio"
      bgColor="#21412a"
      textColor="#fff"
      borderColor="#998643"
    />
    <TextSection
      sectionTitle="Cost and Financial Aid"
      text=" To educate, evangelize, and send forth joyful disciples to restore all things in Christ."
      btnLink="/about/our-mission"
      btnText="Calculate Cost"
    />
  </Layout>
)

const styles = theme => ({
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

export default withRoot(withStyles(styles)(IndexPage))
