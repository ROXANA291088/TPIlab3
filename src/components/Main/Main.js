import CustomizationNav from "../CustomizationNav/CustomizationNav"
import Products from "../Products/Products"
import Slides from "../Slides/Slides"

const Main = ({products}) => {
  return (
    <main>
        {/*  carrucel de imagenes con ofertas o noticias */}
        <Slides/>
        {/* Barra de personalización: modo oscuro/claro, ordenar por, filtrar por, visualización */}
        <CustomizationNav/>
        <Products products={products}/>
    </main>
  )
}

export default Main