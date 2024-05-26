import { Link, useParams } from 'react-router-dom';
import heroes from '../utils/heroes';
import { GiDoubleFaceMask } from "react-icons/gi";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaPersonRunning } from "react-icons/fa6";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function FichaCompleta() {
    const { id } = useParams();
    const superheroe = heroes.find((hero) => hero.id === id);

    const index = heroes.findIndex((hero) => hero.id === id);
    const previousHero = index > 0 ? heroes[index - 1] : null;
    const nextHero = index < heroes.length - 1 ? heroes[index + 1] : null;

    return (
        <div className='max-w-7xl mx-auto py-20 px-8 grid grid-cols-6 gap-32'>
            <div className='col-span-4'>
                <h1 className='text-3xl font-semibold text-sky-900'>Las Historias de {superheroe.superhero}</h1>
                <p className='uppercase text-gray-600 text-sm font-semibold'>Publicado por: {superheroe.publisher}</p>
                <p className='mt-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequuntur, perferendis quisquam expedita sapiente culpa explicabo accusamus quasi ad odit porro earum facilis minima, maiores provident, reprehenderit incidunt nemo similique enim eaque impedit modi quas vero ex! Dolorum aliquid aspernatur quis fugiat dolore, officia repellat nam, tempore cumque quasi impedit nostrum, corrupti iure ex voluptatibus ipsam. Voluptates, quisquam? Illo libero, nisi quod magnam sequi sunt fugit obcaecati. Nemo enim quos recusandae eligendi cumque minima eos quibusdam ipsam suscipit, iure natus inventore quaerat ducimus, quidem cupiditate nesciunt optio, adipisci facere ex possimus nihil. Id, ad voluptatem corporis totam molestias perferendis quibusdam.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure consectetur enim, est nesciunt, fuga hic quibusdam quisquam officia ratione placeat animi saepe nobis iusto eos aliquid corrupti, expedita deleniti a. Aperiam dolore minus quia natus nam, cumque consequatur repellat! Minima omnis molestiae nesciunt eum sequi ad at a? Repellendus blanditiis doloremque cumque eum nesciunt molestias animi. Iure itaque impedit quae, voluptatibus fugit laboriosam aliquid aspernatur id esse accusantium quaerat!
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi reiciendis expedita eos hic amet iure, repellendus exercitationem, quasi ipsam animi ab eum quae numquam nihil magnam. Voluptates mollitia quia doloremque cum odio? Ab rerum et maxime facere consequuntur, harum a iste, dolorum assumenda voluptate delectus tenetur omnis cumque totam perferendis illo repellendus quam ipsam ullam explicabo voluptas magnam ea! Sunt.
                </p>
            </div>
            <div className='col-span-2'>
                <img src={superheroe.url} alt={superheroe.alter_ego} className='w-full h-80 object-cover object-top rounded-lg' />
                <p className='uppercase font-bold text-sm text-white bg-cyan-600 rounded-md w-fit mt-6 ml-3 py-1 px-2'>Datos que suman</p>
                <div className='flex items-center ml-3 my-3 '>
                    <div className='text-white rounded-full bg-gray-500 text-2xl p-2 mr-2'><GiDoubleFaceMask /></div>
                    <p><strong className='font-semibold text-gray-500 '>Alter Ego:&nbsp;</strong><i className='text-gray-600'>{superheroe.alter_ego}</i></p>
                </div>
                <div className='flex items-center ml-3 my-3'>
                    <div className='text-white rounded-full bg-gray-500 text-2xl p-2 mr-2'><BsCalendarDateFill /></div>
                    <p><strong className='font-semibold text-gray-500 '>1° Aparición:&nbsp;</strong><i className='text-gray-600'>{superheroe.first_appearance}</i></p>
                </div>
                <div className='flex items-center ml-3 my-3'>
                    <div className='text-white rounded-full bg-gray-500 text-2xl p-2 mr-2'><FaPersonRunning /></div>
                    <p><strong className='font-semibold text-gray-500 '>Personajes:&nbsp;</strong><i className='text-gray-600'>{superheroe.characters}</i></p>
                </div>
            </div>
            <div className='flex text-center min-w-[500px] '>
                {previousHero && (
                    <Link to={`/fichacompleta/${previousHero.id}`}>
                        <div className='text-white bg-gray-500 rounded-md flex py-1 px-2 mr-4 items-center'>
                            <i className='text-sm mx-2'>{previousHero.superhero}</i>
                            <FaArrowAltCircleLeft />
                            <p className='mx-2'>Anterior</p>
                        </div>

                    </Link>
                )}
                {nextHero && (
                    <Link to={`/fichacompleta/${nextHero.id}`}>
                        <div className='text-white bg-gray-500 rounded-md flex py-1 px-2 mr-4 items-center'>
                            <p className='mx-2'>Siguiente</p>
                            <FaArrowAltCircleRight />
                            <i className='text-sm mx-2'>{nextHero.superhero}</i>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
}