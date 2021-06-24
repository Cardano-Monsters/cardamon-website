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

  constructor(props) {
    super(props);

  }

  render() {
    return (
        <>
          <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              centeredSlides={true}
              navigation
              pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="carousel-wrapper" style={{backgroundImage: "url('/carousel/carousel3.png')"}}>
                <h1 className="specialFont" style={{fontSize: "4rem", marginLeft: "4rem", color: "#9b0000"}}>Cardamon</h1>
                <h3 className="specialFont" style={{fontSize: "2rem", marginLeft: "4rem", color: "#810000"}}>NFT monster universe on Cardano blockchain</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel-wrapper" style={{backgroundImage: "url('/carousel/carousel3.png')"}}>
                <h1 className="specialFont" style={{fontSize: "4rem", marginLeft: "4rem", color: "#9b0000"}}>Hello Monke</h1>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="carousel-wrapper" style={{backgroundImage: "url('/carousel/carousel3.png')"}}>
                <h1 className="specialFont" style={{fontSize: "4rem", marginLeft: "4rem"}}>Upcoming</h1>
              </div>
            </SwiperSlide>
          </Swiper>

          <div id="home" className={styles.contentWrapper}>
            <div className={styles.content}>

              <br />



              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p className={styles.nomargin}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum sit amet lacus non suscipit. Fusce at libero ipsum. Suspendisse id mattis purus. Praesent nunc tellus, bibendum et eleifend eu, accumsan non turpis. Aliquam viverra non nisi a volutpat. Donec et pulvinar mi. Ut convallis diam quis molestie ullamcorper.

                Phasellus mauris lorem, congue ut ex in, accumsan venenatis magna. Vestibulum semper mattis felis sed efficitur. Aliquam erat volutpat. Nunc non purus urna. In hac habitasse platea dictumst. Nullam vitae elementum arcu. Duis vehicula odio sit amet dui aliquam, a ullamcorper ligula eleifend. Vestibulum aliquet tortor sollicitudin blandit finibus. Aenean ipsum libero, sollicitudin volutpat ipsum vitae, dictum consequat magna. Mauris non metus venenatis, semper urna a, dictum augue. Proin hendrerit, diam ac tempor venenatis, erat eros blandit tortor, id vulputate risus mi eget nisl. Fusce consectetur neque vel finibus pellentesque. Duis viverra metus et nibh lobortis ullamcorper. Morbi aliquam est erat. Integer quis leo sagittis, interdum mi finibus, lobortis elit.

                Vestibulum mollis nulla vel varius suscipit. Nam ultricies interdum condimentum. Etiam sit amet tempor felis. Donec vitae congue tellus. Nunc orci felis, sollicitudin id ipsum et, rhoncus porta urna. Cras ultrices gravida ipsum vel blandit. Duis finibus consequat felis, vitae feugiat ante sodales vitae. Etiam vitae mattis elit. Ut id leo in diam fermentum fringilla sit amet quis neque. Praesent vestibulum lacus ut quam tempus vestibulum quis nec est.

                Donec gravida sem eu aliquet iaculis. Sed sodales lectus nunc, in semper sem mattis eget. Integer consectetur nulla purus, sit amet sollicitudin risus dapibus molestie. Vivamus a ultricies dui. Vestibulum ullamcorper felis non interdum ornare. Ut elementum convallis est, et condimentum ante varius vitae. Sed facilisis lacus id felis vulputate, a facilisis lorem congue. Vestibulum ultricies enim sit amet placerat iaculis.
               </p>


              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div >


          <div id="social" className={styles.contentWrapper}>
            <div className={styles.content}>
              <br />
              <br />
              <br />
              <h1 className={styles.title} id="social-title">Stay in contact</h1>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              
              <Row>
                <Col xl="3" className="social-logo-wrapper" sm="6">
                  <a target="_blank"
                     rel="noopener noreferrer"
                     href="https://t.me/cardamonannouncements">
                    <img className="logo-image" src="/logos/telegram-logo.svg" />
                    <h4>Telegram Channel</h4>
                  </a>
                </Col>

                <Col xl="3" className="social-logo-wrapper" sm="6">
                  <a target="_blank"
                     rel="noopener noreferrer"
                     href="https://t.me/cardamonofficial">
                    <img className="logo-image" src="/logos/telegram-logo.svg" />
                    <h4>Telegram Group</h4>
                  </a>
                </Col>

                <Col xl="3" className="social-logo-wrapper" sm="6">
                  <a target="_blank"
                     rel="noopener noreferrer"
                     href="https://reddit.com/r/cardamon">
                    <img className="logo-image" src="/logos/reddit-logo2.svg" />
                    <h4>Reddit</h4>
                  </a>
                </Col>

                <Col xl="3" className="social-logo-wrapper" sm="6">
                  <a target="_blank"
                     rel="noopener noreferrer"
                     href="https://twitter.com/digitalcardamon">
                    <img className="logo-image" src="/logos/twitter-logo2.svg" />
                    <h4>Twitter</h4>
                  </a>
                </Col>
              </Row>

              <br />
              <br />
              <br />
              <br />
              <br />

              <Row>
                <Col xl="10" sm="6">
                  <Label className="specialFont"y style={{color: "#9b0000", marginBottom: "10px"}}>Sign up to stay up to date</Label>
                </Col>
                <Col xl="2" sm="6"></Col>
              </Row>

              <Row>
                <Col xl="10" sm="6">
                  <Input type="email" className="form-control" aria-describedby="emailHelp"
                         placeholder="Enter email" />
                </Col>
                <Col xl="2" sm="6" style={{float: "right"}}>
                  <Button size="md" color="success" className="specialFont" className="signup-button" block>Sign Up</Button>
                </Col>
              </Row>

              <Row>
                <Col xl="10" sm="6">
                  <small id="emailHelp" className="form-text specialFont" style={{color: "#131313", textShadow: "none"}}>We will never share your email with anyone else.</small>
                </Col>
                <Col xl="2" sm="6"></Col>
              </Row>


              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1 className="specialFont" style={{fontSize: "3em"}}>We have a bright future</h1>
            </div>
          </div>

          <div id="ecosystem" className={styles.contentWrapper}>
            <div className={styles.content}>
              <br />
              <br />
              <br />
              <h1 className={styles.title}>Ecosystem</h1>
              <br />
              <br />
              <br />
              <p className={styles.nomargin}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum sit amet lacus non suscipit. Fusce at libero ipsum. Suspendisse id mattis purus. Praesent nunc tellus, bibendum et eleifend eu, accumsan non turpis. Aliquam viverra non nisi a volutpat. Donec et pulvinar mi. Ut convallis diam quis molestie ullamcorper.

                Phasellus mauris lorem, congue ut ex in, accumsan venenatis magna. Vestibulum semper mattis felis sed efficitur. Aliquam erat volutpat. Nunc non purus urna. In hac habitasse platea dictumst. Nullam vitae elementum arcu. Duis vehicula odio sit amet dui aliquam, a ullamcorper ligula eleifend. Vestibulum aliquet tortor sollicitudin blandit finibus. Aenean ipsum libero, sollicitudin volutpat ipsum vitae, dictum consequat magna. Mauris non metus venenatis, semper urna a, dictum augue. Proin hendrerit, diam ac tempor venenatis, erat eros blandit tortor, id vulputate risus mi eget nisl. Fusce consectetur neque vel finibus pellentesque. Duis viverra metus et nibh lobortis ullamcorper. Morbi aliquam est erat. Integer quis leo sagittis, interdum mi finibus, lobortis elit.

                Vestibulum mollis nulla vel varius suscipit. Nam ultricies interdum condimentum. Etiam sit amet tempor felis. Donec vitae congue tellus. Nunc orci felis, sollicitudin id ipsum et, rhoncus porta urna. Cras ultrices gravida ipsum vel blandit. Duis finibus consequat felis, vitae feugiat ante sodales vitae. Etiam vitae mattis elit. Ut id leo in diam fermentum fringilla sit amet quis neque. Praesent vestibulum lacus ut quam tempus vestibulum quis nec est.

                Donec gravida sem eu aliquet iaculis. Sed sodales lectus nunc, in semper sem mattis eget. Integer consectetur nulla purus, sit amet sollicitudin risus dapibus molestie. Vivamus a ultricies dui. Vestibulum ullamcorper felis non interdum ornare. Ut elementum convallis est, et condimentum ante varius vitae. Sed facilisis lacus id felis vulputate, a facilisis lorem congue. Vestibulum ultricies enim sit amet placerat iaculis.

                Pellentesque sagittis elementum aliquam. Etiam et quam id magna ultricies aliquam. Curabitur vitae massa id purus ultricies pretium. In hac habitasse platea dictumst. Vestibulum nunc sapien, commodo vitae justo faucibus, hendrerit iaculis arcu. Pellentesque elementum viverra dolor id elementum. Aliquam erat volutpat. Proin fermentum, est non ultrices pharetra, odio massa gravida arcu, nec lacinia massa purus non neque. Vestibulum hendrerit vestibulum tempus. Ut facilisis, elit non mattis congue, dolor urna laoreet enim, non pulvinar turpis lorem ut libero. Vivamus rhoncus est in augue facilisis, et laoreet dui sodales. Nulla maximus ex lectus, non gravida turpis tincidunt gravida. Suspendisse malesuada, quam non ultricies posuere, erat ante facilisis nisi, iaculis imperdiet nibh elit id augue. Vestibulum id magna mi.

                Donec feugiat, sem at blandit ornare, lorem velit aliquam lectus, vel luctus nisi tortor ac diam. Etiam sodales mauris at lorem molestie fringilla et a enim. Nunc tincidunt mollis lacus, vel consectetur nunc sollicitudin eget. Donec quis tempor est. Donec pharetra porta augue, non gravida velit viverra vitae. Curabitur facilisis lacus quis consequat vulputate. Vivamus eget bibendum sem. Donec mi est, consequat congue elit at, vulputate porta mi. Quisque id rhoncus dolor.

                Nulla aliquet, tortor sit amet elementum bibendum, tortor leo malesuada est, sed vestibulum arcu lacus sed lorem. Praesent maximus ligula sed varius ullamcorper. Maecenas ullamcorper elit nec purus ullamcorper, sit amet elementum tortor suscipit. Quisque lobortis ex risus, quis tincidunt lectus pharetra eu. Phasellus iaculis ipsum vel libero molestie hendrerit. Donec id velit sit amet urna condimentum pulvinar ac id odio. Suspendisse consequat odio dapibus nisi ultricies cursus. Etiam laoreet feugiat faucibus. Aenean sagittis pellentesque metus ac vestibulum. Aenean et imperdiet justo. Sed tincidunt nunc massa, a dapibus leo feugiat eget. Donec eget felis quis tortor accumsan aliquet at quis arcu. Vivamus quis porta urna. Suspendisse eget mauris et augue tincidunt finibus non et nibh. Phasellus eu magna eu felis aliquam blandit. Pellentesque lectus lectus, semper eget magna eget, tristique varius mauris.

                Fusce luctus ante ut auctor euismod. Nullam tellus enim, vulputate quis dignissim id, efficitur eu tortor. Aliquam sed elit ac nibh egestas congue. Nam at sagittis erat. Curabitur interdum volutpat ipsum ut eleifend. Maecenas vitae dui ac turpis ultricies condimentum. Mauris vitae ligula diam. Phasellus fermentum augue mattis leo dictum mollis. Fusce turpis erat, sodales tempus luctus nec, pharetra ac eros. Cras ut arcu non erat hendrerit iaculis. Ut consequat lectus sit amet ex suscipit finibus ut non lorem. Vivamus viverra libero ex, sit amet aliquet nisl mollis id. Aenean iaculis tortor nisi, sit amet finibus dolor dictum at. Phasellus ut urna dignissim, pretium lorem ut, blandit enim. Vivamus at sem est.

                Donec suscipit bibendum turpis id molestie. Nulla facilisi. Vivamus in quam eget nulla elementum commodo. Pellentesque varius, urna vel eleifend hendrerit, turpis ligula pharetra tellus, sed dapibus nulla ipsum ac turpis. Proin blandit, nisl ultricies sodales congue, metus ipsum pharetra leo, eu facilisis est elit at turpis. Nunc velit nibh, malesuada sed sem at, rutrum euismod metus. Quisque gravida, enim sed vehicula fermentum, libero nisl feugiat erat, eget condimentum justo nulla ac nisl. Integer ullamcorper massa sed lacinia aliquam. Nam eu ex vulputate, luctus sem nec, rhoncus metus. Maecenas dictum interdum efficitur.

                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean suscipit lacus et nisl malesuada, eget feugiat mauris dictum. Quisque sapien eros, malesuada vitae aliquet id, auctor ac felis. Sed elementum feugiat ligula vel sollicitudin. Aliquam eu turpis eget neque volutpat viverra. Integer suscipit justo facilisis dapibus pretium. Ut id mauris eget lorem elementum feugiat. Maecenas malesuada eros quam, convallis rutrum metus viverra eget. Proin eu vestibulum nunc. Nullam volutpat, sapien ut rutrum sollicitudin, erat sem faucibus lacus, at consectetur felis leo nec nisi. Phasellus nunc elit, viverra ut massa at, condimentum semper mi. Nam elit purus, convallis in quam in, lacinia egestas lectus. Donec non fermentum nisl, a fermentum nunc.

                In sagittis ac eros laoreet mattis. Mauris tincidunt porta justo quis accumsan. Proin metus nulla, auctor vitae nunc id, convallis aliquam dui. Fusce eget turpis non urna varius molestie. Aenean aliquet vel urna a placerat. Fusce ullamcorper arcu eu bibendum malesuada. Cras at laoreet urna. Vestibulum diam eros, tempor vel accumsan in, vestibulum ut risus. Vivamus risus lacus, blandit ac libero sit amet, iaculis malesuada ligula. Aliquam dapibus et neque id volutpat. Praesent venenatis dignissim felis, quis sagittis neque aliquet ac. Mauris a luctus sem, at placerat nisl. Aliquam imperdiet lacus tortor, vitae tincidunt leo molestie non.

                Phasellus elementum pellentesque gravida. Aenean in eros magna. Sed accumsan at sapien a accumsan. In nec eleifend purus. Proin sit amet varius erat. In hac habitasse platea dictumst. Vivamus nec elementum leo, eget tincidunt tellus
              </p>

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>


          <div id="about" className={styles.contentWrapper}>
            <div className={styles.content}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1 className={styles.title}>About</h1>
              <br />
              <br />
              <br />
              <p className={styles.nomargin}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum sit amet lacus non suscipit. Fusce at libero ipsum. Suspendisse id mattis purus. Praesent nunc tellus, bibendum et eleifend eu, accumsan non turpis. Aliquam viverra non nisi a volutpat. Donec et pulvinar mi. Ut convallis diam quis molestie ullamcorper.

                Phasellus mauris lorem, congue ut ex in, accumsan venenatis magna. Vestibulum semper mattis felis sed efficitur. Aliquam erat volutpat. Nunc non purus urna. In hac habitasse platea dictumst. Nullam vitae elementum arcu. Duis vehicula odio sit amet dui aliquam, a ullamcorper ligula eleifend. Vestibulum aliquet tortor sollicitudin blandit finibus. Aenean ipsum libero, sollicitudin volutpat ipsum vitae, dictum consequat magna. Mauris non metus venenatis, semper urna a, dictum augue. Proin hendrerit, diam ac tempor venenatis, erat eros blandit tortor, id vulputate risus mi eget nisl. Fusce consectetur neque vel finibus pellentesque. Duis viverra metus et nibh lobortis ullamcorper. Morbi aliquam est erat. Integer quis leo sagittis, interdum mi finibus, lobortis elit.

                Vestibulum mollis nulla vel varius suscipit. Nam ultricies interdum condimentum. Etiam sit amet tempor felis. Donec vitae congue tellus. Nunc orci felis, sollicitudin id ipsum et, rhoncus porta urna. Cras ultrices gravida ipsum vel blandit. Duis finibus consequat felis, vitae feugiat ante sodales vitae. Etiam vitae mattis elit. Ut id leo in diam fermentum fringilla sit amet quis neque. Praesent vestibulum lacus ut quam tempus vestibulum quis nec est.

                Donec gravida sem eu aliquet iaculis. Sed sodales lectus nunc, in semper sem mattis eget. Integer consectetur nulla purus, sit amet sollicitudin risus dapibus molestie. Vivamus a ultricies dui. Vestibulum ullamcorper felis non interdum ornare. Ut elementum convallis est, et condimentum ante varius vitae. Sed facilisis lacus id felis vulputate, a facilisis lorem congue. Vestibulum ultricies enim sit amet placerat iaculis.

                Pellentesque sagittis elementum aliquam. Etiam et quam id magna ultricies aliquam. Curabitur vitae massa id purus ultricies pretium. In hac habitasse platea dictumst. Vestibulum nunc sapien, commodo vitae justo faucibus, hendrerit iaculis arcu. Pellentesque elementum viverra dolor id elementum. Aliquam erat volutpat. Proin fermentum, est non ultrices pharetra, odio massa gravida arcu, nec lacinia massa purus non neque. Vestibulum hendrerit vestibulum tempus. Ut facilisis, elit non mattis congue, dolor urna laoreet enim, non pulvinar turpis lorem ut libero. Vivamus rhoncus est in augue facilisis, et laoreet dui sodales. Nulla maximus ex lectus, non gravida turpis tincidunt gravida. Suspendisse malesuada, quam non ultricies posuere, erat ante facilisis nisi, iaculis imperdiet nibh elit id augue. Vestibulum id magna mi.

                Donec feugiat, sem at blandit ornare, lorem velit aliquam lectus, vel luctus nisi tortor ac diam. Etiam sodales mauris at lorem molestie fringilla et a enim. Nunc tincidunt mollis lacus, vel consectetur nunc sollicitudin eget. Donec quis tempor est. Donec pharetra porta augue, non gravida velit viverra vitae. Curabitur facilisis lacus quis consequat vulputate. Vivamus eget bibendum sem. Donec mi est, consequat congue elit at, vulputate porta mi. Quisque id rhoncus dolor.

                Nulla aliquet, tortor sit amet elementum bibendum, tortor leo malesuada est, sed vestibulum arcu lacus sed lorem. Praesent maximus ligula sed varius ullamcorper. Maecenas ullamcorper elit nec purus ullamcorper, sit amet elementum tortor suscipit. Quisque lobortis ex risus, quis tincidunt lectus pharetra eu. Phasellus iaculis ipsum vel libero molestie hendrerit. Donec id velit sit amet urna condimentum pulvinar ac id odio. Suspendisse consequat odio dapibus nisi ultricies cursus. Etiam laoreet feugiat faucibus. Aenean sagittis pellentesque metus ac vestibulum. Aenean et imperdiet justo. Sed tincidunt nunc massa, a dapibus leo feugiat eget. Donec eget felis quis tortor accumsan aliquet at quis arcu. Vivamus quis porta urna. Suspendisse eget mauris et augue tincidunt finibus non et nibh. Phasellus eu magna eu felis aliquam blandit. Pellentesque lectus lectus, semper eget magna eget, tristique varius mauris.

                Fusce luctus ante ut auctor euismod. Nullam tellus enim, vulputate quis dignissim id, efficitur eu tortor. Aliquam sed elit ac nibh egestas congue. Nam at sagittis erat. Curabitur interdum volutpat ipsum ut eleifend. Maecenas vitae dui ac turpis ultricies condimentum. Mauris vitae ligula diam. Phasellus fermentum augue mattis leo dictum mollis. Fusce turpis erat, sodales tempus luctus nec, pharetra ac eros. Cras ut arcu non erat hendrerit iaculis. Ut consequat lectus sit amet ex suscipit finibus ut non lorem. Vivamus viverra libero ex, sit amet aliquet nisl mollis id. Aenean iaculis tortor nisi, sit amet finibus dolor dictum at. Phasellus ut urna dignissim, pretium lorem ut, blandit enim. Vivamus at sem est.

                Donec suscipit bibendum turpis id molestie. Nulla facilisi. Vivamus in quam eget nulla elementum commodo. Pellentesque varius, urna vel eleifend hendrerit, turpis ligula pharetra tellus, sed dapibus nulla ipsum ac turpis. Proin blandit, nisl ultricies sodales congue, metus ipsum pharetra leo, eu facilisis est elit at turpis. Nunc velit nibh, malesuada sed sem at, rutrum euismod metus. Quisque gravida, enim sed vehicula fermentum, libero nisl feugiat erat, eget condimentum justo nulla ac nisl. Integer ullamcorper massa sed lacinia aliquam. Nam eu ex vulputate, luctus sem nec, rhoncus metus. Maecenas dictum interdum efficitur.

                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean suscipit lacus et nisl malesuada, eget feugiat mauris dictum. Quisque sapien eros, malesuada vitae aliquet id, auctor ac felis. Sed elementum feugiat ligula vel sollicitudin. Aliquam eu turpis eget neque volutpat viverra. Integer suscipit justo facilisis dapibus pretium. Ut id mauris eget lorem elementum feugiat. Maecenas malesuada eros quam, convallis rutrum metus viverra eget. Proin eu vestibulum nunc. Nullam volutpat, sapien ut rutrum sollicitudin, erat sem faucibus lacus, at consectetur felis leo nec nisi. Phasellus nunc elit, viverra ut massa at, condimentum semper mi. Nam elit purus, convallis in quam in, lacinia egestas lectus. Donec non fermentum nisl, a fermentum nunc.

                In sagittis ac eros laoreet mattis. Mauris tincidunt porta justo quis accumsan. Proin metus nulla, auctor vitae nunc id, convallis aliquam dui. Fusce eget turpis non urna varius molestie. Aenean aliquet vel urna a placerat. Fusce ullamcorper arcu eu bibendum malesuada. Cras at laoreet urna. Vestibulum diam eros, tempor vel accumsan in, vestibulum ut risus. Vivamus risus lacus, blandit ac libero sit amet, iaculis malesuada ligula. Aliquam dapibus et neque id volutpat. Praesent venenatis dignissim felis, quis sagittis neque aliquet ac. Mauris a luctus sem, at placerat nisl. Aliquam imperdiet lacus tortor, vitae tincidunt leo molestie non.

                Phasellus elementum pellentesque gravida. Aenean in eros magna. Sed accumsan at sapien a accumsan. In nec eleifend purus. Proin sit amet varius erat. In hac habitasse platea dictumst. Vivamus nec elementum leo, eget tincidunt tellus.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus tempor vehicula. Suspendisse feugiat arcu ligula, id gravida enim vulputate nec. Fusce tortor orci, placerat at tempus eleifend, iaculis sit amet magna. Donec id vulputate orci, at ornare dui. Maecenas cursus felis vel massa lacinia, quis aliquet risus eleifend. Sed feugiat sed ex non bibendum.

              </p>

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </>


    )
  }

}

export default Website;