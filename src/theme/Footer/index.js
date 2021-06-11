/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable header/header */
import React from 'react';

import Link from '@docusaurus/Link';
import MailingListForm from '@site/src/components/other/MailingListForm';
// import SVG from 'react-inlinesvg';

import classnames from 'classnames';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage, {Props as ThemedImageProps} from '@theme/ThemedImage';
import styles from './styles.module.css';

function FooterLink({to, href, label, prependBaseUrlToHref, ...props}) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {forcePrependBaseUrl: true});
  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {label}
    </Link>
  );
}

const FooterLogo = ({sources, alt}) => (
  <ThemedImage className="footer__logo" alt={alt} sources={sources} />
);

function Footer() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {themeConfig = {}} = siteConfig;
  const {footer} = themeConfig;

  const {copyright, links = [], logo = {}} = footer || {};
  const logoUrl = useBaseUrl(logo.src);

  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };

  if (!footer) {
    return null;
  }

  return (
    <footer
      className={classnames('footer', {
        'footer--dark': footer.style === 'dark',
      })}>
      <div className="container">
        {links && links.length > 0 && (
          <div className="row footer__links">
            <div className="col col--5 footer__col">
              <div className="margin-bottom--md">
                <img className="navbar__logo" src="/img/logo_sigma.svg" alt="Vector" width="150" height="auto" />
              </div>
              <div className="margin-bottom--md">
                <MailingListForm description={false} width="150px" />
              </div>
              <div>
                <a
                  href="https://twitter.com/timberdotio"
                  target="_blank" rel="noreferrer">
                    <i className="feather icon-twitter" alt="Vector's Twitter" />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  href="https://chat.vector.dev"
                  target="_blank" rel="noreferrer">
                    <i className="feather icon-message-circle" alt="Vector's Chat" />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/timberio/vector"
                  target="_blank" rel="noreferrer">
                    <i className="feather icon-github" alt="Vector's Github Repo" />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://vector.dev/blog/atom.xml"
                  target="_blank" rel="noreferrer">
                    <i className="feather icon-rss" alt="Vector's RSS feed" />
                </a>
              </div>
            </div>
            {links.map((linkItem, i) => (
              <div key={i} className="col footer__col">
                {linkItem.title != null ? (
                  <h4 className="footer__title">{linkItem.title}</h4>
                ) : null}
                {linkItem.items != null &&
                Array.isArray(linkItem.items) &&
                linkItem.items.length > 0 ? (
                  <ul className="footer__items">
                    {linkItem.items.map((item, key) =>
                      item.html ? (
                        <div
                          key={key}
                          dangerouslySetInnerHTML={{
                            __html: item.html,
                          }}
                        />
                      ) : (
                        <li key={item.href || item.to} className="footer__item">
                          <FooterLink {...item} />
                        </li>
                      ),
                    )}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        )}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && (logo.src || logo.srcDark) && (
              <div className="margin-bottom--sm">
                {logo.href ? (
                  <Link href={logo.href} className={styles.footerLogoLink}>
                    <FooterLogo alt={logo.alt} sources={sources} />
                  </Link>
                ) : (
                  <FooterLogo alt={logo.alt} sources={sources} />
                )}
              </div>
            )}
            {copyright ? (
              <div
                className="footer__copyright"
                // Developer provided the HTML, so assume it's safe.
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: copyright,
                }}
              />
            ) : null}
          </div>
        )}
      </div>
    </footer>
  );
}
 
export default Footer;
 