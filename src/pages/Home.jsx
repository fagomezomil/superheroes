import heroes from '../utils/heroes'
import HeroesList from '../components/HeroesList'


const Home = () => {

    const superheroes = heroes

  return (
    < div className='mx-6'>
      <p className='max-w-7xl mx-auto xl:mx-[550px] my-20 text-center font-light italic text-sky-900 text-6xl'>Encontra en esta lista tu heroe y revivi grandes aventuras</p>
        <HeroesList superheroes={superheroes}/>
    </div>
  )
}

export default Home