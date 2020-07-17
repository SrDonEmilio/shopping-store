import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { new_product } from "../../redux/actions/productActions";

import "./addProductPage.scss";
import { useHistory } from "react-router-dom";

const AddProductPage = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: "", price: "", stock: "" });
  const updateFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const dispatchAndRedirect = () => {
    dispatch(new_product({ ...formData }));
    history.push("/");
  };

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
                <FormControl
                  name="name"
                  id="name"
                  onChange={(e) => updateFormData(e)}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="number"
                  name="price"
                  id="price"
                  onChange={(e) => updateFormData(e)}
                />
                <InputGroup.Append className="mr-5">
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup.Append>

                <InputGroup.Prepend>
                  <InputGroup.Text>Stock:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="number"
                  name="stock"
                  id="stock"
                  onChange={(e) => updateFormData(e)}
                />
              </InputGroup>

              {
                // Estructure for image and description implementation
                // <InputGroup className="mb-3">
                //   <InputGroup.Prepend>
                //     <InputGroup.Text>Image:</InputGroup.Text>
                //   </InputGroup.Prepend>
                //   <FormControl type="file" accept="image/*" id="image" />
                // </InputGroup>
                // <InputGroup className="mb-3">
                //   <InputGroup.Prepend>
                //     <InputGroup.Text>Description (optional): </InputGroup.Text>
                //   </InputGroup.Prepend>
                //   <FormControl id="description" as="textarea" />
                // </InputGroup>
              }

              <Button
                variant="primary"
                onClick={(e) => {
                  dispatchAndRedirect();
                }}
              >
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
