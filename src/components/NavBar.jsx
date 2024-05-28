import { Link } from 'react-router-dom';
import { FaMagnifyingGlass } from "react-icons/fa6";
const Navbar = () => {
  const enlaces = [
    {
      to: 'home',
      label: 'Home',
    },
    {
      to: 'dc',
      label: 'DC',
    },
    {
      to: 'marvel',
      label: 'Marvel',
    },
    {
      to: 'search',
      icon: <FaMagnifyingGlass />,
      label: 'Buscar',
    },
  ];
  
  const IrArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <nav className="bg-gradient-to-br from-[rgba(6,75,147,1)] via-[rgba(17,61,103,1)] to-[rgba(34,55,77,1)]  sticky top-8 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <Link to="/" onClick={IrArriba} className="text-white font-semibold text-3xl italic flex items-center">
              <img src="../images/logosuper.png" alt="" className='mr-4 drop-shadow-md' />
              Fantastic Heroes!
            </Link>
          </div>
          <div>
            <div className="flex">
              {enlaces.map((enlace) => (
                <Link key={enlace.to} to={enlace.to} onClick={IrArriba} className="text-white font-semibold hover:text-white mx-4">
                  <div className='flex items-center'>
                    <div className='mr-2'>{enlace.icon}</div>
                    {enlace.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;