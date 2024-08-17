import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import EventList from './component/EventList';
import EventForm from './component/EventForm';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/events" component={EventList} />
        <Route path="/create-event" component={EventForm} />
      </Switch>
    </div>
  );
}

export default App;
