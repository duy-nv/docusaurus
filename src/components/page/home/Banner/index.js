/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import './styles.css';

 
export default function Banner(props) {
  return (
    <section className="banner-main">
      <div className="banner-main__bg">
        <video autoPlay loop>
          <source src="/media/banner-intro.mp4" type="video/mp4" muted />
        </video>
      </div>
      <div className="banner-main__content">
        <div className="container">
          <h2 className="banner-main__title">We are Sigma OTT</h2>
          <p className="banner-main__sub-title">
            The world leading of video streaming solution
          </p>
          <p className="banner-main__desc">
            <b>Best choice</b> for you
          </p>
        </div>
      </div>
      <div className="banner-main__footer">
        <svg id="more-arrows">
          <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
          <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
          <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
        </svg>
      </div>
    </section>
  );
}
 