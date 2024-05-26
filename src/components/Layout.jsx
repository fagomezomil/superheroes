import Footer from './Footer'
import NavBar from './NavBar'
const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-[url('../images/marvelvsdc.jpg')] bg-no-repeat bg-cover h-[450px]">
      </div>
        <NavBar />
        <div >
          {children}
        </div>
      <Footer />
    </>
  )
}

export default Layout