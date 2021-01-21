import React from 'react';

class Calculator extends React.Component {
    state = {
        a: '',
        b: '',
        showResult: false
    };
    setA = (e) => {
        this.setState({
            a: parseInt(e.target.value)
        });
    };

    setB = (e) => {
        this.setState({
            b: parseInt(e.target.value)
        });
    };

    submitBtn = (e) => {
  
        this.setState( {showResult: true});
    };
    render() {
        const {a, b} = this.state;
        return (
        <div>
            <form>
            <input type="text"  className='inputA'  value={a} onChange={this.setA} />
            <input type="text" value={b} onChange={this.setB} />
            <button type="button" onClick={this.submitBtn}>Result</button>
            </form>
            {this.state.showResult ? this.state.a+this.state.b : null}

            </div>
        );
    }
}

export default Calculator;