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
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import {
  Link,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll'

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
  componentDidMount () {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments)
    })

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments)
    })

    scrollSpy.update()
  }
  scrollToTop () {
    scroll.scrollToTop()
  }
  scrollTo () {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer () {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register('end', () => {
        resolve()
        Events.scrollEvent.remove('end')
      })

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      })
    })

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      })
    )
  }
  componentWillUnmount () {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }
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
          backgroundImg="../static/img/hero-missions-page.jpg"
          titleText="Missions of Peace"
          subtitleText={
            'Blessed are the peacemakers, for they shall be called children of God.'
          }
        />
        <TextSection
          sectionTitle="Serve - Inspire - Evangelize"
          btnLink="/about/our-mission"
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
              />
            </Grid>

            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
              <Typography type="display1">
                Missions of Peace, a student outreach of Franciscan University,
                sponsors domestic and international mission trips during breaks.
                Students generously share their time and talent while on mission
                through various service outreaches—youth ministries, chastity
                presentations, prayer services, home improvement projects,
                village ministries, medical outreaches, and other apostolic
                endeavors.
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

        <TextSection
          sectionTitle="Mission trips across the U.S. and throughout the Western Hemisphere"
          bgColor="#21412a"
          textColor="#fff"
          borderColor="#998643"
        />
        <div className="scroll-spy-container">
          <ul className="scroll-spy-nav">
            <Link
              activeClass="active"
              to="spring"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li>Spring</li>
            </Link>

            <Link
              activeClass="active"
              to="summer"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li>Summer</li>
            </Link>

            <Link
              activeClass="active"
              to="christmas"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li>Christmas</li>
            </Link>

            <Link
              activeClass="active"
              to="austria"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li>Austria</li>
            </Link>

            <Link
              activeClass="active"
              to="donate"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <li>Donate</li>
            </Link>
          </ul>
        </div>

        <div className="missionHead">Spring Mission Trips:</div>

        <div id="spring" className={classes.contentContainer}>
          <Masonry>
            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
              <ProfileCard
                profileImg="../static/img/arizona-mission-team.jpg"
                profileImgTitle="Arizona"
                profileType="Spring Mission"
                profileName="Arizona Mission"
                content="This mission focuses on working in a Catholic school just inside the US border with Hispanic students who cross the border each day to attend the school. We collaborate with the Carmelite Sisters of the Most Sacred Heart of Los Angeles."
                profileLink="#"
              />
            </Grid>

            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
              <ProfileCard
                profileImg="../static/img/belize-mission.jpg"
                profileImgTitle="Belize"
                profileType="Spring Mission"
                profileName="Belize Mission"
                content="This mission focuses on bringing Christ to students in middle and high schools of villages and cities. The ministry includes using Theology of the Body to teach the students how to live out their faith, how to practice chastity and how to build each other up as the body of Christ while collaborating with SOLT (Society of Our Lady of the Most Holy Trinity) priests at Mt. Carmel High School in Benque."
                profileLink="#"
              />
            </Grid>

            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
              <ProfileCard
                profileImg="../static/img/new-york-bronx-mission.jpg"
                profileImgTitle="New York City"
                profileType="Spring Mission"
                profileName="New York City (Bronx) Mission"
                content="This mission focuses on ministry in the inner city. This includes work in soup kitchens, homeless shelters, and working with Our Lady of Mt. Carmel Grade School on Mulberry Street by sharing the Joy of the Gospel with K-8th graders."
                profileLink="#"
              />
            </Grid>

            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
              <ProfileCard
                profileImg="../static/img/chicago-mission-team.jpg"
                profileImgTitle="Chicago"
                profileType="Spring Mission"
                profileName="Chicago Mission"
                content="This mission focuses on working with homeless men in the inner city who struggle with male street prostitution, generational poverty, homelessness, drug addiction and HIV/AIDS. Our students serve along side Emmaus Ministries in the inner city."
                profileLink="#"
              />
            </Grid>

            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
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
                profileImg="../static/img/honduras-mission-littleones.jpg"
                profileImgTitle="Honduras"
                profileType="Spring Mission"
                profileName="Honduras Mission"
                content="This mission focuses on bringing Christ to the poorest of the poor in Honduras through the sacraments, prayer, music, and ministering to children and families."
                profileLink="#"
              />
            </Grid>

            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
              <ProfileCard
                profileImg="../static/img/new-mexico-mission-team.jpg"
                profileImgTitle="New Mexico"
                profileType="Spring Mission"
                profileName="New Mexico Mission"
                content="This mission focuses on ministering to the Navajo and other people in the area. Work is done at St. Francis of Assisi Parish Grade School, High School youth group and St. Michael's Special Education school in collaboration with the Missionaries of Charity and Little Sisters of the Poor."
                profileLink="#"
              />
            </Grid>

            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
              <ProfileCard
                profileImg="../static/img/nicaragua-mission.jpg"
                profileImgTitle="Nicaragua"
                profileType="Spring Mission"
                profileName="Nicaragua Mission"
                content="This mission focuses on providing personal testimonies and retreats focused on the teachings of St. Pope John Paul II’s Theology of the Body and working with orphans and the poorest of the poor in collaboration with the Lincoln Academy, Missionaries of Charity and the Abandoned Children’s Center."
                profileLink="#"
              />
            </Grid>

            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
              <ProfileCard
                profileImg="../static/img/north-dakota-mission-team.jpg"
                profileImgTitle="North Dakota"
                profileType="Spring Mission"
                profileName="North Dakota Mission"
                content="This mission focuses on ministering to the Chippewa Indians on Turtle Mountain Indian Reservation. The ministry includes retreats, work in the schools, door-to-door ministry collaborating with SOLT (Society of Our Lady of the Most Holy Trinity) priests and sisters."
                profileLink="#"
              />
            </Grid>

            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
              <ProfileCard
                profileImg="../static/img/los-angeles-mission.jpg"
                profileImgTitle="Los Angeles"
                profileType="Spring Mission"
                profileName="Los Angeles Mission"
                content="This is a NEW mission focused on bringing Christ to the people of Los Angeles alongside the Carmelite Sisters of the Most Sacred Heart of Los Angeles. It includes work in youth ministry, grade school catechetics, as well as nursing home and homeless ministry."
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
              <ProfileCard
                profileImg="../static/img/spring-steubenville-mission-team.jpg"
                bgPosY="20%"
                profileImgTitle="Steubenville Mission"
                profileType="Spring Mission"
                profileName="Steubenville Mission"
                content="This mission focuses on bringing the Light of Christ into the downtown areas of Steubenville through: door-to-door evangelization, street ministry, soup kitchen, homeless ministry and various service projects."
                profileLink="#"
              />
            </Grid>
          </Masonry>
        </div>

        <div className="missionHead">Summer Mission Trips:</div>

        <div id="summer" className={classes.contentContainer}>
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
                profileImg="../static/img/summer-steubenville-mission-team.png"
                profileImgTitle="Steubenville"
                profileType="Summer Mission"
                profileName="Steubenville Mission"
                content="This mission focuses on bringing the Light of Christ into the downtown areas of Steubenville through: door-to-door evangelization, street ministry, soup kitchen, homeless ministry and various service projects."
                profileLink="#"
              />
            </Grid>

            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
              <ProfileCard
                profileImg="../static/img/ecuador-summer-mission.jpg"
                profileImgTitle="Ecuador Summer Mission"
                profileType="Summer Mission"
                profileName="Ecuador Summer Mission"
                content="This mission focuses on caring for the whole person by bringing the sacraments and basic medical care to rural Ecuadorian communities.This mission focuses on caring for the whole person by bringing the sacraments and basic medical care to rural Ecuadorian communities."
                profileLink="#"
              />
            </Grid>

            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
              <ProfileCard
                profileImg="../static/img/Springsandiegomission.jpg"
                bgPosY="20%"
                profileImgTitle="San Diego Mission"
                profileType="SUmmer Mission"
                profileName="San Diego Mission"
                content="The goal of the summer mission is to share the love of Christ with those we will be serving.  Student missionaries will be serving in either a hospital, special needs school or parish sharing their faith. Located in Quito, Ecuador we will be staying at Portiuncula Foundation Retreat Center operated by FUS alumni for a three week mission. You do not need to speak Spanish to serve on this mission but it is strongly encourage that you have taken Spanish 101 and 102 prior to serving on this mission."
                profileLink="#"
              />
            </Grid>
          </Masonry>
        </div>

        <div className="missionHead">Christmas Mission Trip:</div>

        <div id="christmas" className={classes.contentContainer}>
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
                profileImg="../static/img/jamaica-christmas-mission.jpg"
                profileImgTitle="Jamaica"
                profileType="Christmas Mission"
                profileName="Jamaica Mission"
                content="This mission focuses on ministering to people of all ages through various types of evangelization. The team is of service to the Bishop and local priests serving him by providing sacramental preparation to the people of the Montego Bay Diocese."
                profileLink="#"
              />
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
                profileImg="../static/img/PrayerOfRenewal.png"
                profileImgTitle="Prayer of On-Going Conversion"
                profileName="Prayer of On-Going Conversion"
                content="Image by Amber Pitts -SENT Missionary & FUS Alumni"
              />
            </Grid>
          </Masonry>
        </div>
        <div className="missionHead">Austria Program-Mission Trips:</div>

        <div id="austria" className={classes.contentContainer}>
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
                profileImg="../static/img/summer-steubenville-mission-team.png"
                profileImgTitle="Hungary"
                profileType="Austria-Program Mission"
                profileName="Hungary Mission"
                content="Students serve in orphanages, schools and teach Chastity through the wisdom of St. Pope John-Paul II’s Theology of the Body in Hungary, Romania, and Slovakia."
                profileLink="#"
              />
            </Grid>

            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
              <ProfileCard
                profileImg="../static/img/ecuador-summer-mission.jpg"
                profileImgTitle="Romania Mission"
                profileType="Austria-Program Mission"
                profileName="Romania Mission"
                content="Students serve in orphanages, schools and teach Chastity through the wisdom of St. Pope John-Paul II’s Theology of the Body in Hungary, Romania, and Slovakia."
                profileLink="#"
              />
            </Grid>

            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
              <ProfileCard
                profileImg="../static/img/Springsandiegomission.jpg"
                bgPosY="20%"
                profileImgTitle="Slovakia Mission"
                profileType="Austria-Program Mission"
                profileName="Slovakia Mission"
                content="Students serve in orphanages, schools and teach Chastity through the wisdom of St. Pope John-Paul II’s Theology of the Body in Hungary, Romania, and Slovakia."
                profileLink="#"
              />
            </Grid>
          </Masonry>
        </div>

        <TextSection
          sectionTitle="How to Contribute"
          bgColor="#21412a"
          textColor="#fff"
          borderColor="#998643"
        />

        <div id="donate" className={classes.contentContainer}>
          <Masonry>
            <Grid item className={classes.gridItemFix} xs={12} sm={6} lg={6}>
              <Typography type="display1">
                Missions of Peace, a student outreach of Franciscan University,
                sponsors domestic and international mission trips during breaks.
                Students generously share their time and talent while on mission
                through various service outreaches—youth ministries, chastity
                presentations, prayer services, home improvement projects,
                village ministries, medical outreaches, and other apostolic
                endeavors.
              </Typography>
            </Grid>
          </Masonry>
        </div>
      </Layout>
    )
  }
}

export default withRoot(withStyles(styles)(Missions))
