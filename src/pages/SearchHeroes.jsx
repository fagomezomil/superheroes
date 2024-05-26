import { useState } from 'react';
import HeroesList from '../components/HeroesList';
import heroes from '../utils/heroes';

export default function SearchHeroes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredHeroes, setFilteredHeroes] = useState([]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = heroes.filter((hero) =>
      hero.superhero.toLowerCase().includes(searchTerm)
    );
    setFilteredHeroes(filtered);
    setSearchTerm(searchTerm);
  };

  return (
    <div className='text-center mx-6'>
      <p className='text-center font-light italic text-sky-900 text-6xl max-w-7xl mx-auto xl:mx-[650px] my-20 '>Buscá aquí tu heroe y conocé más</p>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Buscar superhéroe"
        maxLength={20}
        className='text-2xl font-light text-gray-400 rounded-2xl text-center px-36 py-4 mb-5 border-2 border-gray-200'
      />
      {searchTerm ? (
        <HeroesList superheroes={filteredHeroes} />
      ) : (
        <p className='text-gray-500'>Busca con una palabra a tu superheroe</p>
      )}
    </div>
  );
}