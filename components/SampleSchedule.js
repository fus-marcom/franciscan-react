import { withStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid'
const uuidv1 = require('uuid/v1')

const styles = {
  listItem: {
    listStyleType: 'none'
  },
  list: {
    padding: 0,
    margin: 0
  },
  listHeader: {
    margin: '4px 0'
  },
  listGridItem: {
    paddingBottom: 0
  },
  listGridContainer: {
    paddingTop: '8px'
  }
}

class SampleSchedule extends Component {
  state = {
    value: 0
  }
  handleChange = (event, value) => {
    this.setState({ value })
  }
  render () {
    const { value } = this.state
    return (
      <div>
        <h3>{courseData[0].title.rendered}</h3>
        <Tabs
          value={value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          scrollable
          scrollButtons="none"
        >
          <Tab label="Year One" />
          <Tab label="Year Two" />
          <Tab label="Year Three" />
          <Tab label="Year Four" />
        </Tabs>
        {courseData[0].acf.year.map((year, index) => {
          return (
            value === index && (
              <Grid
                style={styles.listGridContainer}
                container
                spacing={24}
                key={year + index}
              >
                <Grid style={styles.listGridItem} item xs={12} sm={6}>
                  <section>
                    <ul style={styles.list}>
                      <h4 style={styles.listHeader}>Fall Semester</h4>
                      {year.fall_semester_courses.map(course => (
                        <li style={styles.listItem} key={uuidv1()}>
                          {course.course}
                        </li>
                      ))}
                    </ul>
                  </section>
                </Grid>
                <Grid style={styles.listGridItem} item xs={12} sm={6}>
                  <section>
                    <ul style={styles.list}>
                      <h4 style={styles.listHeader}>Spring Semester</h4>
                      {year.spring_semester_courses.map(course => (
                        <li style={styles.listItem} key={uuidv1()}>
                          {course.course}
                        </li>
                      ))}
                    </ul>
                  </section>
                </Grid>
              </Grid>
            )
          )
        })}
      </div>
    )
  }
}

const courseData = [
  {
    slug: 'academically-intensive-non-degree-fast-track-option',
    title: {
      rendered: 'Academically Intensive Non-Degree Fast Track Option'
    },
    acf: {
      year: [
        {
          fall_semester_courses: [
            {
              course: 'Phil of the Human Person'
            },
            {
              course: 'Theology Core'
            },
            {
              course: 'Foundations of Ethics'
            },
            {
              course: 'Elective'
            },
            {
              course: 'Elective'
            }
          ],
          spring_semester_courses: [
            {
              course: 'Metaphysics'
            },
            {
              course: 'Logic/Epistemology'
            },
            {
              course: 'Elective'
            },
            {
              course: 'Elective'
            },
            {
              course: 'Elective'
            }
          ]
        },
        {
          fall_semester_courses: [
            {
              course: 'Philosophy Elective'
            },
            {
              course: 'Philosophy Elective'
            },
            {
              course: 'Elective'
            }
          ],
          spring_semester_courses: [
            {
              course: 'Philosophy Elective (History)'
            },
            {
              course: 'Elective'
            },
            {
              course: 'Elective'
            }
          ]
        },
        {
          fall_semester_courses: [
            {
              course: 'Philosophy Elective'
            },
            {
              course: 'Philosophy Elective'
            },
            {
              course: 'Elective'
            }
          ],
          spring_semester_courses: [
            {
              course: 'Philosophy Elective (History)'
            },
            {
              course: 'Elective'
            },
            {
              course: 'Elective'
            }
          ]
        },
        {
          fall_semester_courses: [
            {
              course: 'Philosophy Elective'
            },
            {
              course: 'Philosophy Elective'
            },
            {
              course: 'Elective'
            }
          ],
          spring_semester_courses: [
            {
              course: 'Philosophy Elective (History)'
            },
            {
              course: 'Elective'
            },
            {
              course: 'Elective'
            }
          ]
        }
      ]
    }
  }
]

export default withStyles(styles)(SampleSchedule)
