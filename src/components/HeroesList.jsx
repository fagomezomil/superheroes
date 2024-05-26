import HeroCard from './HeroCard'



const HeroesList = ({superheroes}) => {

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
        {
            superheroes.map((heroe, index) => {
                return <article key={index}>
                    <HeroCard superheroe={heroe}/>
                </article>
            })
        }
    </div>
  )
}

export default HeroesList