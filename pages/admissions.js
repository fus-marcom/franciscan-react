import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import ProfileCard from '../components/ProfileCard'
import TextSection from '../components/TextSection'
import withRoot from '../components/withRoot'
import HeaderList from '../components/HeaderList'

const Admissions = ({ classes }) => (
  <Layout>
    <Hero
      backgroundImg="../static/img/biology-students.jpg"
      titleText="Undergraduate Admissions"
      subtitleText={
        <span>Academically Excellent &#8226; Passionately Catholic</span>
      }
      primaryBtnText="Apply"
      primaryBtnLink="https://franciscanuniversity.force.com/portal"
      secondaryBtnText="Inquire"
      secondaryBtnLink="https://franciscan.secure.force.com/form?formid=217772"
      tertiaryBtnText="Visit"
      tertiaryBtnLink="https://franciscan.secure.force.com/events"
      minimumHeight="60vh"
    />

    <Grid container className={classes.contentContainer}>
      <Grid item className={classes.gridItemFix} xs={12} sm={4} md={4} lg={4}>
        <ProfileCard
          profileImg="https://www.franciscan.edu/uploadedImages/Content/Faculty_and_Students/Students/Noah_Fisher_landing_v2.jpg"
          profileImgTitle="Noah Fisher"
          profileType="Student Profile"
          profileName="Noah Fisher"
          content="I first learned about Franciscan from some people at my parish who studied here. They recommended I check it out, but I wasn’t so sure. When I visited, though, I was blown away by the people I met; they were so genuine and helpful. They were the biggest reason I decided to come to Franciscan."
        />
      </Grid>

      <Grid item className={classes.gridItemFix} xs={12} sm={4} lg={4}>
        <ProfileCard
          profileImg="https://www.franciscan.edu/uploadedImages/Content/Faculty_and_Students/Alumni_Profiles/IMG_1132.JPG"
          profileImgTitle="Maggie McDermott"
          profileType="Alumni Profile"
          profileName="Maggie McDermott"
          content="My choice to say Yes to giving my all even in those trying moments can be attributed to the growth and education I received at Franciscan."
          bgContain
        />
      </Grid>
      <Grid item className={classes.gridItemFix} xs={12} sm={4} lg={4}>
        <ProfileCard
          profileImg="https://www.franciscan.edu/uploadedImages/Content/Faculty_and_Students/Alumni_Profiles/IMG_1132.JPG"
          profileImgTitle="Maggie McDermott"
          profileType="Alumni Profile"
          profileName="Maggie McDermott"
          content="My choice to say Yes to giving my all even in those trying moments can be attributed to the growth and education I received at Franciscan."
          bgContain
        />
      </Grid>
    </Grid>

    <Grid container className={classes.contentContainer}>
      {majors.map((list, i) => {
        if (i < 3) {
          return (
            <Grid
              item
              className={classes.listGridItem}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              key={list.header}
            >
              <HeaderList header={list.header} items={list.items} />
            </Grid>
          )
        }
      })}

      <Grid item xs={0} sm={2} md={2} lg={2} />
      {majors.map((list, i) => {
        if (i >= 3) {
          return (
            <Grid
              item
              className={classes.listGridItem}
              xs={12}
              sm={4}
              md={4}
              lg={4}
              key={list.header}
            >
              <HeaderList header={list.header} items={list.items} />
            </Grid>
          )
        }
      })}
      <Grid item xs={0} sm={2} md={2} lg={2} />
    </Grid>
    <TextSection
      sectionTitle="15 to 1 Student to Faculty Ratio"
      bgColor="#21412a"
      textColor="#fff"
      borderColor="#998643"
    />
    <Grid container className={classes.contentContainer}>
      <Grid item className={classes.listGridItem} xs={12} sm={4} md={4} lg={4}>
        <h3>Application</h3>
      </Grid>
      <Grid item className={classes.listGridItem} xs={12} sm={4} md={4} lg={4}>
        <h3>Transcripts</h3>
      </Grid>
      <Grid item className={classes.listGridItem} xs={12} sm={4} md={4} lg={4}>
        <h3>Letters of Recommendation</h3>
      </Grid>
    </Grid>
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
    margin: '32px auto',
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
  },
  listGridItem: {
    paddingBottom: 0
  }
})

const majors = [
  {
    header: 'Business',
    items: ['Accounting', 'Economics']
  },
  {
    header: 'Business2',
    items: ['Accounting2', 'Economics2']
  },
  {
    header: 'Business3',
    items: ['Accounting3', 'Economics3']
  },
  {
    header: 'Business4',
    items: ['Accounting4', 'Economics4']
  },
  {
    header: 'Business5',
    items: ['Accounting5', 'Economics5']
  }
]

export default withRoot(withStyles(styles)(Admissions))
