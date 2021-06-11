/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import useTheme from '@theme/hooks/useTheme';
// import configs from '@site/docusaurus.config';
import 'rapidoc';
import './styles.module.css';

function AppSpec(props) {

  const { isDarkTheme } = useTheme();
  const theme = isDarkTheme ? 'dark' : 'light';
  
  // const context = useDocusaurusContext();
  const specFolder = 'specs'
  const { specUrl } = props;
  const specPath = `../../${specFolder}/${specUrl}`
  // const [SpecContent, setSpecContent ] = useState(null)

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     // eslint-disable-next-line global-require
  //     import('rapidoc').then(rapid => {
  //       setSpecContent(
  //         <rapi-doc
  //           spec-url = { specPath }
  //           render-style = "focused"
  //           style = {{ width: "100%" }}
  //           theme = { theme }
  //           load-fonts = "true"
  //           show-header = "false"
  //           allow-authentication	= "false"
  //           allow-spec-url-load	= "false"
  //           allow-spec-file-load = "false"
  //           allow-server-selection	= "false"
  //           default-api-server = '/'
  //           allow-try	= "false"
  //           font-size = "large"
  //         />
  //       )
  //     })
  //     // .then(rapid => setSpecContent(() => rapid.default))
  //   }
  // })
  // // console.log('SpecContent', SpecContent)
  // return SpecContent

  // if (typeof window !== 'undefined') {
  //   import('rapidoc')
  // }
  return (
    <div>Damn</div>
  )
  // return (
  //   <rapi-doc
  //     spec-url = { specPath }
  //     render-style = "focused"
  //     style = {{ width: "100%" }}
  //     theme = { theme }
  //     load-fonts = "true"
  //     show-header = "false"
  //     allow-authentication	= "false"
  //     allow-spec-url-load	= "false"
  //     allow-spec-file-load = "false"
  //     allow-server-selection	= "false"
  //     default-api-server = '/'
  //     allow-try	= "false"
  //     font-size = "large"
  //     />
  // )
}

export default AppSpec;