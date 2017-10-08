import React from 'react';
import { connect } from 'dva';
import {Breadcrumb, Input, Row, Col} from 'antd';
import styles from './Css.less';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import {fetch} from '../../../services/home.js';
import marked from 'marked';
import $ from 'jquery';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
import 'normalize.css';
const { TextArea } = Input;
const rendererMD = new marked.Renderer();
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: (code) => {
    return hljs.highlightAuto(code).value;
  }
});//基本设置


class CssComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $.get("https://ydgent.github.io/website/website/demo/Md/cxeshi.md", (response, status, xhr) => { 
      ReactDOM.findDOMNode(this.refs.divone).innerHTML = marked(response);
    });
  }
  render() {
    return (
      <div className="animated fadeIn css_one">
        <Breadcrumb className="animated bounce">
          <Breadcrumb.Item>技术</Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/skill/css">Css（3）</Link></Breadcrumb.Item>
          <Breadcrumb.Item>css消除滚动条</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{padding: '10px 10px 10px 20px'}} >
          <Row>
            <Col span={20}>
              <div ref="divone" id="content"></div>
            </Col>
          </Row>
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

