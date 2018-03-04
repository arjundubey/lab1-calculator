import React from 'react';
import Button from './button';

class calcBody extends React.Component {
	 render () {
	 	      return(
                    <div className="calculator-body clearfix">
          <Button label="+" />
          <Button label="-" />
          <Button label="/" />
          <Button label="*" />
          
      </div>

	 	      	)
	 }

  
}


 


export default calcBody;