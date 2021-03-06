import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { userInput, productInputs } from './formSource'
import { useContext } from 'react'
import { DarkModeContext } from './context/darkModeContext'

import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New'
import './style/dark.scss'

function App() {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='user'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route
                path='new'
                element={
                  <New inputs={userInput} title='Add New User' />
                }
              />
            </Route>
            <Route path='product'>
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route
                path='new'
                element={
                  <New
                    inputs={productInputs}
                    title='Add New Product'
                  />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
