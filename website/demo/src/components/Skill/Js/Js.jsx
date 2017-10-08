import React from 'react';
import { connect } from 'dva';
import {Breadcrumb} from 'antd';
// import styles from './Html.less';

class JsComponent extends React.Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Breadcrumb>
          <Breadcrumb.Item>技术</Breadcrumb.Item>
          <Breadcrumb.Item>JS</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{marginTop: 10}}>
          我是JS页面 <br />
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

export default connect()(JsComponent);

