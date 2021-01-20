import React from 'react';

class Calculator extends React.Component {
    state = {
        a: 10,
        b: 5
    }
    render() {
        return <div>
            {'Add : '+(this.state.a + this.state.b)}
            <br/>
            {'Sub : '+(this.state.a - this.state.b)}
            <br/>
            {'Mul : '+(this.state.a * this.state.b)}
            <br/>
            {'Div: '+(this.state.a / this.state.b)}
            
            
            </div>;
    }
}

export default Calculator;