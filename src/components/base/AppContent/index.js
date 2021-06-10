/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import './styles.css';

export default function AppContent({ id, title, description, content }) {
  return (
    <section className="app-content">
      <div className="container">
        <div className="app-content__heading" id="features">
          <h2>
            <a aria-hidden="true" tabIndex="-1" className="anchor" id={ id } />
            <a aria-hidden="true" tabIndex="-1" className="hash-link" href={ `#${id}` } title="Direct link to heading">#</a>{ title }</h2>
          <p className="app-content__heading-desc">{ description }</p>
        </div>
        <div className="app-content__content">{ content }</div>
      </div>
    </section>
  );
}
 