import { Image, Modal } from "antd";
import React, { useState } from "react";

function CardDesc(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="card p-2 py-3 text-center">
      <div className="img mb-2">
        {" "}
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          width="70"
          preview={false}
          className="rounded-circle"
        />{" "}
      </div>
      <h5 className="mb-0">{props?.name}</h5>
      <small>Expertise - {props?.symptoms.join(", ")}</small>
      <div className="ratings mt-2">
        {" "}
        <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
        <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
      </div>
      <div className="mt-4 apointment">
        {" "}
        <button
          onClick={showModal}
          className="btn btn-primary text-uppercase text-white"
        >
          Book Appointment
        </button>{" "}
      </div>
      <Modal
        title="DOCTOR APPOINTMENT"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p>EMAIL - {props?.email}</p>
        <p>ADDRESS - {props?.address}</p>
        <p>PINCODE - {props?.pincode}</p>
        <p>CITY - {props?.city}</p>
        <p>STATE - {props?.state}</p>
        <p>PHONE - {props?.phone}</p>
      </Modal>
    </div>
  );
}

export default CardDesc;
