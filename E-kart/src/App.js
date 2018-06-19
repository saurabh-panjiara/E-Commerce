import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import CategoryPage from  './Containers/CategoryPage/CategoryPage';
//import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
        	<CategoryPage />
        </Layout>
      </div>
    );
  }
}

export default App;

