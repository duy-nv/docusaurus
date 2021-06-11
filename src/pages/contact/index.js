/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @format
 */
/* eslint-disable header/header */
import React from 'react';
import Layout from '@theme/Layout';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import styles from './community.module.css';

function Contact() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {metadata: {team}} = siteConfig.customFields;

  return (
    <Layout title="Contact" description="Contact the Vector and Timber.io team">
      <header className="hero">
        <div className="container container--fluid">
          <h1>Contact</h1>
          <div className="hero__subtitle">
            SigmaOTT is a <a href="https://sigmaott.com">Timber.io</a> open-source product. You can contact the Sigma &amp; Timber team using any of the options below.
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <div className="row">
              <div className="col">
                <a href="mailto:hi@timber.io" className="panel panel--link text--center">
                  <div className="panel--icon">
                    <i className="feather icon-mail" />
                  </div>
                  <div className="panel--title">hi@timber.io</div>
                  <div className="panel--description">Shoot us an email</div>
                </a>
              </div>
              <div className="col">
                <a href="https://twitter.com/timberdotio" target="_blank" className="panel panel--link text--center" rel="noreferrer">
                  <div className="panel--icon">
                    <i className="feather icon-twitter" />
                  </div>
                  <div className="panel--title">Twitter @timberdotio</div>
                  <div className="panel--description">
                    Tweet at us. Use the <code>#vector</code> hashtag.
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="https://gitter.im/thudo-multimedia-jsc/community" target="_blank" className="panel panel--link text--center" rel="noreferrer">
                  <div className="panel--icon">
                    <i className="feather icon-message-circle" />
                  </div>
                  <div className="panel--title">Chat</div>
                  <div className="panel--description">Join our chat</div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Contact;