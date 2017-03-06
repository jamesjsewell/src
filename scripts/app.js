import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

var burgerPage = React.createClass({
	//every react component has a method called '.render()' that describes (via it's return value)
	//what elements that component will contain. In other words, it returns the tree structure, 
	//written in jsx, that the element will contain
	render: function(){
		return ( // you can only return one element here, that element can have childeren 
				//but not siblings
			<div >

			</div>
		)
	}

})



const app = function() {
  document.querySelector('.container').innerHTML = `<h1>reactDemo</h1>`
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..