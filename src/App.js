import React, { Component } from 'react';
import './assets/sass/vendor/main.scss';


import { library }  from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Import components
import GradientSelector from './components/GradientSelector/GradientSelector';

import ReactGA from 'react-ga';
ReactGA.initialize('Your Unique ID');

class App extends Component {

  render() {
    library.add(fas, fab, far);

    return (
      <div className="App">
        <GradientSelector />
      </div>
    );
  }
}

export default App;
