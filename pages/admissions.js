import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Link from 'next/link'
import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import TextSection from '../components/TextSection'
import withRoot from '../components/withRoot'
import InvertedButton from '../components/InvertedButton'
import Typography from '@material-ui/core/Typography'

const Admissions = ({ classes }) => (
  <Layout>
    <Hero
      backgroundImg="https://storage.googleapis.com/fus-wp-storage/img/biology-students.jpg"
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
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <Typography>
          Where are you going? Who do you want to be? How do you want to serve?
          Those are real questions, with real answers—answers that will shape
          your future and the future of the world in which you live.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <Typography>
          Do you want to grow in mind, body, and spirit? Do you want to expand
          your intellectual horizons or take the next step in your career? Do
          you want to serve God and your fellow man in a new way?
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <Typography>
          Learning is always personal. Whether it takes place in a classroom or
          “the cloud,” education is about people: your teachers, your
          classmates, and you. It’s about your shared desire to grow in
          knowledge, discover truth, and help one another better serve God and
          others in the world.
        </Typography>
      </Grid>
    </Grid>

    <TextSection
      sectionTitle="Our mission as a Franciscan and Catholic university that embraces the call to dynamic orthodoxy is to educate, to evangelize, and to send forth joyful disciples."
      bgColor="#21412a"
      textColor="#fff"
      borderColor="#998643"
    />
    <Grid container className={classes.contentContainer}>
      <Grid item className={classes.listGridItem} xs={12} sm={4} md={4} lg={4}>
        <section>
          <ul className={classes.list}>
            <h3 className={classes.listHeader}>To Educate</h3>

            <li className={classes.headerListItem}>
              <Link prefetch="" href="" as="">
                40 Majors
              </Link>
            </li>
            <li className={classes.headerListItem}>
              <Link prefetch="" href="" as="">
                Institutes and Centers
              </Link>
            </li>
          </ul>
        </section>
      </Grid>
      <Grid item className={classes.listGridItem} xs={12} sm={4} md={4} lg={4}>
        <section>
          <ul className={classes.list}>
            <h3 className={classes.listHeader}>To Evangelize</h3>

            <li className={classes.headerListItem}>
              <Link prefetch="" href="" as="">
                Chapel Ministries
              </Link>
            </li>
            <li className={classes.headerListItem}>
              <Link prefetch="" href="" as="">
                Student Life
              </Link>
            </li>
            <li className={classes.headerListItem}>
              <Link prefetch="" href="" as="">
                Missionary Outreach
              </Link>
            </li>
          </ul>
        </section>
      </Grid>
      <Grid item className={classes.listGridItem} xs={12} sm={4} md={4} lg={4}>
        <section>
          <ul className={classes.list}>
            <h3 className={classes.listHeader}>To Send Forth</h3>

            <li className={classes.headerListItem}>
              95% of graduates are in grad school, a position in their field, or
              religious life within 6 months of graduating
            </li>
            <li className={classes.headerListItem}>
              <Link prefetch="" href="" as="">
                Alumni Profiles
              </Link>
            </li>
          </ul>
        </section>
      </Grid>
    </Grid>
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
    {/* <Grid container className={classes.contentContainer}>
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
    </Grid> */}
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
  },
  headerListItem: {
    listStyleType: 'none',
    fontSize: '20px'
  },
  listGridContainer: {
    paddingTop: '8px'
  },
  list: {
    padding: 0,
    margin: 0
  },
  listHeader: {
    margin: '4px 0',
    fontWeight: 400,
    fontSize: '24px'
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

// const majors = [
//   {
//     header: 'Business',
//     items: ['Accounting', 'Economics']
//   },
//   {
//     header: 'Business2',
//     items: ['Accounting2', 'Economics2']
//   },
//   {
//     header: 'Business3',
//     items: ['Accounting3', 'Economics3']
//   },
//   {
//     header: 'Business4',
//     items: ['Accounting4', 'Economics4']
//   },
//   {
//     header: 'Business5',
//     items: ['Accounting5', 'Economics5']
//   }
// ]

export default withRoot(withStyles(styles)(Admissions))
