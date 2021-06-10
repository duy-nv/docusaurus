/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-unresolved
import AppContent from '@site/src/components/base/AppContent'
import classnames from 'classnames';
// import { WOW } from 'wowjs';
import styles from './styles.module.css';
 
const solutions = [
  {
    title: 'Data Right Management',
    icon: 'zap',
    image: '/img/home_solution/icon_data.png',
    description: 'Sigma DRM kiểm soát và bảo vệ dữ liệu video, audio qua mạng Internet',
  },
  {
    title: 'Less CDN',
    icon: 'unlock',
    image: '/img/home_solution/icon_less.png',
    description: 'Giải pháp truyền tải nội dung media tới người dùng, giúp tiết kiệm chi phí.'
  },
  {
    title: 'Analytic',
    icon: 'codepen',
    image: '/img/home_solution/icon_ana.png',
    description: 'Phân tích, tính toán các chỉ số chất lượng truyền tải video theo thời gian thực.'
  },
  {
    title: 'Multi Screen',
    icon: 'shuffle',
    image: '/img/home_solution/icon_multi.png',
    description: 'Quản lý số lượng thiết bị truy cập video theo người dùng trong thời gian thực.'
  }
]

const SolutionItem = function({ title, description, thumb}) {
  return (
    <div className={classnames(styles['solution-item'], 'wow')}>
      <div className={styles['solution-thumb']}>
        <img src={thumb} alt={title} />
      </div>
      <div className={classnames(styles['solution-content'])}>
        <h3 className={classnames(styles['solution-title'])}>{title}</h3>
        <p className={classnames(styles['solution-description'])}>{description}</p>
      </div>
    </div>
  );
}

export default function Solutions() {
  // useEffect(() => {
  //   new WOW({ offset: 10}).init();
  // })
  const SolutionList = solutions.map((item, idx) => {
    return (
      // eslint-disable-next-line react/no-array-index-key
      <div key={`solution_${idx}`} className="col col--3">
        <SolutionItem title = { item.title } description = { item.description } thumb = { item.image } />
      </div>
    )
  })

  const Main = (
    <div className="row wow fadeInDown">{ SolutionList }</div>
  )
 
  return (
    <AppContent title = "Giải Pháp" content = { Main } />
  );
}
  