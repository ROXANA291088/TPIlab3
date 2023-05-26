import React from 'react'
import { Dropdown, NavItem, NavLink } from 'react-bootstrap'

const FilterBy = () => {
  return (
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={NavLink}>Filtrar</Dropdown.Toggle>
      <Dropdown.Menu>
        {/* Agregar variantes */}
        <Dropdown.Item>Color</Dropdown.Item>  
        <Dropdown.Item>Talle</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>   
  )
}

export default FilterBy