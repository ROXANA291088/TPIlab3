import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

import imgRemeraNation from "./img/RemeraNation.jpg";
import imgJeanCarpenters from "./img/JeanCarpenters.jpg";
import imgCamperaBasic from "./img/CamperaBasic.jpg";
import imgCamperaSensorial from "./img/CamperaSensorial.jpg";


function App() {

  const productos = [
    {
      id: 1,
      name: "Remera nation",
      type: "Remera",
      colour: "Blanca",
      size: "S",
      price: 10000,
      uploadedDate: new Date(2023, 5, 20),
      img: {imgRemeraNation},
      description: "Remera de jersey, cuello redondo manga corta. Molderia oversize. Largo a la cadera. Estampa centrada en frente. Estampa en mangas."
    },
    {
      id: 2,
      name: "Jean carpenters",
      type: "Pantalon",
      colour: "Azul",
      size: "M",
      price: 25000,
      uploadedDate: new Date(2023, 4, 20),
      img: {imgJeanCarpenters},
      description: "Jean 5 bolsillos calce relax con piernas extra amplias. Bolsillos rectangulares con tira carpintera lateral. Color azul oscuro"
    },
    {
      id: 3,
      name: "Campera Basic",
      type: "Abrigo",
      colour: "Negro",
      size: "L",
      price: 36000,
      uploadedDate: new Date(2023, 3, 10),
      img: {imgCamperaBasic},
      description: "Campera basica de frisa liviana. Bolsillo canguro. Cierre metalico color crudo. Cordon color crudo con puntera metalica. Largo a la primer cadera."
    },
    {
      id: 4,
      name: "Campera Sensorial",
      type: "Abrigo",
      colour: "Azul",
      size: "L",
      price: 26900,
      uploadedDate: new Date(2023, 3, 10),
      img: {imgCamperaSensorial},
      description: "Campera de plush. Capucha con forreria al tono. Ojalillos metalicos y cordon tubular con puntera metalica."
    },
  ];

  return (
    <>
      <Navbar/>
      <Main products={productos}/>
      <Footer/>
    </>
  );
}

export default App;
