import Head from 'next/head'
import Image from 'next/image'

import React from 'react';

import { Button, FormGroup, Col, Row, Input, Label } from 'reactstrap';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

import styles from '../styles/Home.module.css'

class Website extends React.Component {

  render() {
    return (
        <div className={styles.container}>
          <Head>
            <title>Cardamon - NFT monsters on Cardano blockchain in their own ecosystem</title>
            <meta name="description" content="Cardamon - NFT monsters on Cardano blockchain in their own ecosystem"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/favicon/site.webmanifest"/>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap" rel="stylesheet"/>

            <meta name="viewport" content="width=1200, initial-scale=0.3"/>
          </Head>

          <div className={styles.header}>
            <div className={styles.navigation}>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#ecosystem">Ecosystem</a></li>
                <li><a href="#phases">Phases</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#social">Social</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.wrapper}>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                centeredSlides={true}
                navigation
                pagination={{clickable: true}}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className={styles.carouselWrapper} style={{backgroundImage: "url('/carousel/carousel3.png')"}}>
                  <h1 style={{fontSize: "4rem", marginLeft: "4rem", color: "#9b0000"}}>Cardamon</h1>
                  <h3 style={{fontSize: "2rem", marginLeft: "4rem", color: "#810000"}}>NFT
                    monster universe on Cardano blockchain</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.carouselWrapper} style={{backgroundImage: "url('/carousel/carousel3.png')"}}>
                  <h1 style={{fontSize: "4rem", marginLeft: "4rem", color: "#9b0000"}}>Hello
                    Monke</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.carouselWrapper} style={{backgroundImage: "url('/carousel/carousel3.png')"}}>
                  <h1 style={{fontSize: "4rem", marginLeft: "4rem"}}>Upcoming</h1>
                </div>
              </SwiperSlide>
            </Swiper>

            <div id="home" className={`${styles.contentWrapper}, ${styles.home}`}>
              <div className={styles.content}>

                <br/>


                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <p className={styles.nomargin}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum
                  sit amet lacus non suscipit. Fusce at libero ipsum. Suspendisse id mattis purus. Praesent nunc tellus,
                  bibendum et eleifend eu, accumsan non turpis. Aliquam viverra non nisi a volutpat. Donec et pulvinar
                  mi. Ut convallis diam quis molestie ullamcorper.

                  Phasellus mauris lorem, congue ut ex in, accumsan venenatis magna. Vestibulum semper mattis felis sed
                  efficitur. Aliquam erat volutpat. Nunc non purus urna. In hac habitasse platea dictumst. Nullam vitae
                  elementum arcu. Duis vehicula odio sit amet dui aliquam, a ullamcorper ligula eleifend. Vestibulum
                  aliquet tortor sollicitudin blandit finibus. Aenean ipsum libero, sollicitudin volutpat ipsum vitae,
                  dictum consequat magna. Mauris non metus venenatis, semper urna a, dictum augue. Proin hendrerit, diam
                  ac tempor venenatis, erat eros blandit tortor, id vulputate risus mi eget nisl. Fusce consectetur
                  neque vel finibus pellentesque. Duis viverra metus et nibh lobortis ullamcorper. Morbi aliquam est
                  erat. Integer quis leo sagittis, interdum mi finibus, lobortis elit.

                  Vestibulum mollis nulla vel varius suscipit. Nam ultricies interdum condimentum. Etiam sit amet tempor
                  felis. Donec vitae congue tellus. Nunc orci felis, sollicitudin id ipsum et, rhoncus porta urna. Cras
                  ultrices gravida ipsum vel blandit. Duis finibus consequat felis, vitae feugiat ante sodales vitae.
                  Etiam vitae mattis elit. Ut id leo in diam fermentum fringilla sit amet quis neque. Praesent
                  vestibulum lacus ut quam tempus vestibulum quis nec est.

                  Donec gravida sem eu aliquet iaculis. Sed sodales lectus nunc, in semper sem mattis eget. Integer
                  consectetur nulla purus, sit amet sollicitudin risus dapibus molestie. Vivamus a ultricies dui.
                  Vestibulum ullamcorper felis non interdum ornare. Ut elementum convallis est, et condimentum ante
                  varius vitae. Sed facilisis lacus id felis vulputate, a facilisis lorem congue. Vestibulum ultricies
                  enim sit amet placerat iaculis.
                </p>


                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
              </div>
            </div>


