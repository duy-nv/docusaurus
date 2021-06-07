/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import React from 'react';
import Select from 'react-select';
import './styles.css';

const AppSelectCreator = function AppSelectProxy(WrappedSelect) {
  // eslint-disable-next-line react/prefer-stateless-function
  class HOC extends React.Component {
    render() {
      
      const additionalProps = {
        className: 'react-select-container',
        classNamePrefix: 'react-select'
      }
      const props = { ...this.props, ...additionalProps }
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <WrappedSelect { ...props } />
    }
  }

  return HOC
}

export default AppSelectCreator(Select)