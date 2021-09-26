import React, { useState, useEffect } from "react";
import { Image, Row, Col, Typography } from "antd";
import Moment from "react-moment";
import { createAPIEndpoint, ENDPIONTS } from "../../api";
import Timer from "../../component/Timer";
import "./dashboard.css";

const { Title, Text } = Typography;
const style = {
  background: "#5fb082",
  padding: "8px 0",
  height: "70vh",
};

export default function Dashboard() {
  let selectedWinrate = localStorage.getItem("winrate");
  console.log(selectedWinrate);
  const [winrate] = useState(selectedWinrate);
  const [depoValue, setDepoValue] = useState([]);
  const [transactionDate, setTransactionDate] = useState([]);

  var deposit = "";
  if (winrate === "68.9") {
    deposit = "008";
  }
  if (winrate === "96.9") {
    deposit = "006";
  }
  if (winrate === "97.3") {
    deposit = "003";
  }
  if (winrate === "99.9") {
    deposit = "009";
  }

  useEffect(() => {
    createAPIEndpoint(ENDPIONTS.Transaction)
      .fetchAll()
      .then((res) => {
        setTransactionDate(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(transactionDate, "transactionDate >>");
  useEffect(() => {
    createAPIEndpoint(ENDPIONTS.Deposite)
      .fetchAll()
      .then((res) => {
        setDepoValue(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(depoValue, "sdjflasifh");

  return (
    <>
      <div className="main__body">
        <div className="header">
          <Title style={{ color: "#fff" }}>Slot Hacked</Title>
          <Image
            style={{ height: "200px", width: "200px" }}
            preview={false}
            src="https://img1.pngdownload.id/20180324/fzq/kisspng-2013-singapore-cyberattacks-anonymous-security-hac-anonymous-mask-5ab5d1467e8178.4964785115218650305182.jpg"
          />
        </div>
        <Row gutter={16} className="main__info">
          <Col className="gutter-row" span={4}>
            <div style={style} className="main__info__items">
              <div
                style={{
                  height: 200,
                  backgroundColor: "ThreeDLightShadow",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Title level={4}>EXPIRED CHEAT TANGGAL:</Title>

                {transactionDate.map((item, index) => (
                  <Title key={index} level={4} style={{ color: "white" }}>
                    <Moment format="DD MMMM YYYY" withTitle>
                      {item.transactionDate}
                    </Moment>
                  </Title>
                ))}
              </div>
              <div
                style={{
                  marginTop: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Title level={4}>TIME</Title>
                <Title level={4} style={{ color: "white" }}>
                  <Timer minutes={10} seconds={10} />
                </Title>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={16}>
            <div
              className="main__info__items"
              style={{
                background: "#5fb082",
                padding: "8px 0",
                height: "70vh",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Title level={2}>INFO PENTING!</Title>
              <Title level={4}>Win Rate {winrate} MAXWIN</Title>
              <Title level={5}>Berlaku untuk ALL Games Slot</Title>
              <Title level={5}>
                Konfirmasi aktivasi Cheat Slot dengan Winrate {winrate}!
              </Title>
              <Title level={5}>WAJIB DEPOSIT</Title>
              {depoValue.map((item, index) => (
                <Text key={index} style={{ color: "#fff", fontWeight: 600 }}>
                  Rp.{item.amount}.{deposit}{" "}
                </Text>
              ))}
              <Title level={3}>Win Rate {winrate} MAXWIN</Title>
              <span className="main__info__detail">
                SEMAKIN TINGGI ANGKA DEPOSIT SEMAKIN TINGGI KEMENANGAN YANG DI
                DAPAT
              </span>
            </div>
          </Col>

          <Col className="gutter-row" span={4}>
            <div
              className="main__info__items"
              style={{
                backgroundColor: "#67f50a",
                height: "70vh",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Title level={3}>JANGAN TUTUP</Title>
              <Title level={3}>CHEAT</Title>
              <Title level={3}>ENGINE SLOT</Title>
              <Title level={3}>SAAT BERMAIN</Title>
              <Title level={3}>AGAR</Title>
              <Title level={3}>CHEAT</Title>
              <Title level={3}>TETAP AKTIF</Title>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
