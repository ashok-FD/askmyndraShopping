import React from "react";
import { Container, Row, Col, Button, Card, CardBody,ListGroupItem,ListGroup } from "reactstrap";
import Icon from "../../Icon/Icon";
const productDetail = props => {
  return (
    <React.Fragment>
      <Container fluid={true} className="productImageContainer">
        <Row>
          <Col md={"12"}>
            <h1 className="productName">
              {props.ProName}
              <span className="RateText">({props.Brand})</span>
            </h1>
            <p className="productDes">{props.ProSubName}</p>
            <Row>
              <Col></Col>
            </Row>
            <div>
              <span className="priceText">Rs.{props.price}</span>
              <strike className="RateText">Rs.{props.rate}</strike>
              <span className="offerText">({props.offer}% OFF)</span>
            </div>
            <br />
            <div>
              <p className="includeTax">inclusive of all taxes</p>
            </div>
            <br />
            <h4 className="productName">SELECT SIZE</h4>
            <br />
            <div className="SizeContainer">{props.SizeButtons}</div>
            <br />
            <Container>
              <Row>
                <Col md={"7"}>
                  <Button className="AddCartButton">
                    <Icon className="fa fa-shopping-bag addIcon" />
                    <span className="addText">ADD TO BAG</span>
                  </Button>
                </Col>
                <Col md={"5"}>
                  <Button className="WhislistButton">
                    <Icon className="fa fa-bookmark" />
                    <span className="addText">WISHLIST</span>
                  </Button>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <br />
        <Card>
          <CardBody>
            <h6 className="TagCard">
              Best Price :&nbsp;
              <span className="TagPrice">Rs.{props.price}</span>
            </h6>
            <br />
            <h6 className="TagCard">
              Applicable on:Order above&nbsp;
              <span className="TagPrice">Rs.{props.rate}</span>
            </h6>
            <h6 className="TagCard">
              Product code:&nbsp;
              <span className="TagCode">{props.Code}</span>
            </h6>
            <h6 className="TagCard">
              Max Discount :&nbsp;
              <span className="TagOffer">{props.offer}% </span>
              of MRP(Your total saving :&nbsp;
              <span className="TagSave">Rs.{props.saving}</span>)
            </h6>
          </CardBody>
        </Card>
        <br />
        <h4>Specifications</h4>
        <br />
        <Row>
          <Col md={"6"}>
          <ListGroup>
                  <ListGroupItem className="specificationContents">
                    Brand :&nbsp;<span className="specificationContent">{props.Brand}</span>
                  </ListGroupItem>
                  <ListGroupItem className="specificationContents">
                    Product :&nbsp;<span className="specificationContent">{props.ProName}</span>
                  </ListGroupItem>
                  <ListGroupItem className="specificationContents">
                    Sizes :&nbsp;<span className="specificationContent">{props.sizes}</span>
                  </ListGroupItem>
                  <ListGroupItem className="specificationContents">
                    Price:&nbsp;<span className="specificationContent">{props.price}</span>
                  </ListGroupItem>
                </ListGroup>
          </Col>
          <Col md={"6"}>
          <ListGroup>
                  <ListGroupItem className="specificationContents">
                    Product code :&nbsp;<span >{props.Code}</span>
                  </ListGroupItem>
                  <ListGroupItem className="specificationContents">
                    Order above :&nbsp;<span className="specificationContent">{props.rate}</span>
                  </ListGroupItem>
                  <ListGroupItem className="specificationContents">
                    Offer :&nbsp;<span className="specificationContent">{props.offer}%</span>
                  </ListGroupItem>
                  <ListGroupItem className="specificationContents">
              Saving :&nbsp;<span className="specificationContent">{props.saving}</span>
                  </ListGroupItem>
                </ListGroup>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default productDetail;
