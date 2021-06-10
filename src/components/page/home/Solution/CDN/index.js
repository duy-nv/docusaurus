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
     <div className="cdn-content wow fadeInDown">
        <div className={classnames('row')}>
          <div className={classnames('col col--3')}>
            <h4 className={styles['cdn-content__title']}>
              Hỗ trợ đa nền tảng
            </h4>
          </div>
          <div className={classnames('col col--3')}>
            <h4 className={styles['cdn-content__title']}>
              HLS + DASH
            </h4>
          </div>
          <div className={classnames('col col--3')}>
            <h4 className={styles['cdn-content__title']}>
              Tiết kiệm ~ 70 % chi phí CDN
            </h4>
          </div>
          <div className={classnames('col col--3')}>
            <h4 className={styles['cdn-content__title']}>
              Tăng trải nghiệm người dùng
            </h4>
          </div>
        </div>
        <div className="row">
          <div className={classnames('col col--6', styles['cdn-content__desc'])}>
            <img src="/img/home_solution/anim_01.gif" alt="less CDN"/>
          </div>
          <div className={classnames('col col--6', styles['cdn-content__desc'])}>
            <img src="/img/home_solution/anim_02.gif" alt="less CDN"/>
          </div>
        </div>
     </div>
   )
 
   return (
     <AppContent
       id = 'less_cdn'
       title = "Less CDN"
       description = "Công nghệ P2P-CDN giúp cho việc truyền tải các nội dung video mượt mà hơn đồng thời cũng tối ưu chi phí băng thông giúp giảm chi phí cho các sự kiện trực tiếp hoặc VOD"
       content = { Main } 
     />
   );
 }
   