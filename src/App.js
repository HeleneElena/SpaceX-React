import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';

import FetchData from './service/FetchData';

import './style.css'; 


class App extends React.Component {

  fetchData = new FetchData();

  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null, // обновление ракеты
    rockets: [], // все ракеты
    company: null,
  }

  componentDidMount() {
    this.updateRocket();
    this.updateCompany();
  }

  updateRocket() {
    this.fetchData.getRocket()
    .then(data => {
      this.setState({ rockets: data.map(item => item.name) }) // получаю все имена
      return data; // чтобы далее ничего не ломалось
    });
    this.fetchData.getRocket()
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketF => this.setState({ rocketF }));
  } 

  updateCompany = () => {
    this.fetchData.getCompany()
    .then(data => this.setState({company: data}))
  }

  changeRocket = rocket => {
    this.setState({
      rocket
    }, this.updateRocket); 
  }

  render () {
    return (
    <>
      <Header rockets={this.state.rockets} changeRocket={this.changeRocket} />
      <Main rocket={this.state.rocket} />
	    {this.state.rocketF && <Features {...this.state.rocketF} />}
      {this.state.company && <Footer {...this.state.company.links} />}
    </>
  );
  }
}

export default App;
