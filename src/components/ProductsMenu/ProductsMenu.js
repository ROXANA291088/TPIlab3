import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';



const ProductsMenu = () => {
  return (
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={NavLink}>Productos</Dropdown.Toggle>
      <Dropdown.Menu>
        {/* Agregar variantes */}
        <Dropdown.Item>Remeras</Dropdown.Item>  
        <Dropdown.Item>Pantalones</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>    
  )
}

export default ProductsMenu