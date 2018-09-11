import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import Hero from '../components/Hero'
import InvertedButton from '../components/InvertedButton'
import Layout from '../components/Layout'
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
    <TextSection
      sectionTitle="Degrees"
      text="40+ Majors, 34 Minors, 8 Graduate Degrees"
    />
    <Grid
      container
      className={classes.contentContainer}
      styles={{ textAlign: 'center' }}
    >
      <Grid item className={classes.gridItemFix} xs={12} sm={4}>
        <ul className={classes.degreeList}>
          <li>
            <a title="Accounting" href="/Accounting">
              Accounting
            </a>
          </li>
          <li>
            <a title="Anthropology" href="/Anthropology/">
              Anthropology
            </a>
          </li>
          <li>
            <a title="Art&nbsp;" href="/departments/fine-arts/">
              Art
            </a>
          </li>
          <li>
            <a title="Biology" href="/Biology/">
              Biology
            </a>
          </li>
          <li>
            <a title="British and American Literature" href="/English/">
              British and American Literature
            </a>
          </li>
          <li>
            <a title="Business&nbsp;" href="/departments/acc-bus-ec/">
              Business
            </a>
          </li>
          <li>
            <a title="Catechetics" href="/Catechetics/">
              Catechetics
            </a>
          </li>
          <li>
            <a title="Chemistry" href="/Chemistry/">
              Chemistry
            </a>
          </li>
          <li>
            <a title="Classics" href="/Classics/">
              Classics
            </a>
          </li>
          <li>
            <a title="Communication Arts" href="/CommunicationArts/">
              Communication Arts
            </a>
          </li>
          <li>
            <a title="Computer Information Science" href="/CS-CIS/">
              Computer Information Science
            </a>
          </li>
          <li>
            <a title="Computer Science" href="/CS-CIS/">
              Computer Science
            </a>
          </li>
          <li>
            <a title="Economics" href="/Economics/">
              Economics
            </a>
          </li>
          <li>
            <a title="Education" href="/education/">
              Education
            </a>
          </li>
          <li>
            <a title="Engineering" href="/Engineering/">
              Engineering
            </a>
          </li>
        </ul>
      </Grid>

      <Grid item className={classes.gridItemFix} xs={12} sm={4}>
        <ul className={classes.degreeList}>
          {' '}
          <li>
            <a title="English" href="/English/">
              English
            </a>
          </li>
          <li>
            <a title="Finance" href="/Finance/">
              Finance
            </a>
          </li>
          <li>
            <a title="French" href="/ModernLanguages/">
              French
            </a>
          </li>
          <li>
            <a title="German" href="/ModernLanguages/">
              German
            </a>
          </li>
          <li>
            <a title="History" href="/History/">
              History
            </a>
          </li>
          <li>
            <a
              title="Humanities and Catholic Culture"
              href="/HumanitiesAndCatholicCulture/"
            >
              Humanities and Catholic Culture
            </a>
          </li>
          <li>
            <a title="Internatiol Business" href="/InternationalBusiness/">
              International Business
            </a>
          </li>
          <li>
            <a title="Communication Arts" href="/CommunicationArts/">
              Journalism
            </a>
          </li>
          <li>
            <a title="Law School Preparation" href="/law/">
              Law School Preparation
            </a>
          </li>
          <li>
            <a title="Management" href="/Management/">
              Management
            </a>
          </li>
          <li>
            <a title="Marketing" href="/Marketing/">
              Marketing
            </a>
          </li>
          <li>
            <a title="Mathematical Science" href="/MathematicalScience/">
              Mathematical Science{' '}
            </a>
          </li>
          <li>
            <a title="Multimedia" href="/CommunicationArts/">
              Multimedia
            </a>
          </li>
          <li>
            <a title="Music (Sacred Music)" href="/SacredMusic/">
              Music (Sacred Music)
            </a>
          </li>
        </ul>
      </Grid>

      <Grid item className={classes.gridItemFix} xs={12} sm={4}>
        <ul className={classes.degreeList}>
          {' '}
          <li>
            <a title="Nursing" href="/Nursing/">
              Nursing
            </a>
          </li>
          <li>
            <a title="Pharmacy" href="/pharmacy/">
              Pharmacy
            </a>
          </li>
          <li>
            <a title="Philosophy" href="/Philosophy/">
              Philosophy
            </a>
          </li>
          <li>
            <a title="Political Science" href="/PoliticalScience/">
              Political Science
            </a>
          </li>
          <li>
            <a title="Psychology-Clinical" href="/Psychology/">
              Psychology-Clinical
            </a>
          </li>
          <li>
            <a title="Psychology-Experimental" href="/Psychology/">
              Psychology-Experimental
            </a>
          </li>
          <li>
            <a title="Radio/Television" href="/CommunicationArts/">
              Radio/Television
            </a>
          </li>
          <li>
            <a title="Social Work" href="/SocialWork/">
              Social Work
            </a>
          </li>
          <li>
            <a title="Sociology" href="/Sociology/">
              Sociology
            </a>
          </li>
          <li>
            <a title="Spanish" href="/ModernLanguages/">
              Spanish
            </a>
          </li>
          <li>
            <a title="Theatre" href="/theatre">
              Theatre
            </a>
          </li>
          <li>
            <a title="Theology" href="/Theology/">
              Theology
            </a>
          </li>
          <li>
            <a title="Western and World Literature" href="/English/">
              Western and World Literature
            </a>
          </li>
          <li>
            <a title="Writing" href="/English/">
              Writing
            </a>
          </li>
        </ul>
      </Grid>
    </Grid>

    <TextSection
      sectionTitle="96 percent of graduates employed, in graduate school, or serving the Church within one year."
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
          $24k Tuition
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
