import React from 'react';
import { Router, Route, IndexRoute, IndexRedirect, history } from 'dva/router';
import IndexPage from './routes/IndexPage';
import { Menu, Layout } from 'antd';


import Home from './routes/Home.js';
import Introduce from './routes/Introduce.js';

import SkillHtml from './components/Skill/Html/Html.jsx';
import SkillCss from './components/Skill/Css/Css.jsx';
import SkillCssOne from './components/Skill/Css/One.jsx';
import SkillJs from './components/Skill/Js/Js.jsx';
import SkillReact from './components/Skill/React/React.jsx';
import SkillNode from './components/Skill/Node/Node.jsx';



function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/home" component={Home}>
        <Route path="/introduce" component={Introduce} />
        <Route path="/skill/html" component={SkillHtml} />
        <Route path="/skill/css" component={SkillCss} />
        <Route path="/skill/css/one" component={SkillCssOne} />
        <Route path="/skill/js" component={SkillJs} />
        <Route path="/skill/react" component={SkillReact} />
        <Route path="/skill/node" component={SkillNode} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
