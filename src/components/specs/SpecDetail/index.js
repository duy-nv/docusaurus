/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
// import BrowserOnly from '@docusaurus/BrowserOnly';
import 'rapidoc';
import SpecSelect from '../SpecSelect';
import AppSpec from '../AppSpec';

const SpecDetail = (props) => {
  const { spec } = props;
  const [ specUrl, setSpec ] = useState(spec.value);
  const history = useHistory();

  const changeSpec = function(opt) {
    setSpec(opt.value);
    history.push(`${opt.path}`)
  }
  // if (typeof window === 'undefined') {
  //   return <div />;
  // }
  return (
    <div>
      <div className="row">
        <div className="col col--3 col--offset-9">
          {/* <SpecSelect specUrl = { spec } onChange = { changeSpec }/> */}
        </div>
      </div>
      {/* <AppSpec specUrl = { specUrl }/> */}
    </div>
  )
}

export default SpecDetail;