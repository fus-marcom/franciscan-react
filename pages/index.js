import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import Hero from '../components/Hero'
import InvertedButton from '../components/InvertedButton'
import Layout from '../components/Layout'
import TabbedSection from '../components/TabbedSection'
import TextSection from '../components/TextSection'
import withRoot from '../components/withRoot'

const heroImages = [
  'https://storage.googleapis.com/fus-wp-storage/img/biology-students.jpg',
  'https://storage.googleapis.com/fus-wp-storage/wp/2018/09/b61de543-rosary_fus1014-169.jpg',
  'https://storage.googleapis.com/fus-wp-storage/wp/2018/09/a0d77072-fr-sean-eucharist-mask-v1.jpg',
  'https://storage.googleapis.com/fus-wp-storage/wp/2018/09/f3b7a6f3-l5a6509-edit.jpg',
  'https://storage.googleapis.com/fus-wp-storage/wp/2018/09/8b9ad001-add_visit_guide___.jpg',
  'https://storage.googleapis.com/fus-wp-storage/wp/2018/09/439dc564-hop_9173.jpg'
]

const IndexPage = ({ classes }) => (
  <Layout title="Home">
    <Hero
      backgroundImg={heroImages[Math.floor(Math.random() * heroImages.length)]}
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
    <TextSection
      text="Our mission as a Franciscan and Catholic university that embraces the call to dynamic orthodoxy is to educate, to evangelize, and to send forth joyful disciples."
      bgColor="#21412a"
      textColor="#fff"
      borderColor="#998643"
      padding="12px 0"
    />

    <Grid container className={classes.contentContainer}>
      <Grid item className={classes.gridItemFix} xs={12}>
        <Card className={`${classes.card} ${classes.videoIframeContainer}`}>
          <iframe
            className={classes.videoIframe}
            src="https://www.youtube.com/embed/HpzwoD2oVSQ"
            frameBorder="0"
            allow="encrypted-media"
            allowFullScreen
          />
        </Card>
      </Grid>
    </Grid>

    <TextSection
      sectionTitle="Degrees"
      text="40+ Majors, 34 Minors, 8 Graduate Degrees"
    />
    <Grid
      container
      className={classes.contentContainer}
      styles={{ textAlign: 'center' }}
    >
      <TabbedSection />
    </Grid>
    <TextSection
      text="Over 55 percent of Franciscan University students voluntarily go to Mass two or more times a week."
      bgColor="#21412a"
      textColor="#fff"
      borderColor="#998643"
    />
    <div className={classes.section}>
      <Typography variant="display2" gutterBottom>
        Passionately Catholic
      </Typography>
      <Grid container className={classes.contentContainer}>
        <Grid item className={classes.gridItemFix} xs={6}>
          <a href="/chapel/portiuncula" title="Portiuncula">
            <Typography
              className={classes.sectionText}
              variant="body1"
              gutterBottom
            >
              Perpetual Adoration
            </Typography>
            <Card className={`${classes.card} ${classes.videoIframeContainer}`}>
              <img
                src="https://storage.googleapis.com/fus-wp-storage/wp/2018/09/575f4590-dsc_1452-768x513.jpg"
                alt="Perpetual Adoration"
              />
            </Card>
          </a>
        </Grid>
        <Grid item className={classes.gridItemFix} xs={6}>
          <a href="/chapel" title="Chapel Ministries">
            <Typography
              className={classes.sectionText}
              variant="body1"
              gutterBottom
            >
              Daily Mass
            </Typography>
            <Card className={`${classes.card} ${classes.videoIframeContainer}`}>
              <img
                src="https://storage.googleapis.com/fus-wp-storage/wp/2018/09/08a7bfe2-2006-graule-775-768x514.jpg"
                alt="Daily Mass"
              />
            </Card>
          </a>
        </Grid>
      </Grid>
    </div>
    <Grid
      container
      className={classes.contentContainer}
      style={{ padding: '16px 0', textAlign: 'center' }}
    >
      <Grid item className={classes.gridItemFix} xs={6}>
        <a href="/missions-of-peace" title="Mission Trips">
          <Typography
            className={classes.sectionText}
            variant="body1"
            gutterBottom
          >
            Mission Trips
          </Typography>
        </a>
        <Card className={`${classes.card} ${classes.videoIframeContainer}`}>
          <iframe
            className={classes.videoIframe}
            src="https://www.youtube.com/embed/bHSbib2wt90"
            frameBorder="0"
            allow="encrypted-media"
            allowFullScreen
          />
        </Card>
      </Grid>
      <Grid item className={classes.gridItemFix} xs={6}>
        <a href="/sent-ministries" title="SENT Ministries">
          <Typography
            className={classes.sectionText}
            variant="body1"
            gutterBottom
          >
            Ministry
          </Typography>
        </a>
        <Card className={`${classes.card} ${classes.videoIframeContainer}`}>
          <iframe
            className={classes.videoIframe}
            src="https://www.youtube.com/embed/GMR6zF1igYc"
            frameBorder="0"
            allow="encrypted-media"
            allowFullScreen
          />
        </Card>
      </Grid>
    </Grid>
    <TextSection
      text="96 percent of graduates employed, in graduate school, or serving the Church within one year."
      bgColor="#21412a"
      textColor="#fff"
      borderColor="#998643"
    />
    <div className={classes.section}>
      <div className={classes.innerContainer}>
        <Typography variant="display2" gutterBottom>
          Cost and Financial Aid
        </Typography>

        <Typography
          className={classes.sectionText}
          variant="body1"
          gutterBottom
        >
          $27k Tuition
        </Typography>
        <Typography
          className={classes.sectionText}
          variant="body1"
          gutterBottom
        >
          90% of students receive financial aid
        </Typography>
        <Grid item className={classes.heroBtn} xs={12}>
          <InvertedButton
            href="https://tcc.noellevitz.com/Franciscan%20University%20of%20Steubenville/Franciscan%20University%20Net%20Price%20Calculator"
            title="Price Calculator"
            className={classes.invertedBtn}
            color="secondary"
            style={{ width: '192px' }}
          >
            Calculate Cost
          </InvertedButton>
        </Grid>
      </div>
    </div>
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
  degreeList: {
    listStyleType: 'none'
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
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '38px 0',
    textAlign: 'center'
  },
  innerContainer: {
    width: '70%',
    margin: '0 auto'
  },
  sectionText: {
    fontSize: '28px',
    fontWeight: 400,
    lineHeight: 1.5
  },
  heroBtn: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '16px'
  },
  invertedBtn: {
    color: '#21412a',
    backgroundColor: 'transparent',
    border: '2px #21412a solid',
    boxShadow: 'none'
  }
})

export default withRoot(withStyles(styles)(IndexPage))
