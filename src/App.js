import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'
import MyNavbar from './components/MyNavbar'
import BookList from './components/BookList'
import fantasyBooks from './fantasyBooks.json'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Registration from './components/Registration'

function App() {
  return (
    <BrowserRouter>
      <MyNavbar/>
      <Routes>
        <Route path='/' element={<BookList books={fantasyBooks} />} />
        <Route path='/registration' element={<Registration/>} />
        {/* <WarningSign text="Watch out again!" /> */}
        {/* <MyBadge text="NEW!!" color="info" /> */}
        {/* <SingleBook book={fantasyBooks[0]} /> */}
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
