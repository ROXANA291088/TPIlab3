import { Nav } from "react-bootstrap";

import ProductsMenu from "../ProductsMenu/ProductsMenu";

import perfilImg from "./img/perfil.png";
import bolsoImg from "./img/bolso.png";
import "./Navbar.css";

const Navbar = () => {

    return (
        <Nav className="nav">
            {/* ProductsMenu: lista de productos */}
           <ProductsMenu/>

            <Nav.Item >
                {/* Poner imagen de la "marca" */}
                {/* Se dirige a la pag principal */}
                {/* Alinear al centro */}
                <Nav.Link href="" className="nav-link"> Tienda</Nav.Link>
            </Nav.Item>

    
            <Nav.Item className="profileAndCarrito">
                {/* Se dirige al formulario de inicio de sesión*/}
                <Nav.Link href="">
                    <img src={perfilImg} 
                        alt="Iniciar sesion"
                        className="profileImg"
                    /> 
                </Nav.Link>
            
                {/* Muestra el producto seleccionado*/}
                <Nav.Link href="">
                    <img src={bolsoImg} 
                        alt="Carrito"
                        className="bolsoImg"
                    />
                </Nav.Link>
            
            </Nav.Item>
            
        </Nav>
    );
}

export default Navbar