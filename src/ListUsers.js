import React, { Component } from 'react'

class ListUsers extends Component {
	render() {
    	return (
          <ol>
          		{ this.props.users.map((user) => {
        			<li key={user.id}>          
      						<p>{user.id}</p>
							<p>{user.name}</p>
							<p>{user.userName}</p>
					</li>
        })}

				/* { this.props.profiles.map((profile) => (
        			<li key={profile.id}>          
      						<p>{profile.userID}</p>
					</li>
				))} */
			</ol>
        )
    }
}

export default ListUsers