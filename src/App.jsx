import { Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout.jsx'
import About from './pages/About.jsx'
import BrandCenter from './pages/BrandCenter.jsx'
import Home from './pages/Home.jsx'
import Newsletters from './pages/Newsletters.jsx'
import NotFound from './pages/NotFound.jsx'
import Team from './pages/Team.jsx'
import Logos from './pages/Logos.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="newsletters" element={<Newsletters />} />
        <Route path="brand-center" element={<BrandCenter />} />
        <Route path="brand-center/logos" element={<Logos />} />
        <Route path="team" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
