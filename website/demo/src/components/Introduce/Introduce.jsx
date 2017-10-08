import React from 'react';
import { connect } from 'dva';
import {Breadcrumb} from 'antd';
import styles from './Introduce.less';
import 'animate.css';

class IntroduceComponent extends React.Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Breadcrumb>
          <Breadcrumb.Item><div className="animated fadeInDown">简介</div></Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.center}>
          <div>我是介绍页面</div>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   // console.log(state);
//   // const {} = state.home;
//   // return {};
// }

export default connect()(IntroduceComponent);

