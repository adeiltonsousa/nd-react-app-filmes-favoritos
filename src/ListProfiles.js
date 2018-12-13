import React, { Component } from 'react'

class ListProfiles extends Component {
	render() { 
		return (
                <ul>
                <h1> Listando Profiles </h1>
                  { this.props.profiles.map((profile) => (
                      <li key={profile.id}>          
                          <p>'o UserID é:' {profile.userID} 'favoriteMovieID=' {profile.favoriteMovieID}</p>
                      </li>
                  ))}
                </ul>
		)
	}
}

export default ListProfiles