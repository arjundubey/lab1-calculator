 import React from 'react';


class calcButton extends React.Component {

	  clicked(){
	  	console.log('action performed');
	  }
	 render () {
			 	      return(
		          <button onClick ={this.clicked} className="btn btn-primary">{this.props.label}</button>

	 	      	)
	 }

  
}


 


export default calcButton;