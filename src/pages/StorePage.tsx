import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";

const StorePage = () => {
  return (
    <div>
      <section>
        <h1>Store</h1>
        <Row lg={3} md={2} xs={1} className="g-3">
          {storeItems.map((item, index) => (
            <Col key={index}>
              <StoreItem {...item} />
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default StorePage;
