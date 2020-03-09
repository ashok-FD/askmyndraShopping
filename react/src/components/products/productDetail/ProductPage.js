import React, { useState, useEffect } from "react";
import axios from "axios";
import {  Row, Col,Container,Button } from "reactstrap";
import './productDetail.css';
import ProductDetail from './productDetail';


const ProductPage = props => {
    const { match } = props;
    let { code } = match.params;
    const [productDetail, setProductDetail] = useState([]);


    useEffect(() => {
      axios.get(`http://localhost:8080/product/${code}`)
        .then(res => {
          setProductDetail(res.data);
        })
        .catch(err => console.error(err));
    },[code]);

    const productPage = () => {
        return productDetail.map((data, i) => {
          return (
            <React.Fragment>
              {data.productImage.map(x => (
                <Col lg={"6"} className="productImageCol">
                <img className="productDetailImage" src={x} alt='' />
                </Col>
              ))}
            </React.Fragment>
          );
        });
      };

  const productPageTwo = () => {
    return productDetail.map((data, i) => {
      let price = Math.floor((data.Rate - ((data.Rate / 100) * data.offer)));
      let save = data.Rate - price;
      return (
        <React.Fragment>
          <ProductDetail 
          ProName={data.name}
          Brand={data.brand}
          ProSubName={data.description}
          saving = {save}
          price={price}
          rate={data.Rate}
          Code={data.code}
          offer={data.offer}
          SizeButtons={data.size.map(x=>(
            <span><Button id={x} className="productSizeButton" value={x}>{x}</Button></span>
          ))}
          sizes={data.size.map(x=>(<span>&nbsp;{x},</span>))}
          />
        </React.Fragment>
      );
    });
  };

    return (<React.Fragment>
              <Container fluid={true}>
                    <Row>
                      <Col lg={"6"}>
                        <Container fluid={true} className="productImageContainer">
                        <Row>
                          {productPage()}
                        </Row>
                        </Container>
                      </Col>
                      <Col lg={"6"}>
                          {productPageTwo()}
                      </Col>
                    </Row>
              </Container>
    </React.Fragment>);
}

export default ProductPage;

