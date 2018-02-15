import React from 'react'
import Card, { CardMedia, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import withStyles from 'material-ui/styles/withStyles'
import Button from 'material-ui/Button'
import Layout from '../components/Layout'
import Grid from 'material-ui/Grid'
import withRoot from '../components/withRoot'
import Masonry from 'react-masonry-component'
import ProfileCard from '../components/ProfileCard'
import ListCard from '../components/ListCard'
import { eventsData } from '../data/listData'

const styles = theme => ({
  parallax: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    backgroundImage:
      'linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url(../static/img/hero.jpg)',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'right'
    }
  },
  heroBtn: {
    display: 'flex',
    justifyContent: 'center'
  },
  white: {
    color: '#fff'
  },
  card: {
    width: '100%'
  },
  media: {
    minHeight: 280
  },
  gridItemFix: {
    width: '100%',
    padding: '16px',
    [theme.breakpoints.down('sm')]: {
      padding: '8px'
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

const IndexPage = ({ classes }) => (
  <Layout>
    <div className={classes.parallax}>
      <Typography type="display2" className={classes.white} gutterBottom>
        Franciscan University of Steubenville
      </Typography>
      <Typography
        className={classes.white}
        type="subheading"
        style={{ fontWeight: 500, fontSize: '18px' }}
        gutterBottom
      >
        Academically Excellent, Passionately Catholic
      </Typography>
      <Grid container style={{ width: '100%' }}>
        <Grid item className={classes.heroBtn} xs={12}>
          <Button color="secondary" raised style={{ width: '192px' }}>
            Apply
          </Button>
        </Grid>
        <Grid
          item
          className={classes.heroBtn}
          xs={6}
          style={{ justifyContent: 'flex-end' }}
        >
          <Button color="secondary" raised>
            Inquire
          </Button>
        </Grid>
        <Grid
          item
          className={classes.heroBtn}
          xs={6}
          style={{ justifyContent: 'flex-start' }}
        >
          <Button color="secondary" raised>
            Visit
          </Button>
        </Grid>
      </Grid>
    </div>
    <div className={classes.heroCards}>
      <Masonry>
        <Grid item className={classes.gridItemFix} xs={12} sm={6}>
          <Card className={`${classes.card} ${classes.videoIframeContainer}`}>
            <iframe
              className={classes.videoIframe}
              src="https://www.youtube.com/embed/HpzwoD2oVSQ?modestbranding=1&rel=0&color=white"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </Card>
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} sm={6}>
          <ListCard listTitle="Events" itemsArray={eventsData} />
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={3}>
          <Card className={classes.card}>
            <CardContent>
              <Typography type="display1">
                15 to 1 Student to Faculty Ratio!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={3}>
          <ProfileCard
            profileImg="https://www.franciscan.edu/uploadedImages/Content/Faculty_and_Students/Students/Noah_Fisher_landing_v2.jpg"
            profileImgTitle="Noah Fisher"
            profileType="Student Profile"
            profileName="Noah Fisher"
            content="I first learned about Franciscan from some people at my parish
                who studied here. They recommended I check it out, but I wasn’t
                so sure. When I visited, though, I was blown away by the people
                I met; they were so genuine and helpful. They were the biggest
                reason I decided to come to Franciscan."
            profileLink="/studentprofiles/noah-fisher"
          />
        </Grid>
        <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/img/adventure2-400w.jpg"
              title="Austria Campus"
            />
          </Card>
        </Grid>

        <Grid item className={classes.gridItemFix} xs={12} sm={6}>
          <Card className={`${classes.card} ${classes.videoIframeContainer}`}>
            <iframe
              className={classes.videoIframe}
              src="https://www.youtube.com/embed/HzfPBp3lHTU?modestbranding=1&rel=0&color=white"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </Card>
        </Grid>
      </Masonry>
    </div>
  </Layout>
)

export default withRoot(withStyles(styles)(IndexPage))
