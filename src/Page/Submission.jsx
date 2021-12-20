import React from "react";
import { Container } from "react-bootstrap";
import MultistepForm from "./Component/MultistepForm";
import "./Submisson.css";

function Submission() {
  return (
    <>
      <Container>
        <div className="d-flex">
          <a href={`/`} style={{ marginRight: "2rem" }}>
            <button> back </button>
          </a>
          <p style={{ fontSize: "15px" }}>Form Submission</p>
        </div>
        <div>
          <div className="stepper-wrapper">
            <div className="stepper-item completed">
              <div className="step-counter"></div>
              <div className="step-name">Data Personal</div>
            </div>
            <div className="stepper-item completed">
              <div className="step-counter"></div>
              <div className="step-name">Riwayat Pendidikan</div>
            </div>
            <div className="stepper-item active">
              <div className="step-counter"></div>
              <div className="step-name">Pengalaman Kerja</div>
            </div>
            <div className="stepper-item">
              <div className="step-counter"></div>
              <div className="step-name">Keahlian</div>
            </div>
          </div>
        </div>
        <div>
          <MultistepForm />
        </div>
      </Container>
    </>
  );
}

export default Submission;
