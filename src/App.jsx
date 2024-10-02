import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <header>
        <h1>Ashlyn McGarry</h1>
      </header>
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;