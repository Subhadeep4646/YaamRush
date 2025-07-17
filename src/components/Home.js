import React from 'react'
import Header from './Header'
import FoodDisplay from './FoodDisplay'
import Groceries from './Groceries'
import RestroDisplay from './RestroDisplay'

function Home() {
  return (
    <div>
    <Header></Header>
    <FoodDisplay></FoodDisplay>
    <Groceries></Groceries>
    <RestroDisplay></RestroDisplay>
    </div>
  )
}

export default Home