import React, {PropTypes} from 'react';
import { Layout, Menu, Icon, Breadcrumb, BackTop } from 'antd';
import styles from './Home.less';
const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
import { Link } from 'react-router';
import { connect } from 'dva';
import ReactDOM from 'react-dom';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  // static defaultProps = {
  //   params: PropTypes.object,
  // }
  state = {
    collapsed: false,
    value: false,
  };
  // componentWillReceiveProps(nextProps) {
  //    if (nextProps.location.pathname != this.props.location.pathname) {
  //       ReactDOM.findDOMNode(this.refs.content).classList.add(styles.contentmove);
  //       setTimeout(() => {
  //         ReactDOM.findDOMNode(this.refs.content).classList.remove(styles.contentmove);
  //       }, 1000);
  //    }
  // }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const {collapsed} = this.state;
    const key = this.props.location.pathname.split('/').pop();
    const name = (<span>
      <span className={styles.name_span_one}>路漫漫其修远兮</span><br />
      <span className={styles.name_span_two}>吾将上下而求索</span>
    </span>);
    return (
      <Layout style={{ minHeight: '100vh' }} className="home">
        <Sider
          collapsible
          collapsed={collapsed}
          style={{ overflow: !collapsed && 'scroll' || '', height: '100vh', position: 'fixed', left: 0, paddingBottom: '48px' }}
          onCollapse={this.toggle}
        >
          <div className={!collapsed ? styles.logo : styles.logotwo}/>
          <p className={!collapsed ? styles.name : styles.name_two}>{!collapsed && name || 'Ydgent'}</p>
          <Menu theme="dark" defaultSelectedKeys={[key]} mode="inline">
            <Menu.Item key="home"><Link to="/home"><Icon type="pie-chart" /><span>主页</span></Link></Menu.Item>
            <Menu.Item key="introduce"><Link to="/introduce"><Icon type="user" /><span>简介</span></Link></Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="desktop" /><span>技术</span></span>}
            >
              <Menu.Item key="html"><Link to="/skill/html">H5</Link></Menu.Item>
              <Menu.Item key="css"><Link to="/skill/css">CSS(3)</Link></Menu.Item>
              <Menu.Item key="js"><Link to="/skill/js">JavaScript</Link></Menu.Item>
              <Menu.Item key="react"><Link to="/skill/react">React</Link></Menu.Item>
              <Menu.Item key="node"><Link to="/skill/node">Node</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="chrome" /><span>学习</span></span>}
            >
              <Menu.Item key="6">笔记随笔</Menu.Item>
              <Menu.Item key="8">BUG集合地</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={<span><Icon type="team" /><span>生活</span></span>}
            >
              <Menu.Item key="13">我的足迹</Menu.Item>
              <Menu.Item key="14">小记</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>我的简历</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{paddingLeft: this.state.collapsed ? '64px' : '200px'}}>
          <Header className={styles.header}>
          </Header>
          <Content className={styles.content} ref='content'>
            <div style={{ padding: 24, background: '#fff', minHeight: '75vh' }}>
              {this.props.children || <div>欢迎来到Ydgent的世界</div>}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ydgent个人网站 ©2016 Created by Ydgent
          </Footer>
        </Layout>
        <BackTop></BackTop>
      </Layout>
    );
  }
}


export default connect()(HomeComponent);

