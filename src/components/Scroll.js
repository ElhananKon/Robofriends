/* eslint-disable react/prop-types */
/* eslint-disable no-tabs */
import React from 'react'

const Scroll = (props) => {
  return (
			// eslint-disable-next-line react/jsx-no-comment-textnodes
			<div style={{ overflow: 'scroll', border: '5px solid black', height: '700px' }}>
				{props.children}
			</div>
  )
}
export default Scroll
