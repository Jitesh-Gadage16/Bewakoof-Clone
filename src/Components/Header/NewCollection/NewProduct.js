import React from "react";
import { Container, Row, Col } from "reactstrap";
// import '../images/image1.webp'
import "./NewProduct.css";
// import { useSelector ,useDispatch} from "react-redux";


// import { useStateValue } from "../StateProvider"; 

const NewProduct = ({id,title,price,sp,image}) => {
  // const addToBasket = useSelector(state => {
  //   return state.addToBasket
  // })

  // const dispatch = useDispatch();

  // const [{ basket }, dispatch] = useStateValue();

  // console.log("this is a basket" , basket)

  // const addToBasket = () => {
  //   // dispatch the item into the data layer
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       id: id,
  //       title: title,
  //       image: image,
  //       price: price,  
  //       sp: sp,
  //     },
  //   });
  // };


  return (
    <div className="NewProduct">
      {/* <Container fluid={true} className='py-3'>
        <Row md={2} lg={4}>
          <Col> */}
            <div className="product-div">
              <div className="product-img">
                <img src={image}></img>
              </div>
              <div className="product-dsc">
                <div className="product-title">
                  <h3>{title}</h3>
                </div>
                <div className="product-price">
                  ₹ {sp} <span className="product-actual-price">{price}</span>
                </div>
                <button >Add to Basket</button>
              </div>
            </div>
          {/* </Col> */}

          {/* <Col>
          <div className="product-div">
              <div className="product-img">
                <img src="https://images.bewakoof.com/t320/the-chibi-bat-printed-t-shirt-men-s-printed-t-shirts-364770-1624277462.gif"></img>
              </div>
              <div className="product-dsc">
                <div className="product-title">
                  <h3>The Chibi Bat Printed T-Shirt</h3>
                </div>
                <div className="product-price">
                  ₹ 399 <span className="product-actual-price">799</span>
                </div>
              </div>
            </div>
          </Col> */}

          {/* <Col>
          <div className="product-div">
              <div className="product-img">
                <img src="https://images.bewakoof.com/t320/believe-loki-half-sleeve-t-shirt-men-s-printed-t-shirts-368885-1623851273.jpg"></img>
              </div>
              <div className="product-dsc">
                <div className="product-title">
                  <h3>Believe Loki Half Sleeve T-Shirt</h3>
                </div>
                <div className="product-price">
                  ₹ 399 <span className="product-actual-price">799</span>
                </div>
              </div>
            </div>
          </Col> */}

          {/* <Col>
          <div className="product-div">
              <div className="product-img">
                <img src="https://images.bewakoof.com/t320/iron-face-round-neck-vest-avl-black-men-s-printed-round-neck-vest-374209-1624870321.jpg"></img>
              </div>
              <div className="product-dsc">
                <div className="product-title">
                  <h3>Iron Face Round Neck Vest (AVL) Black</h3>
                </div>
                <div className="product-price">
                  ₹ 399 <span className="product-actual-price">799</span>
                </div>
              </div>
            </div>
          </Col> */}

          

        
        {/* </Row>
      </Container> */}
    </div>
  );
};

export default NewProduct;
