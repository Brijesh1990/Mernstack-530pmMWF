import React,{useState} from "react";
import { Container,Row } from "react-bootstrap";
import Data from "./Data";
function ProductGrid() {
  const [filteredData, setFilteredData] = useState(Data);
  // same idea as your tShirts function
  const tShirts = () => {
    const result = Data.filter((item) => item.category === "t-shirt");
    setFilteredData(result);
  };

  // same idea as your shorts function
  const shorts = () => {
    const result = Data.filter((item) => item.category === "short");
    setFilteredData(result);
  };

  // same idea as your shorts function
  const paint = () => {
    const result = Data.filter((item) => item.category === "paints");
    setFilteredData(result);
  };

  // same idea as your shorts function
  const boot = () => {
    const result = Data.filter((item) => item.category === "shoes");
    setFilteredData(result);
  };

  const showAll = () => {
    setFilteredData(Data);
  };

 return(
    <>
      <Container className="mt-5 p-5">
        <Row className="gap-0"> 
        <h1>Products filter app</h1>
        <button type="button" onClick={showAll} className="btn btn-md btn-danger">All</button>
        <button type="button" onClick={tShirts} className="btn btn-md btn-danger">T-Shirts</button>
        <button type="button" onClick={shorts} className="btn btn-md btn-danger">Short</button>
        <button type="button" onClick={paint} className="btn btn-md btn-danger">Paints</button>
        <button type="button" onClick={boot} className="btn btn-md btn-danger">Boots</button>
        {/* fetch data  */}
   
            {filteredData.map((item,index)=>{
                return(
                    <>
                   <div className="col-md-3 prod-grid mt-5">
                    <p><img src={item.photo} alt="photo" /></p>
                    <p><b>{item.name}</b></p>
                    <p><b>Category:</b>{item.category}</p>
                    <p>Rs.{item.price}</p>
                   </div>
                </>
                )
            })}
      
        </Row>
        </Container>      
    </>
 )   
}

export default ProductGrid