            <div id="ecosystem" className={`${styles.contentWrapper}, ${styles.ecosystem}`}>
              <div className={styles.content}>
                <br/>
                <br/>
                <br/>
                <h1 className={styles.title}>Ecosystem</h1>
                <br/>
                <br/>
                <br/>
                <p className={styles.nomargin}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum
                  sit amet lacus non suscipit. Fusce at libero ipsum. Suspendisse id mattis purus. Praesent nunc tellus,
                  bibendum et eleifend eu, accumsan non turpis. Aliquam viverra non nisi a volutpat. Donec et pulvinar
                  mi. Ut convallis diam quis molestie ullamcorper.

                  Phasellus mauris lorem, congue ut ex in, accumsan venenatis magna. Vestibulum semper mattis felis sed
                  efficitur. Aliquam erat volutpat. Nunc non purus urna. In hac habitasse platea dictumst. Nullam vitae
                  elementum arcu. Duis vehicula odio sit amet dui aliquam, a ullamcorper ligula eleifend. Vestibulum
                  aliquet tortor sollicitudin blandit finibus. Aenean ipsum libero, sollicitudin volutpat ipsum vitae,
                  dictum consequat magna. Mauris non metus venenatis, semper urna a, dictum augue. Proin hendrerit, diam
                  ac tempor venenatis, erat eros blandit tortor, id vulputate risus mi eget nisl. Fusce consectetur
                  neque vel finibus pellentesque. Duis viverra metus et nibh lobortis ullamcorper. Morbi aliquam est
                  erat. Integer quis leo sagittis, interdum mi finibus, lobortis elit.

                  Vestibulum mollis nulla vel varius suscipit. Nam ultricies interdum condimentum. Etiam sit amet tempor
                  felis. Donec vitae congue tellus. Nunc orci felis, sollicitudin id ipsum et, rhoncus porta urna. Cras
                  ultrices gravida ipsum vel blandit. Duis finibus consequat felis, vitae feugiat ante sodales vitae.
                  Etiam vitae mattis elit. Ut id leo in diam fermentum fringilla sit amet quis neque. Praesent
                  vestibulum lacus ut quam tempus vestibulum quis nec est.

                  Donec gravida sem eu aliquet iaculis. Sed sodales lectus nunc, in semper sem mattis eget. Integer
                  consectetur nulla purus, sit amet sollicitudin risus dapibus molestie. Vivamus a ultricies dui.
                  Vestibulum ullamcorper felis non interdum ornare. Ut elementum convallis est, et condimentum ante
                  varius vitae. Sed facilisis lacus id felis vulputate, a facilisis lorem congue. Vestibulum ultricies
                  enim sit amet placerat iaculis.

                  Pellentesque sagittis elementum aliquam. Etiam et quam id magna ultricies aliquam. Curabitur vitae
                  massa id purus ultricies pretium. In hac habitasse platea dictumst. Vestibulum nunc sapien, commodo
                  vitae justo faucibus, hendrerit iaculis arcu. Pellentesque elementum viverra dolor id elementum.
                  Aliquam erat volutpat. Proin fermentum, est non ultrices pharetra, odio massa gravida arcu, nec
                  lacinia massa purus non neque. Vestibulum hendrerit vestibulum tempus. Ut facilisis, elit non mattis
                  congue, dolor urna laoreet enim, non pulvinar turpis lorem ut libero. Vivamus rhoncus est in augue
                  facilisis, et laoreet dui sodales. Nulla maximus ex lectus, non gravida turpis tincidunt gravida.
                  Suspendisse malesuada, quam non ultricies posuere, erat ante facilisis nisi, iaculis imperdiet nibh
                  elit id augue. Vestibulum id magna mi.

                  Donec feugiat, sem at blandit ornare, lorem velit aliquam lectus, vel luctus nisi tortor ac diam.
                  Etiam sodales mauris at lorem molestie fringilla et a enim. Nunc tincidunt mollis lacus, vel
                  consectetur nunc sollicitudin eget. Donec quis tempor est. Donec pharetra porta augue, non gravida
                  velit viverra vitae. Curabitur facilisis lacus quis consequat vulputate. Vivamus eget bibendum sem.
                  Donec mi est, consequat congue elit at, vulputate porta mi. Quisque id rhoncus dolor.

                  Nulla aliquet, tortor sit amet elementum bibendum, tortor leo malesuada est, sed vestibulum arcu lacus
                  sed lorem. Praesent maximus ligula sed varius ullamcorper. Maecenas ullamcorper elit nec purus
                  ullamcorper, sit amet elementum tortor suscipit. Quisque lobortis ex risus, quis tincidunt lectus
                  pharetra eu. Phasellus iaculis ipsum vel libero molestie hendrerit. Donec id velit sit amet urna
                  condimentum pulvinar ac id odio. Suspendisse consequat odio dapibus nisi ultricies cursus. Etiam
                  laoreet feugiat faucibus. Aenean sagittis pellentesque metus ac vestibulum. Aenean et imperdiet justo.
                  Sed tincidunt nunc massa, a dapibus leo feugiat eget. Donec eget felis quis tortor accumsan aliquet at
                  quis arcu. Vivamus quis porta urna. Suspendisse eget mauris et augue tincidunt finibus non et nibh.
                  Phasellus eu magna eu felis aliquam blandit. Pellentesque lectus lectus, semper eget magna eget,
                  tristique varius mauris.

                  Fusce luctus ante ut auctor euismod. Nullam tellus enim, vulputate quis dignissim id, efficitur eu
                  tortor. Aliquam sed elit ac nibh egestas congue. Nam at sagittis erat. Curabitur interdum volutpat
                  ipsum ut eleifend. Maecenas vitae dui ac turpis ultricies condimentum. Mauris vitae ligula diam.
                  Phasellus fermentum augue mattis leo dictum mollis. Fusce turpis erat, sodales tempus luctus nec,
                  pharetra ac eros. Cras ut arcu non erat hendrerit iaculis. Ut consequat lectus sit amet ex suscipit
                  finibus ut non lorem. Vivamus viverra libero ex, sit amet aliquet nisl mollis id. Aenean iaculis
                  tortor nisi, sit amet finibus dolor dictum at. Phasellus ut urna dignissim, pretium lorem ut, blandit
                  enim. Vivamus at sem est.

                  Donec suscipit bibendum turpis id molestie. Nulla facilisi. Vivamus in quam eget nulla elementum
                  commodo. Pellentesque varius, urna vel eleifend hendrerit, turpis ligula pharetra tellus, sed dapibus
                  nulla ipsum ac turpis. Proin blandit, nisl ultricies sodales congue, metus ipsum pharetra leo, eu
                  facilisis est elit at turpis. Nunc velit nibh, malesuada sed sem at, rutrum euismod metus. Quisque
                  gravida, enim sed vehicula fermentum, libero nisl feugiat erat, eget condimentum justo nulla ac nisl.
                  Integer ullamcorper massa sed lacinia aliquam. Nam eu ex vulputate, luctus sem nec, rhoncus metus.
                  Maecenas dictum interdum efficitur.
                </p>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
              </div>
            </div>


            <div id="phases" className={`${styles.contentWrapper}, ${styles.phases}`}>
              <div className={styles.content}>
                <br/>
                <br/>
                <br/>
                <h1 className={styles.title} id={styles.phasesTitle}>Phases</h1>
                <br/>
                <br/>
                <br/>
                <p className={styles.nomargin}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum
                  sit amet lacus non suscipit. Fusce at libero ipsum. Suspendisse id mattis purus. Praesent nunc tellus,
                  bibendum et eleifend eu, accumsan non turpis. Aliquam viverra non nisi a volutpat. Donec et pulvinar
                  mi. Ut convallis diam quis molestie ullamcorper.

                  Phasellus mauris lorem, congue ut ex in, accumsan venenatis magna. Vestibulum semper mattis felis sed
                  efficitur. Aliquam erat volutpat. Nunc non purus urna. In hac habitasse platea dictumst. Nullam vitae
                  elementum arcu. Duis vehicula odio sit amet dui aliquam, a ullamcorper ligula eleifend. Vestibulum
                  aliquet tortor sollicitudin blandit finibus. Aenean ipsum libero, sollicitudin volutpat ipsum vitae,
                  dictum consequat magna. Mauris non metus venenatis, semper urna a, dictum augue. Proin hendrerit, diam
                  ac tempor venenatis, erat eros blandit tortor, id vulputate risus mi eget nisl. Fusce consectetur
                  neque vel finibus pellentesque. Duis viverra metus et nibh lobortis ullamcorper. Morbi aliquam est
                  erat. Integer quis leo sagittis, interdum mi finibus, lobortis elit.

                  Vestibulum mollis nulla vel varius suscipit. Nam ultricies interdum condimentum. Etiam sit amet tempor
                  felis. Donec vitae congue tellus. Nunc orci felis, sollicitudin id ipsum et, rhoncus porta urna. Cras
                  ultrices gravida ipsum vel blandit. Duis finibus consequat felis, vitae feugiat ante sodales vitae.
                  Etiam vitae mattis elit. Ut id leo in diam fermentum fringilla sit amet quis neque. Praesent
                  vestibulum lacus ut quam tempus vestibulum quis nec est.
                </p>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
              </div>
            </div>


