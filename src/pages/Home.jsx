import React from 'react'
import heroes from '../utils/heroes'
import HeroesList from '../components/HeroesList'


const Home = () => {

    const superheroes = heroes

  return (
    <>
        <HeroesList superheroes={superheroes}/>
    </>
  )
}

export default Home