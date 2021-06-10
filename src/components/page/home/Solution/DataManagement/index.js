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
    <div className="drm-content wow fadeInDown">
      <div className="row">
        <div className={classnames('col col--6')}>
          <div className={styles['drm-content__left']}>
            <div>
              <img src="/img/home_solution/data_img2.png" alt="drm" />
            </div>
            <div>
              <ul>
                <li>Hỗ trợ đa nền tảng</li>
                <li>Bảo mật</li>
                <li>Dễ dàng tích hợp</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classnames('col col--6')}>
          <div className={classnames(styles['drm-content__right'])}>
            <img src="/img/home_solution/data_img1.png" alt="drm" />
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <AppContent
      id = 'data_management'
      title = "Data Right Management"
      description = "Giải pháp trọn gói trong việc bảo vệ dữ liệu của bạn khi truyền tải nội dung số qua môi trường Internet. Đơn giản thân thiện và dễ dàng tích hợp vào mọi hệ thống. Bảo mật, tin cậy, hiệu quả với chi phí thấp"
      content = { Main } 
    />
  );
}
  