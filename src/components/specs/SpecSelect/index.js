/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
// eslint-disable-next-line import/no-unresolved
import AppSelect from '@site/src/components/base/AppSelect';
// eslint-disable-next-line import/no-unresolved
import configs from '@site/docusaurus.config';

function SpecSelect(props) {
  const { specUrl, onChange = (val) => {} } = props
  const { list: specList = [] } = configs.themeConfig && configs.themeConfig.specs || {}

  function changedSpec(spec) {
    onChange(spec)  }

  return (
    <AppSelect
      options = { specList }
      onChange = { changedSpec }
      value = { specUrl }
    />
  )
}

export default SpecSelect;