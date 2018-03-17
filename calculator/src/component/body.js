import React from 'react';
import Button from './button';

class calcBody extends React.Component {
         
        


    inputPercent(){
          const{displayValue}=this.state
          const value=parseFloat(displayValue)
          this.setState({
            displayValue:String(value/100)
          })
        }



	 render () {
       const{displayValue}=this.state




	 	      return(
                    <div className="calculator-body clearfix">
          <Button label="+" />
          <Button label="-" />
          <Button className="calculator-key" onClick={()=>this.performOperation('/')} label="/" />
          <Button label="*" />


            



                


      </ div>

























	 	      	)
	 }

  
}


 


export default calcBody;