import Favourites from './features/favourites/Favourites';
import Home from './features/home/Home';
import {Routes, Route} from "react-router-dom"
import Navigation from './features/nav/Navigation';

const App = () => {
  return (<>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favourites' element={<Favourites/>}/>
    </Routes>
  </>
  );
}

export default App;
