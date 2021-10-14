import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import LeftMenu from '../components/LeftMenu';
import Home from '../components/Home';
import HowTo from '../components/HowTo';
import AppointmentList from './AppointmentList';
import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';
import TrainerList from './TrainerList';
import TrainerProfile from '../components/TrainerProfile';

const App = () => (
  <div>
    <div>
      <Route path="/" component={Navbar} />
    </div>
    <div id="main">
      <Route path="/" component={LeftMenu} />
      <div id="content">
        <Route exact path="/" component={Home} />
        <Route path="/How_to" component={HowTo} />
        <Route path="/My_appointments" component={AppointmentList} />
        <Route path="/Trainer_profile" component={TrainerProfile} />
        <Route path="/Trainers" component={TrainerList} />
        <Route path="/Log_in" component={LogIn} />
        <Route path="/Sign_up" component={SignUp} />
      </div>
    </div>
  </div>
);

export default connect()(App);
