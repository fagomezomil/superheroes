import HeroesList from "../components/HeroesList"
import heroes from '../utils/heroes'
export default function MarvelHeroes() {
  const MvHeroes = heroes.filter((item) => item.publisher === 'Marvel Comics')
  return (
    <div className='mx-6'>
      <p className='text-center font-light italic text-sky-900 text-6xl max-w-7xl mx-auto xl:mx-[550px] my-20 '>Solo tus Heroes de Marvel</p>
      <HeroesList superheroes={MvHeroes}/>
    </div>
  )
}
