import { Dropdown, NavItem, NavLink } from "react-bootstrap"



const OrderBy = () => {
  return (
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={NavLink}>Ordenar por</Dropdown.Toggle>
      <Dropdown.Menu>
        {/* Agregar variantes */} 
        <Dropdown.Item> <input type="radio" /> Precio más bajo </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>   
  )
}

export default OrderBy