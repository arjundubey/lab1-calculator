import React from 'react';

import CalcHeader from './component/calcHeader';
import calcButton from './component/button';
import CalcBody from './component/body';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      
      <div className="calculator">
          <CalcHeader /> 
          <CalcBody />
        </div>

      </div>
    );
  }
}

export default App;
