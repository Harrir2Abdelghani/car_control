import React from 'react'

export class Thing extends React.Component {
	render() {
	  return <div style={{marginLeft: this.props.left + 'px', marginTop: this.props.top + 'px',marginBottom: 25,}}>Thing</div>;
  }
}

export class Controls extends React.Component {
	render() {
	  return <div >
      <button onClick={e => this.props.move(-10, 0)}>L</button>
      <button onClick={e => this.props.move(10, 0)}>R</button>
      <button onClick={e => this.props.move(0, -10)}>F</button>
      <button onClick={e => this.props.move(0, 10)}>B</button>
    </div>;
  }
}

export class Car extends React.Component {
	constructor() {
	  super();
  	this.state = {
    	left: 0,
      top: 0,
    }
  }
  
  move(x, y) {
  	this.setState({
    	left: this.state.left + x,
    	top: this.state.top + y
    });
  }
  
	render() {
  	return <div>
    	<Thing left={this.state.left} top={this.state.top}/>
      <Controls move={(x, y) => this.move(x, y)}/>
    </div>;
  }
}

export default Car;