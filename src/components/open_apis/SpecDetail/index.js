/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import React, { useState, useEffect } from 'react';
// import { useHistory } from "react-router-dom";
import SpecSelect from '../SpecSelect';
import AppSpec from '../AppSpec';

const SpecDetail = (props) => {
  const { spec } = props;
  const [ specUrl, setSpec ] = useState(spec.value);
  // const history = useHistory();

  useEffect(() => {
    setSpec(spec.value)
  })

  const changeSpec = function(opt) {
    window.location.href = `${opt.path}`
  }

  return (
    <div>
      <div className="row">
        <div className="col col--3 col--offset-9">
          <SpecSelect specUrl = { spec } onChange = { changeSpec }/>
        </div>
      </div>
      <AppSpec specUrl = { specUrl }/>
    </div>
  )
}

export default SpecDetail;