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

import styles from '../styles/UnderConstruction.module.css'

class UnderConstruction extends React.Component {

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

                    <meta name="viewport" content="width=800, initial-scale=0.4"/>
                </Head>

                <div className={`${styles.contentWrapper}, ${styles.social}`}>
                    <div className={styles.blurryBox}>
                        <div className={styles.content}>
                        <br/>
                        <br/>
                        <br/>
                        <h1 className={styles.title} id={styles.socialTitle} style={{fontSize: "4em", color: "#ce0000"}}>Cardamon</h1>
                        <br />
                        <h2 className={styles.title} style={{fontSize: "3em"}} id={styles.socialTitle}>An upcoming universe of Cardano monster NFTs</h2>
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

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div style={{textAlign: "center"}}>
                            <h2 style={{color: "#FF5E13"}}>Currently this website is under development</h2>
                            <h4>If you would like to stay up to date join one of our social media</h4>
                        </div>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div>
                            <h4 style={{textAlign: "center", color: "#ce0000", textShadow: "1px"}}>Currently we are looking for some new team members. If you are interested in joining, please send us a mail describing yourself and how you would help us</h4>
                            <h5 style={{textAlign: "center", color: "#131313"}}><a href="mailto:join@cardamon.digital">join@cardamon.digital</a></h5>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default UnderConstruction;
