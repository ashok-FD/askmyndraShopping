import React  from 'react'
import { Card, CardBody, CardImg ,Row,Col, Button} from "reactstrap";
import './css/ProductCard.css';
class ProductCard extends React.Component {
    render() {
        return (
          <React.Fragment>
            <a href={`/mens/${this.props.href}`} className="a-tag">
              <Card id="productCard">
                <CardImg src={this.props.src} className="productImage" />
                <CardBody className="filterCardBodyNormal">
                  <h5 className="productName">{this.props.name}</h5>
                  <p className="productName">
                    Rate : <span className="rate">{this.props.rate}</span>
                  </p>
                  <p className="des">{this.props.des}</p>
                </CardBody>
                <div className="filterProductHover">
                  <Row>
                    <Col md={6}>
                      <Button color="danger" className="filterHoverButton">
                        Add Bag
                      </Button>
                    </Col>
                    <Col md={6}>
                      <Button color="danger" className="filterHoverButton">
                        Wishlist
                      </Button>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col lg={12} className="filterSizes">
                      {this.props.sizes}
                    </Col>
                  </Row>
                </div>
              </Card>
            </a>
          </React.Fragment>
        );
    }
}

export default ProductCard;
