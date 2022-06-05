import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import CardDesc from "../common/CardDesc";
import DoctorImg from "../../assets/doctors.svg";
import Amwell from "../../assets/amwell.jpeg";
import { Button, Col, Form, Row, Select } from "antd";
const { Option } = Select;
const doctors = [
  {
    id: 1,
    img: DoctorImg,
    contact: "9785757583",
  },
  {
    id: 2,
    img: DoctorImg,
    contact: "9785757583",
  },
  {
    id: 3,
    img: DoctorImg,
    contact: "9785757583",
  },
  {
    id: 4,
    img: DoctorImg,
    contact: "9785757583",
  },
  {
    id: 5,
    img: DoctorImg,
    contact: "9785757583",
  },
  {
    id: 6,
    img: DoctorImg,
    contact: "9785757583",
  },
  {
    id: 7,
    img: DoctorImg,
    contact: "9785757583",
  },
  {
    id: 8,
    img: DoctorImg,
    contact: "9785757583",
  },
  {
    id: 9,
    img: DoctorImg,
    contact: "9785757583",
  },
  {
    id: 10,
    img: DoctorImg,
    contact: "9785757583",
  },
];

function Home() {
  const { currentUser } = useAuth();
  const [symptoms, setSymptoms] = useState([]);
  const [result, setResult] = useState("");
  // get symptoms list
  const getSymptoms = async () => {
    try {
      const response = await fetch("http://localhost:4001/api/get-symptoms");
      const result = await response.json();
      setSymptoms(result?.symptoms);
    } catch (error) {
      console.log(error, "eeerrr");
    }
  };

  useEffect(() => {
    getSymptoms();
  }, []);

  // get diagnosis
  const onHandleSubmit = async (values) => {
    console.log(values, "shsh");
    const data = values?.symptoms?.join(",");
    try {
      const response = await fetch("http://localhost:4001/api/get-diagnosis", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ symptoms: data }),
      });
      const result = await response.json();
      setResult(result?.data);
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  return (
    <div className="container-fluid Home-page">
      <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-white">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">
              {currentUser ? (
                currentUser?.email
              ) : (
                <img class="mb-4" src={Amwell} alt="" width="100" />
              )}
            </h1>
            <p className="lead fw-normal">
              AmWell provides a general symptom assessment tool to help you
              identify the symptoms of your health condition.
            </p>
            <Form onFinish={onHandleSubmit}>
              <Row>
                <Col span={20}>
                  <Form.Item name="symptoms">
                    <Select
                      size="large"
                      mode="tags"
                      style={{ width: "100%" }}
                      placeholder="Select Symptoms"
                    >
                      {symptoms?.map((item, i) => (
                        <Option key={i} value={item}>
                          {item}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Button size="large" htmlType="submit">
                    Search
                  </Button>
                </Col>
              </Row>
            </Form>
            {result && <h3>You might have - {result}</h3>}
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        <div className="row">
          {doctors.map((item, i) => (
            <CardDesc key={i} {...item} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
