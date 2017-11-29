/*var config = require('./config.json');

module.exports = function(){
	var greet = document.createElement('div');
	// greet.textContent = 'Hello World';
	greet.textContent = config.greetText;
	return greet;
};*/

import React, {Component} from 'react';
import config from './config.json';
import styles from './Greeter.scss';

class Greeter extends Component{
	renderWord(t1,t2){
		const flag = false;
		return flag ? t1 : t2;
	}
	render() {
		const word = 'good job';
		const flag = true;
		return (
			<div className={styles.root}>
				<div className={styles.text}>
					{config.greetText}
				</div>		
				<ul>
					<li>{word}</li>
					<li>list</li>
				</ul>	
				<label htmlFor="male"><input type="radio"/> Male</label>
				<p>
					{flag ? <strong>yes</strong> : null}
				</p>
				<div style={{"fontSize":"12px","color":"red"}}>
					{this.renderWord(<strong>good</strong>,<strong>bad</strong>)}
				</div>
				<Others name="component"/>

			</div>
		);
	}
}

class Others extends Component{
	render() {
		return (
			<div className="others">
				<div>other {this.props.name}</div>
			</div>
		)
	}
}

class FormList extends Component{
	//render(){
	//	return (
	//		<from>
	//			this.props.children.forEach(function(child){
	//				return <button>{child}</button>
	//			})
	//		</from>
	//	)
	//}
}


export default Greeter
