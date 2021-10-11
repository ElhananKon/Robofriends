/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React from 'react'

// eslint-disable-next-line react/prop-types
const Card = ({ id, name, email }) => {
  return (
		  <div className= 'tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
			  <img alt="robot" src={`https://robohash.org/${id}.jpeg?size=200x200&&bgset=bg1`} />
			  <div>
			  	<h2>{name}</h2>
			  	<p>{email}</p>
			  </div>
		  </div>
  )
}
export default Card
