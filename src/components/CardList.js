// import React,{Fragment} from 'react';
import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	//One way
	// const cardsArray = robots.map((user) => {
	// 	return <Fragment key={i}>
	// 	<Card id={user.id} name={user.name} username={user.username} email={user.email}/>
	// 	</Fragment>
	// });
	//Another way
	return (
		  <div>
		 {		 	
		 	robots.map((user,i) => {		 		
			return (<Card 
					key={user.id}
				 	id={user.id}
				  	name={user.name}
				    username={robots[i].username}
				    email={user.email}
				    />)
				})
		 }
	 	</div>
		);
}
export default CardList;