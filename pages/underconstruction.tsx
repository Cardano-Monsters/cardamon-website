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
              <div className={styles.blurryBox}>
                <div className={styles.content}>
                  <br/>
                  <br/>
                  <br/>
                  <h1 className={styles.title}>Ecosystem</h1>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <Row>
                    <Col xl="12" style={{marginBottom: "3em"}}>
                      <h4>Staking:</h4>
                      <p>
                        Staking will be the first released component of our ecosystem and building a solid base for new users.
                        <br />
                        Everyone can stake their CMON for staking rewards as tokens or NFTs.
                        <br />
                        (distributed by randomness, the probability is affected by the amount of staked tokens)
                        <br />
                        <br />
                        Before other components are launched, this makes it possible for early supporters to be rewarded for holding and using their tokens.
                      </p>
                    </Col>

                    <Col xl="12" style={{marginBottom: "3em"}}>
                      <h4>Shop</h4>
                      <p>
                        In the shop user will be able to buy <u>Boosters</u> as well as <u>Spirit Cards</u>.
                        <br />
                        Boosters rely on a Smart Contract, buyers will pay CMON to and get random distributed NFT monsters in return. <br /> Distribution is heavenly affected by a card's rarity.
                        <br />
                        <br />
                        Spirit Cards, in contrast to our normal cards, which are distributed by a specific rarity percentage, are highly rare Spirit versions of existing monsters and their total amount is limited by a monster's rarity.
                        <br />
                        These Spirit versions will be able to trade for CMON directly in the shop, which means you will be able to buy a specific card but the card price will be respectable.
                        <br />
                        Paid tokens will be split into 20% returning to our ecosystem used as staking rewards and 80% going to the artwork artist.
                        <br />
                        Spirit Version feature is a way to directly support favored artwork and their artists, which will motivate artists supporting our project by providing artwork.
                      </p>
                    </Col>

                    <Col xl="12" style={{marginBottom: "3em"}}>
                      <h4>Inventory</h4>
                      <p>
                        Even though Cardano wallets will support NFTs in the future meaning your monsters will be accessible in Daedalus/Yoroi but will offer users a clear and advanced overview of their monsters.
                        <br />
                        The Inventory allows users to easily access their Cardamons and information (as statistics, artwork artists, mint date, etc.) about them.
                        <br />
                        It comes alongside the <u>Gallery</u>, which is quite similar but instead of just showing owned monsters all Cardamons will be listed.
                        <br />
                        This some kind of Wikipedia of Cardamons.
                      </p>
                    </Col>

                    <Col xl="12" style={{marginBottom: "3em"}}>
                      <h4>Marketplace</h4>
                      <p>
                        The marketplace will be the central Dapp to trade your monster NFTs with other players for CMON.
                        <br />
                        <br />
                        While it will be possible to trade Cardano NFTs on every NFT Marketplace on the Cardano Blockchain our marketplace will be more adapted to Cardamon.
                        <br />
                        This means monster stats and other information will be shown.
                        <br />
                        It should also be possible to transfer the game progress of your Cardamons (for example, different games allow you to level up your Cardamon by training).
                        Later we plan to support other sale formats as auctions where user can sell their Cardamon to the highest bidder.
                      </p>
                    </Col>

                    <Col xl="12" style={{marginBottom: "3em"}}>
                      <h4>API & Library</h4>
                      <p>
                        We plan to build a library to access most of our ecosystem functions.
                        <br />
                        This library will be a wrapper for more complicated blockchain requests as well as requests to our ecosystem Dapps.
                        <br />
                        We will also define protocol specifications so developers can build their own libraries and preferred languages.
                      </p>
                    </Col>

                    <Col xl="12" style={{marginBottom: "3em"}}>
                      <h4>Games</h4>
                      <p>
                        Games are an important part of our ecosystem as you can use your owned NFT monsters to play with.
                        <br />
                        Our first game will be developed alongside the library development so both can benefit from each other.
                        <br />
                        <br />
                        Later it should be possible to build very different types of games, e.g. card games, adventure games, RPG games, etc. but we plan our first game will be a card game using the original card artworks and their stats.
                        <br />
                        <br />
                        Other games may use NFT monsters as evidence of ownership but using new abstract graphics for rendering your monsters (for example, monsters can be represented by simple 8-bit graphics, specially created for an 8-bit styled game).
                        <br />
                        It is also possible to extend monsters in one game by required properties, which shall be highly affected by original card statistics.
                      </p>
                    </Col>

                  </Row>

                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                </div>
              </div>
            </div>


            <div id="phases" className={`${styles.contentWrapper}, ${styles.phases}`}>
              <div className={styles.blurryBox}>
                <div className={styles.content}>
                  <br/>
                  <br/>
                  <br/>
                  <h1 className={styles.title} id={styles.phasesTitle}>Phases</h1>
                  <br/>
                  <br/>
                  <br/>

                  <Row>
                    <Col lg="12" xl="6">
                      <img src="/phases/1-prelaunch-phase.png" />
                    </Col>
                    <Col lg="12" xl="6">
                      <br />
                      <br />
                      <p className={styles.nomargin}>
                        We have been thinking about a clear timeline several times but since there are many (still unknown) factors (as the outstanding Smart Contracts support of Cardano) we cannot estimate the progress of this project with good conscience.
                        <br />
                        For that reason instead of classifying important milestones into time-specific points, we categorize them into different phases.
                        <br />
                        The current phase is the "Pre-Launch Phase".
                        <br />
                        This phase is not interesting for the normal user since we mainly plan this project and organize tasks but if you are an early supporter of our idea it could be interesting following this.
                        <br />
                        We will launch a website, socials as well as official documents about the project.
                        <br />
                        This phase ends with creating the required resources (token minting policy) to create the token of this project, CMON.
                      </p>
                    </Col>
                  </Row>

                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <Row>
                    <Col lg="12" xl="6">
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
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <img src="/phases/2-token-phase.png" />
                    </Col>
                    <Col lg="12" xl="6">
                      <p>
                        After minting CMON the "Token Phase" officially starts.
                        <br />
                        As the name suggests this phase is all about our token. We will start celebrating the launch and start marketing directly followed by offering a private funding sale (5% of all tokens).
                        <br />
                        When funding is successfully done we will start preparations for the next phase and core of this project: creating our first Cardamons.
                        <br />
                        In detail, this means we will think about creature prototypes, creating the artworks, define their statistics and finalize them.
                        <br />This task may sound trivial but since balanced monster statistics are highly required for satisfied customers and therefore is one of our most important aims this requires a lot of work.
                        <br />
                        When the first Cardamon card artworks are finished we will intensify our marketing efforts by advertising our first Cardamon announcement.
                        <br />
                        Meanwhile, we will continue creating new monsters, which is part of our marketing strategy, as releasing regular updates on new monsters joining our universe seems highly interesting for eventually new members.
                        <br />
                        We also plan some token giveaways.
                        <br />
                        After the first announced monsters and a growing community, we will start offering our token in a public sale (20% of all tokens).
                        <br />
                        For the majority of people, this will be the final launch of the token so we expect a high interest for this milestone.
                      </p>

                      <br />
                      <br />
                      <p>
                        As minting our monsters as NFTs requires smart contracts, which have not launched on Cardano yet, we cannot process two very important milestones of this phase until Smart Contracts are supported.
                        <br />
                        When the Plutus Update has launched we will start Smart Contract development, which is essential for launching for all subsequent development.
                        <br />
                        We will do this alongside creating a tool to easily mint future monster NFTs.
                        <br />
                        We also plan to introduce staking to you (in a very basic way. Later this will be easily accessible in the future launched ecosystem), where you will be able to earn staking rewards as tokens as well as NFTs.
                      </p>
                    </Col>
                  </Row>
                  
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <Row>
                    <Col lg="12" xl="6">

                      <img src="/phases/3-card-phase.png" />
                    </Col>
                    <Col lg="12" xl="6">

                      <br />
                      <p>
                        When all this hard work is done we will officially introduce the project to the "Card Phase".
                        <br />
                        This is when it gets really interesting.
                        <br />
                        It's all about new cards and we will do some major efforts to present some interesting partnerships to you.
                        <br />
                        In this phase we will also develop and launch our Shop Dapp, to complement NFT earning methods.
                        <br />
                        In the shop, users will be able to trade Cardamon Boosters for CMON.
                        <br />
                        Later we will add other features to the shop.
                        <br />
                        Alongside the shop, we will work on the Inventory Dapp.
                        <br />
                        We plan to launch both at the same time as our first modules of our ecosystem introducing you to the "Ecosystem Phase".
                      </p>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="12" xl="6">
                      <br />
                      <img src="/phases/4-ecosystem-phase.png" />
                    </Col>
                    <Col lg="12" xl="6">
                      <br />
                      <br />
                      <p>
                        The main aim of the “Ecosystem Phase" is to continue the development of our ecosystem.
                        <br />
                        This means we will work on upcoming issues but also launching new features.
                        <br />
                        We plan to introduce you "Spirit Cards". In contrast to our normal cards, which are distributed by a specific rarity percentage, these highly rare Spirit versions of existing monsters are limited by a total amount specified by a monster's rarity.
                        <br />
                        These Spirit versions will be able to trade for CMON directly in the shop, which means you will be able to buy a specific card but the card price will be respectable.
                        <br />
                        Paid tokens will be split into 20% returning to our ecosystem used as staking rewards and 80% going to the artwork artist.
                        <br />
                        Spirit Version feature is a way to directly support favored artwork and their artists, which will motivate artists supporting our project by providing artwork.
                        <br />
                        We also plan a marketplace to easily trade cards for CMON with other users. Later we plan to introduce auctions to you as well.
                        <br />
                        <br />
                        As preparation for the next milestone and the next phase, we will start API development to easily develop Cardamon ecosystem applications. After basic functionality is built we will start using it by beginning the development of our first game.
                      </p>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="12" xl="6">
                      <br />
                      <img src="/phases/5-game-phase.png" />
                    </Col>
                    <Col lg="12" xl="6">
                      <br />
                      <br />
                      <p>
                        When the first playable version is available we will release this as a beta version opening to the "Game Phase".
                        <br />
                        Currently, we plan our first game is a card game with self-designed rules you will be using your monster NFTs to play with.
                        <br />
                        <br />
                        Later we will release other games for example a low-bit graphics game where you and your monsters can explore, fight other monsters, earn NFT rewards, and battle with other players.
                        <br />
                        Another milestone of this phase is the launch of the API as well as libraries to third-party developers.
                        <br />
                        This will allow other developers to build apps and games using our ecosystem.
                        <br />
                        This will be the beginning of a more and more growing universe of Cardamon.
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>


            <div id="team" className={`${styles.contentWrapper}, ${styles.team}`}>
              <div className={styles.blurryBox}>
                <div className={styles.content}>
                <br/>
                <br/>
                <br/>
                <h1 className={styles.title} id={styles.teamTitle}>Team</h1>
                <br/>
                <br/>
                <br/>
                <Row>
                  <Col xs="0" xl="2"></Col>
                  <Col xs="12" xl="8">
                    <h3>Currently this project is in a very early state.</h3>
                    <h5 >
                      <br />
                      We are already different people from all around the world working hard to present Cardamons to you soon
                      <br /> but since task allocation is really dynamic and we are still looking for more team members at this moment team member information are very limited at this moment.
                      <br />
                      We already have some team members from all around the world but we also need some more dedicated team members
                      <br />
                      <br />
                      If you are interested in joining our project (for example as social community member or artists)
                      <br />
                      please send us a mail describing you and how you will support this project to
                      <a href="mailto:jobs@cardamon.digital">jobs@cardamon.digital</a>
                    </h5>
                  </Col>
                  <Col xs="0" xl="2"></Col>
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
                <br/>
              </div>
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

          </div>


          <footer className={styles.footer}>
            <Row>
              <Col xs="0" xl="4"></Col>
              <Col xs="12" xl="1">
                <ul className={styles.dropDown} style={{minWidth: "120px"}}>
                  <li>Resources</li>
                  <li><a href="#">Whitepaper</a></li>
                  <li><a href="#">Roadmap</a></li>
                </ul>
              </Col>
              <Col xs="12" xl="1"><li><a href="#">Footer II</a></li></Col>
              <Col xs="12" xl="1"><li><a href="#">Footer III</a></li></Col>
              <Col xs="12" xl="1"><li><a href="#">Footer IV</a></li></Col>
              <Col xs="0" xl="4"></Col>
            </Row>
          </footer>
        </div>
    )
  }
}

export default Website;
