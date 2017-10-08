import React from 'react';
import { connect } from 'dva';
import {Breadcrumb} from 'antd';
import styles from './Css.less';
import { Link } from 'react-router';

class CssComponent extends React.Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Breadcrumb className="animated bounce">
          <Breadcrumb.Item>技术</Breadcrumb.Item>
          <Breadcrumb.Item>Css（3）</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{padding: '10px 10px 10px 20px'}} className={styles.center}>
          <ul>
            <li className="animated fadeInDown"><Link to="/skill/css/one">css消除滚动条</Link></li>
            <li className="animated fadeInDown" style={{animationDelay: '0.5s'}}>css消除滚动条</li>
            <li className="animated fadeInDown" style={{animationDelay: '1s'}}>css消除滚动条</li>
          </ul>
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

export default connect()(CssComponent);

