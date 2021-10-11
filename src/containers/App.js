import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import Searchbox from '../components/SearchBox'
// import {robots} from '../robots';
import ErrorBoundry from '../components/ErrorBoundry'
import { setSearchField, requestRobots } from '../actions'
import './App.css'

// const mapStateToProps = state => {
//   return {
//     searchField: state.searchRobots.searchField,
//     robots: state.requestRobots.robots,
//     isPending: state.requestRobots.isPending,
//     error: state.requestRobots.error
//     // searchField: state.searchField
//   }
// }

// const mapDispatchToState = (dispatch) => {
//   return {
//     onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
//     onRequestRobots: () => dispatch(requestRobots())
//   }
// }

function App () {
  const dispatch = useDispatch()
  const { searchField, robots, isPending, error } = useSelector(state => ({
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }), shallowEqual)

  useEffect(() => {
    async function getData () {
      dispatch(requestRobots())
    }
    getData()
  }, [dispatch])
  //   componentDidMount () {
  //     this.props.onRequestRobots()
  //   }

  //   render () {
  // const {robots,searchField} = this.state;
  // const {robots} = this.state;
  // const { searchField, onSearchChange, robots, isPending, error } = this.props
  const filteredList = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })
  return ((isPending || error !== '')
    ? <h1 className='tc'>Loading...</h1>
    : <div className='tc'>
      <h1 className='f2'>Robofriends</h1>
      <Searchbox searchChange={(event) => dispatch(setSearchField(event.target.value))}/>
      <Scroll>
         <ErrorBoundry>
           <CardList robots = {filteredList}/>
         </ErrorBoundry>
      </Scroll>
      </div>
  )
//   }
};
// export default connect(mapStateToProps, mapDispatchToState)(App)
export default App
