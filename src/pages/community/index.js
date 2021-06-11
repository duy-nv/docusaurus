/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import React from 'react';

import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
// eslint-disable-next-line import/no-unresolved
import MailingListForm from '@site/src/components/other/MailingListForm';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const AnchoredH2 = Heading('h2');

function Community() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {metadata: {team}} = siteConfig.customFields;

  return (
    <Layout title="Community" description="Join the Vector community. Connect with the core Vector team and other Vector users.">
      <header className="hero">
        <div className="container container--fluid">
          <h1>Vector Community</h1>
          <MailingListForm buttonClass="highlight" center size="lg" />
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <AnchoredH2 id="connect">Connect</AnchoredH2>

            <div className="row">
              <div className="col">
                <a href="https://gitter.im/thudo-multimedia-jsc/community" target="_blank" className="panel panel--link text--center" rel="noreferrer">
                  <div className="panel--icon">
                    <i className="feather icon-message-circle" />
                  </div>
                  <div className="panel--title">Chat</div>
                  <div className="panel--description">Ask questions and get help</div>
                </a>
              </div>
              <div className="col">
                <a href="https://www.facebook.com/profile.php?id=100007974859161" target="_blank" className="panel panel--link text--center" rel="noreferrer">
                  <div className="panel--icon">
                    <i className="feather icon-twitter" />
                  </div>
                  <div className="panel--title">Facebook</div>
                  <div className="panel--description">
                    Stay up-to-date with <code>#thudojsc</code></div>
                </a>
              </div>
              <div className="col">
                <a href="https://github.com/thudo-jsc" target="_blank" className="panel panel--link text--center" rel="noreferrer">
                  <div className="panel--icon">
                    <i className="feather icon-github" />
                  </div>
                  <div className="panel--title">Github Thudo jsc</div>
                  <div className="panel--description">Issues, code, and development</div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <section>
          <div className="container">
            <AnchoredH2 id="contribute">Contribute</AnchoredH2>

            <p>
              Vector is <a href="https://github.com/timberio/vector">open-source</a> and welcomes contributions. A few guidelines to help you get started:
            </p>
            <ol>
              <li>Read our <a href="https://github.com/timberio/vector/blob/master/CONTRIBUTING.md">contribution guide</a>.</li>
              <li>Start with <a href="https://github.com/timberio/vector/contribute">good first issues</a>.</li>
              <li>Join our <a href="https://chat.vector.dev">chat</a> if you have any questions.</li>
            </ol>
          </div>
        </section> */}
        <section>
          <div className="container">
            <AnchoredH2 id="team">Meet The Team</AnchoredH2>

            <div className={styles.coreTeam}>
               {team.map((member, idx) => (
                  <div key={idx} className="avatar avatar--vertical">
                    <img
                      className="avatar__photo avatar__photo--xl"
                      src={member.avatar}
                      alt="avatar"
                    />
                    <div className="avatar__intro">
                      <h4 className="avatar__name">{member.name}</h4>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Community;