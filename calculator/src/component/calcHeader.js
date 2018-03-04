import React from 'react';

class CalcHeader extends React.Component {
	 render () {
	 	      return(
                  <div className="calculator-head">
                  		<input type="text"/>
                  		<input type="text"/>
                  		<div className="calculator-result"></div>
                  </div>
	 	      	)
	 }
  
}

export default CalcHeader;