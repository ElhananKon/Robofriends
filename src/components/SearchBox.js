/* eslint-disable no-tabs */
import React from 'react'

// eslint-disable-next-line react/prop-types
const SearchBox = ({ searchChange }) => {
  return (
			<div className='pa2'>
			<input onChange={searchChange} className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='Search for a robot!'/>
			</ div>
  )
}
export default SearchBox
