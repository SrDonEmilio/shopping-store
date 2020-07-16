import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";

import './addProductPage.scss'

const AddProductPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <h1>Add Product</h1>
        </Row>
        <Row>
          <Col>
            <Form>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Name:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl id="name" />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="number" id="price" />
                <InputGroup.Append className="mr-5">
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup.Append>

                <InputGroup.Prepend>
                  <InputGroup.Text>Stock:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="number" id="stock" />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Image:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="file" accept="image/*" id="image" />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Description (optional): </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl id="description" as="textarea" />
              </InputGroup>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddProductPage;
