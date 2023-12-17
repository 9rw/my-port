import './App.css';
import Home from './components/Home';
import NavTop from './components/NavTop';
import NavBottom from './components/NavBottom';
import Certificate from './components/Certificate';
import Profile from './components/Profile';
function App() {
  return (
    <>
      <NavTop />
      <Home />
      <Profile />
      <Certificate />
      <NavBottom />
    </>
  );
}

export default App;
