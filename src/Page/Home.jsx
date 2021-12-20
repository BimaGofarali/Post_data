import React from "react";
import { Container, Table } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <>
      <Container>
        <div className="head-home">
          <h2>Teravin test React.js</h2>
        </div>
        <div className="button-add">
          <a href={`/submission`}>
            <button> + Add data</button>
          </a>
        </div>
        <div>
          <Table striped bordered hover className="table-home">
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th colSpan="1">ID No</th>
                <th colSpan="1">Nama</th>
                <th colSpan="2"> Alamat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ID No</td>
                <td>Nama</td>
                <td>Alamat</td>
                <td>Eye</td>
              </tr>
              <tr>
                <td>ID No</td>
                <td>Nama</td>
                <td>Alamat</td>
                <td>Eye</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}

export default Home;
