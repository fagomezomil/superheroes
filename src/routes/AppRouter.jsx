import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import MarvelHeroes from '../pages/MarvelHeroes'
import DcHeroes from '../pages/DcHeroes'
import SearchHeroes from '../pages/SearchHeroes'
import Layout from '../components/Layout'

export default function AppRouter() {
  return (
    <>
     <BrowserRouter>
        <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marvel" element={<MarvelHeroes />} />
          <Route path="/dc" element={<DcHeroes />} />
          <Route path="/search" element={<SearchHeroes />} />
        </Routes>
        </Layout>
     </BrowserRouter> 
    </>
  )
}
