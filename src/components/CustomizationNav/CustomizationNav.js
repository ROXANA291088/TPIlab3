import Nav from 'react-bootstrap/Nav';
import SwitchMode from '../SwitchMode/SwitchMode';
import OrderBy from '../OrderBy/OrderBy';
import FilterBy from '../FilterBy/FilterBy';

import "./CustomizationNav.css";

const CustomizationNav = () => {
  return (
    <Nav className='nav'>
        {/* Switch modo claro/oscuro */}
        <SwitchMode/>
        {/* Menú ordenar por: más reciente (x defecto), precio más alto, precio más bajo */}
        <OrderBy/>
        {/* Menú filtrar por: color, talle, gama de precios*/}
        <FilterBy/>
        {/* visualización: pequeño (5 articulos), mediano (10), grande (15) */}
        <div>Visualización</div>
    </Nav>
  )
}

export default CustomizationNav