import React from 'react';
import { connect } from 'dva';
import {Breadcrumb} from 'antd';
// import styles from './Html.less';

class ReactComponent extends React.Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Breadcrumb>
          <Breadcrumb.Item>技术</Breadcrumb.Item>
          <Breadcrumb.Item>React</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{marginTop: 10}}>
          我是React页面 <br />
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

export default connect()(ReactComponent);

