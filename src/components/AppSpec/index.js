/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
// eslint-disable-next-line header/header
import React from 'react';
import 'rapidoc';
import useTheme from '@theme/hooks/useTheme'
import './styles.module.css';
import { readFile } from '@site/src/utils/read-file'

// import globalStyles from '@site/src/css/custom.module.css'

function AppSpec(props) {

  const { isDarkTheme } = useTheme()
  const theme = isDarkTheme ? 'dark' : 'light'
  
  const { specUrl } = props

  const specRoot = '/specs'

  // const content = readFile(`${specRoot}${specUrl}`)

  // console.log('fullSpecUrl', content)

  // if (!fullSpecUrl || !fs.existsSync(fullSpecUrl)) {
  //   return null;
  // }

  return (
    <rapi-doc
      // spec-url = "https://petstore.swagger.io/v2/swagger.json"
      spec-url = "../../specs/pet.json"
      // spec-url = "https://dev-livestream.gviet.vn/auth-service/v1/api-docs-json"
      render-style = "focused"
      style = {{ width: "100%" }}
      theme = { theme }
      load-fonts = "true"
      show-header = "false"
      allow-authentication	= "false"
      allow-spec-url-load	= "false"
      allow-spec-file-load = "false"
      allow-server-selection	= "false"
      default-api-server = 'http://example.com/api'
      allow-try	= "false"
      font-size = "large"
     />
  )
}

export default AppSpec;