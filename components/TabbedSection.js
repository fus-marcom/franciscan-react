import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import React from 'react'

// import SwipeableViews from 'react-swipeable-views'

function TabContainer ({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
}

class TabbedSection extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  render () {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          fullWidth
        >
          <Tab label="Undergraduate" />
          <Tab label="Graduate" />
          <Tab label="Online" />
        </Tabs>

        {value === 0 && (
          <TabContainer>
            {' '}
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
                    <a
                      title="Internatiol Business"
                      href="/InternationalBusiness/"
                    >
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
                    <a
                      title="Mathematical Science"
                      href="/MathematicalScience/"
                    >
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
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <Grid
              container
              className={classes.contentContainer}
              styles={{ textAlign: 'center' }}
            >
              <Grid item className={classes.gridItemFix} xs={12} sm={4} />
              <Grid item className={classes.gridItemFix} xs={12} sm={4}>
                <ul className={classes.degreeList}>
                  <lh style={{ fontWeight: 400 }}>On-Campus/Online</lh>
                  <li>
                    <a title="MA Theology" href="/ma-theology/">
                      MA Theology
                    </a>
                  </li>
                  <li>
                    <a title="MS Education" href="/graduate-education/">
                      MS Education
                    </a>
                  </li>
                  <li>
                    <a
                      title="MS Educational Administration"
                      href="/graduate-education/"
                    >
                      MS Educational Administration
                    </a>
                  </li>
                  <li>
                    <a title="MBA" href="/mba/">
                      MBA
                    </a>
                  </li>
                  <lh style={{ fontWeight: 400 }}>Online</lh>
                  <li>
                    <a
                      title="MA Catechetics and Evangelization"
                      href="/graduate-catechetics/"
                    >
                      MA Catechetics and Evangelization
                    </a>
                  </li>
                  <lh style={{ fontWeight: 400 }}>On-Campus</lh>
                  <li>
                    <a title="MA Philosophy" href="/graduate-philosophy/">
                      MA Philosophy
                    </a>
                  </li>
                  <li>
                    <a title="MS Nursing" href="/graduate-nursing/">
                      MS Nursing
                    </a>
                  </li>
                  <li>
                    <a
                      title="MA Clinical Mental Health Counseling"
                      href="/cmhc/"
                    >
                      MA Clinical Mental Health Counseling
                    </a>
                  </li>
                </ul>
              </Grid>
              <Grid item className={classes.gridItemFix} xs={12} sm={4} />
            </Grid>
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            {' '}
            <Grid
              container
              className={classes.contentContainer}
              styles={{ textAlign: 'center' }}
            >
              <Grid item className={classes.gridItemFix} xs={12} sm={4} />
              <Grid item className={classes.gridItemFix} xs={12} sm={4}>
                <ul className={classes.degreeList}>
                  <lh style={{ fontWeight: 400 }}>High School Students</lh>
                  <li>
                    <a title="FastTrack" href="/fasttrack/">
                      FastTrack
                    </a>
                  </li>
                  <lh style={{ fontWeight: 400 }}>Undergraduate</lh>
                  <li>
                    <a
                      title="Associate in Philosophy"
                      href="/philosophy/online-associates/"
                    >
                      Associate in Philosophy
                    </a>
                  </li>
                  <li>
                    <a
                      title="Associate in Theology"
                      href="/theology/online-associates/"
                    >
                      Associate in Theology
                    </a>
                  </li>
                  <lh style={{ fontWeight: 400 }}>Graduate</lh>
                  <li>
                    <a
                      title="MA Catechetics and Evangelization"
                      href="/graduate-catechetics/"
                    >
                      MA Catechetics and Evangelization
                    </a>
                  </li>

                  <li>
                    <a
                      title="MA Theology and Christian Ministry"
                      href="/ma-theology/"
                    >
                      MA Theology and Christian Ministry
                    </a>
                  </li>

                  <li>
                    <a title="MBA Online" href="/mba-online/">
                      MBA
                    </a>
                  </li>
                  <li>
                    <a title="MS Education" href="/online/msed/">
                      MS Education
                    </a>
                  </li>
                </ul>
              </Grid>
              <Grid item className={classes.gridItemFix} xs={12} sm={4} />
            </Grid>
          </TabContainer>
        )}
      </div>
    )
  }
}

TabbedSection.propTypes = {
  classes: PropTypes.object.isRequired
}

const styles = theme => ({
  root: {
    width: '100%'
  },
  degreeList: {
    listStyleType: 'none'
  }
})

export default withStyles(styles)(TabbedSection)
