import React, { useState, useEffect } from "react";
import { Image,Typography } from "antd";
import Moment from "react-moment";
import { createAPIEndpoint, ENDPIONTS } from "../../api";
import Timer from "../../component/Timer";
import "./dashboard.css";

import logo from "../../assets/images/logo.png";

const { Title, Text } = Typography;
const color = {
  color: "#fff",
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

  useEffect(() => {
    createAPIEndpoint(ENDPIONTS.Deposite)
      .fetchAll()
      .then((res) => {
        setDepoValue(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="main__body">
        <div className="header">
          <Image
            style={{
              height: "300px" ,
              width: "300px" ,
              zIndex: -1,
              marginTop: "-80px",
              marginBottom: "-80px",
            }}
            preview={false}
            src={logo}
          />
          <Title level={2} style={{ color: "#05038d", fontWeight: 800 }}>
            SLOT HACKED
          </Title>
        </div>
        <div
          className="transaction"
          style={{
            backgroundColor: "#F5F5F5",
            padding: "10px",
            marginTop: "20px",
            width: "70vw",
          }}
        >
          <div className="transaction__date">
            {transactionDate.map((item, index) => (
              <Title className="transaction__date__item" key={index} level={5}>
                EXPIRED CHEAT TANGGAL :
                <div style={{marginLeft: 5}}>
                <Moment format="10 12 2021" withTitle>
                  {item.transactionDate}
                </Moment>
                </div>
                
              </Title>
            ))}
          </div>
          <div className="timer">
            <Title level={4} style={{ color: "white" }}>
              TIME
            </Title>
            <Title level={4} style={{ color: "white" }}>
              <Timer minutes={5} seconds={59} />
            </Title>
          </div>
          <div className="main__info__items">
            <Title level={2} style={{ ...color, fontSize: "36px" }}>
              INFO PENTING!
            </Title>
            <Title level={4} style={{ ...color, fontSize: "20px" }}>
              Win Rate {99.99}% MAXWIN
            </Title>
            <Title level={5} style={{ ...color, fontSize: "20px" }}>
              Berlaku untuk ALL Games Slot
            </Title>
            <Title level={5} style={{ ...color, fontSize: "20px" }}>
              WAJIB PECAH DEPOSIT MENJADI 2x
              CONTOH (111.111 x2) 
            </Title>
            {depoValue.map((item, index) => (
              <Text key={index} style={{ color: "#fff", fontWeight: 800 }}>
                Rp.{item.amount}.{deposit}{" "}
              </Text>
            ))}
            <Title level={3} style={color}>
              Win Rate {99}% MAXWIN
            </Title>
            <h2
              className="main__info__detail"
              style={{ ...color, fontWeight: 600 }}
            >
              SEMAKIN TINGGI ANGKA DEPOSIT SEMAKIN TINGGI KEMENANGAN YANG DI
              DAPAT
            </h2>
          </div>
          <div className="warning">
            <Title level={3} style={color}>
              JANGAN TUTUP CHEAT ENGINE SLOT SAAT BERMAIN AGAR CHEAT TETAP AKTIF
            </Title>
          </div>
        </div>
      </div>
    </>
  );
}
