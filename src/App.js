import './assets/style/app.scss'
import { Routes, Route } from 'react-router-dom'
//pages
import { About, Projects, Home, Contact, Error } from './pages'

//components
import { Layout } from './components'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
