// src/App.jsx
import './assets/css/main.css'; // Asegúrate que esta ruta sea correcta
import Header from './components/Header';
import Menu from './components/Menu';
import Banner from './components/Banner';
import Secciones from './components/Secciones'; // Importa Secciones
import Footer from './components/Footer';     // Importa Footer



function App() {
  return (
    <>
      <Header />
      <Menu />
      <Banner />
      <Secciones /> {/* Añade el componente Secciones */}
      <Footer />    {/* Añade el componente Footer */}  
    </>
  );
}

export default App;