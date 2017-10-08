import React from 'react';
import { connect } from 'dva';
import HomeComponent from '../components/Home/Home';

class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeComponent {...this.props}/>
      </div>
    );
  }
}

export default connect()(Home);
