import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPost from './components/AddPost';
import DeletePost from './components/DeletePost';
import ViewAll from './components/ViewAll';
import SearchPost from './components/SearchPost';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddPost/>}/>
      <Route path='/search' element={<SearchPost/>}/>
      <Route path='/delete' element={<DeletePost/>}/>
      <Route path='/viewall' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
