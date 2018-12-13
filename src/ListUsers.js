import React, { Component } from 'react'

class ListUsers extends Component {
	render() {
      for (let [key, value] of Object.entries(users)) {
        console.log(key, value);
      }
		return (
          <ul>
				
          </ul>
		)
	}
}

export default ListUsers