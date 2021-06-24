import React from "react";

import App from "next/app";
import Head from "next/head";

import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/index.css";


class CardamonApp extends App {

  render() {
    const { Component, pageProps } = this.props;
    return (
        <>
          <Head>
              <title>Cardamon - NFT monsters on Cardano blockchain in their own ecosystem</title>
              <meta name="description" content="Cardamon - NFT monsters on Cardano blockchain in their own ecosystem" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
              <link rel="manifest" href="/favicon/site.webmanifest" />

              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
              <link href="https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap" rel="stylesheet" />

              <meta name="viewport" content="width=1400, initial-scale=0.66" />

          </Head>

            <header>
                <div className="navigation">
                    <ul >
                        <li><a href="/">Home</a></li>
                        <li><a href="#social">Stay in contact</a></li>
                        <li><a href="#ecosystem">Ecosystem</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>
            </header>
            <div className="wrapper">
                <Component {...pageProps} />
            </div>
            <footer>
                <ul>
                    <li><a href="#">Footer I</a></li>
                    <li><a href="#">Footer II</a></li>
                    <li><a href="#">Footer III</a></li>
                    <li><a href="#">Footer IV</a></li>
                </ul>
            </footer>
        </>
    );
  }
}

export default CardamonApp;