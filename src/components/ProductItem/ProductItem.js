import ProductCard from "../ProductCard/ProductCard"
import UploadedDate from "../UploadedDate/UploadedDate"


const ProductItem = ({id, name , type, colour, size, price, uploadedDate, img, description}) => {
  return (
    <ProductCard>
      <img src={img} alt={name}/>
      <p>Nombre: {name}</p>
      <p>Id: {id}</p>
      <p>Tipo: {type}</p>
      <p>Color: {colour}</p>
      <p>Talle: {size}</p>
      <p>Precio: {price}</p>
      <p>Fecha subido: <UploadedDate uploadedDate={uploadedDate} /></p>
      <p>Descripción: {description}</p>
    </ProductCard>
  )
}

export default ProductItem