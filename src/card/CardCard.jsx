import { useContext } from "react"
import { ProductContext } from "../components/context/ProductContext"

const CardCard = ({image, category, name, description, price, id,quantity }) => {
  const {increase,decrease}=useContext(ProductContext);
  return (
    <div className="card mb-3" >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 style={{fontSize:"35px"}} className="card-title">{name}</h5>
            <p style={{fontSize:"25px"}}  className="card-text">{description}</p>
            <p style={{fontSize:"25px"}} className="card-text">{category} <span className="badge bg-success">{price} $</span></p>
            <div className="btn-group " >
              <button onClick={() => decrease(id)} type="button" className="btn btn-danger">-</button>
              <button type="button" className="btn btn-primary">{quantity}</button>
              <button onClick={() => increase(id)} type="button" className="btn btn-success">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCard