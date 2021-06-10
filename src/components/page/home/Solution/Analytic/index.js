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
import AppContent from '@site/src/components/base/AppContent'
import classnames from 'classnames';
import styles from './styles.module.css';

export default function DataManagment() {
  
  const Main = (
  <div className="analytic wow fadeInDown">
    <div className="row">
      <div className={classnames('col col--6')}>
        <div className={styles.analytic__left}>
          <div>
            <img src="/img/home_solution/ana_img2.png" alt="analytic" />
          </div>
          <div>
            <ul>
              <li>Phân tích thời gian thực</li>
              <li>Xử lý dữ liệu lớn</li>
              <li>Cấu trúc lọc phức tạp</li>
              <li>Đẩy đủ các chỉ số</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classnames('col col--6')}>
        <div className={classnames(styles.analytic__right)}>
          <img src="/img/home_solution/ana_img1.png" alt="analytic" />
        </div>
      </div>
    </div>
  </div>
  )

  return (
    <AppContent
      id = 'analytic'
      title = "Analytic"
      description = "Phân tích, đánh giá các chỉ số truyền tải video đến người dùng cuối qua thời gian thực"
      content = { Main } 
    />
  );
}
  