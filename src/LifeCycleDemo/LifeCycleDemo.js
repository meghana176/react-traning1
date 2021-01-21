import React from 'react';

class LifeCycleDemo extends React.Component {
    constructor(props) {
        super(props);
        console.log('Constructor');
    }
    state = {
        a: 0
    };

    componentwilMount = () => {
       console.log(' Component will mount');
    };

    componentDidMount = () => {
       console.log(' Component Did Mount');
    };

    shouldComponentUpdate = () => {
        console.log('Should Component Update');
        return true;

    };

    componentwilUpdate = () => {
        console.log(' Component will Update');
     };

     componentDidUpdate = () => {
        console.log(' Component Did update');
     };

     changeState = e => {
         this.setState({
             a: this.state.a =10
         });
     };

     render() {
         console.log('render');
         return (
             <div>
                 LifeCycleDemo
                 <button onClick={this.changeState}>Change State</button>
                 {this.state.a}
             </div>
         );
     }
    }


    export default LifeCycleDemo;