            <div id="team" className={`${styles.contentWrapper}, ${styles.team}`}>
              <div className={styles.content}>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 className={styles.title} id={styles.teamTitle}>Team</h1>
                <br/>
                <br/>
                <br/>
                <p className={styles.nomargin}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum
                  sit amet lacus non suscipit. Fusce at libero ipsum. Suspendisse id mattis purus. Praesent nunc tellus,
                  bibendum et eleifend eu, accumsan non turpis. Aliquam viverra non nisi a volutpat. Donec et pulvinar
                  mi. Ut convallis diam quis molestie ullamcorper.

                  Phasellus mauris lorem, congue ut ex in, accumsan venenatis magna. Vestibulum semper mattis felis sed
                  efficitur. Aliquam erat volutpat. Nunc non purus urna. In hac habitasse platea dictumst. Nullam vitae
                  elementum arcu. Duis vehicula odio sit amet dui aliquam, a ullamcorper ligula eleifend. Vestibulum
                  aliquet tortor sollicitudin blandit finibus. Aenean ipsum libero, sollicitudin volutpat ipsum vitae,
                  dictum consequat magna. Mauris non metus venenatis, semper urna a, dictum augue. Proin hendrerit, diam
                  ac tempor venenatis, erat eros blandit tortor, id vulputate risus mi eget nisl. Fusce consectetur
                  neque vel finibus pellentesque. Duis viverra metus et nibh lobortis ullamcorper. Morbi aliquam est
                  erat. Integer quis leo sagittis, interdum mi finibus, lobortis elit.

                </p>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
              </div>
            </div>

            <div id="social" className={`${styles.contentWrapper}, ${styles.social}`}>
              <div className={styles.content}>
                <br/>
                <br/>
                <br/>
                <h1 className={styles.title} id={styles.socialTitle}>Socials</h1>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <Row>
                  <Col className={styles.socialLogoWrapper}
                       xl="3"
                       sm="6">
                    <a target="_blank"
                       rel="noopener noreferrer"
                       href="https://t.me/cardamonannouncements">
                      <img className={styles.logoImage} src="/logos/telegram-logo.svg"/>
                      <h4>Telegram Channel</h4>
                    </a>
                  </Col>

                  <Col className={styles.socialLogoWrapper}
                       xl="3"
                       sm="6">
                    <a target="_blank"
                       rel="noopener noreferrer"
                       href="https://t.me/cardamonofficial">
                      <img className={styles.logoImage} src="/logos/telegram-logo.svg"/>
                      <h4>Telegram Group</h4>
                    </a>
                  </Col>

                  <Col className={styles.socialLogoWrapper}
                       xl="3"
                       sm="6">
                    <a target="_blank"
                       rel="noopener noreferrer"
                       href="https://reddit.com/r/cardamon">
                      <img className={styles.logoImage} src="/logos/reddit-logo2.svg"/>
                      <h4>Reddit</h4>
                    </a>
                  </Col>

                  <Col className={styles.socialLogoWrapper}
                       xl="3"
                       sm="6">
                    <a target="_blank"
                       rel="noopener noreferrer"
                       href="https://twitter.com/digitalcardamon">
                      <img className={styles.logoImage} src="/logos/twitter-logo2.svg"/>
                      <h4>Twitter</h4>
                    </a>
                  </Col>
                </Row>
              </div>
            </div>

            <div id="contact" className={`${styles.contentWrapper}, ${styles.contact}`}>
              <div className={styles.content}>
                <br/>
                <br/>
                <br/>
                <h1 className={styles.title} id={styles.contactTitle}>Stay in contact</h1>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <Row>
                  <Col xl="10"
                       sm="6">
                    <Label style={{marginBottom: "10px"}}>Sign up to stay up
                      to date</Label>
                  </Col>
                  <Col xl="2"
                       sm="6"></Col>
                </Row>

                <Row>
                  <Col xl="10"
                       sm="6">
                    <Input type="email" className="form-control" aria-describedby="emailHelp"
                           placeholder="Enter email"/>
                  </Col>
                  <Col style={{float: "right"}}
                       xl="2"
                       sm="6">
                    <Button size="md" color="success" className={styles.signupButton} block>Sign
                      Up</Button>
                  </Col>
                </Row>

                <Row>
                  <Col xl="10" sm="6">
                    <small id="emailHelp"
                           style={{color: "#f8d79a", textShadow: "none"}}>We will never share your email with anyone
                      else.</small>
                  </Col>
                  <Col xl="2" sm="6"></Col>
                </Row>


                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 style={{fontSize: "3em"}}>We have a bright future</h1>
              </div>
            </div>
          </div>


          <footer className={styles.footer}>
            <ul>
              <li><a href="#">Footer I</a></li>
              <li><a href="#">Footer II</a></li>
              <li><a href="#">Footer III</a></li>
              <li><a href="#">Footer IV</a></li>
            </ul>
          </footer>
        </div>
    )
  }
}

export default Website;
