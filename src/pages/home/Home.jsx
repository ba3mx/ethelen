import React from "react";
import { useHistory } from "react-router-dom";
import {
  Input,
  Image,
  Row,
  Col,
  Space,
  Checkbox,
  Radio,
  Select,
  Typography,
} from "antd";

import logo from "../../assets/images/logo.png";

import "./home.css";
const { Option } = Select;
const { Title } = Typography;

const handleWinrate = (value) => {
  localStorage.setItem("winrate", value);
};

function Home() {
  const history = useHistory();

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  function handleClick() {
    var inputValue = document.getElementById("input").value;
    if(inputValue.length <= 5) {
      alert("input username longer")
    }
    if(inputValue.length > 5) {
      history.push("/dashboard");
    openInNewTab("https://172.105.212.229");
    }
  }
  return (
    <>
      <div className="body__container">
        <Row gutter={16}>
          <div className="header__container">
            <Image
              style={{
                height: "300px",
                width: "300px",
                zIndex: -1,
                marginTop: "-80px",
                marginBottom: "-80px",
              }}
              preview={false}
              src={logo}
            />
            <Title level={3} style={{ color: "#006400", textAlign: "center" }}>
              CHEAT SLOT
            </Title>

            <div className="hack__login">
              <Input placeholder="*Username" id="input"/>
              <br />
              <button
                type=""
                block
                onClick={handleClick}
                className="hack__button"
              >
                Hacked
              </button>
            </div>
          </div>
        </Row>
        <div className="main__info">
          <div className="main__info__odd">
            <Title level={3} style={{ color: "#333333" }}>
              CHEAT ENGINE
            </Title>
            <Checkbox.Group
              style={{ width: "100%", padding: "20px" }}
              onChange=""
              gutter={10}
            >
              <Row>
                <Col span={24}>
                  <Checkbox width="200px" value="Auto Scatter">
                    Auto Scatter
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="Auto WILD">Auto WILD</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="Maxwin">Maxwin</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="Sensational">Sensational</Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox value="Auto Win">Auto Win</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </div>
          <div className="main__info__odd">
            <Title level={3} style={{ color: "#333333" }}>
              PROVIDER SLOT
            </Title>
            <Radio.Group style={{ width: "100%", padding: "20px" }}>
              <Space direction="vertical">
                <Radio value="Pragmatic Play">Pragmatic Play</Radio>
                <Radio value="Habanero">Habanero</Radio>
                <Radio value="Spagegaming">Spagegaming</Radio>
                <Radio value="PG Soft">PG Soft</Radio>
                <Radio value="CQ9">CQ9</Radio>
                <Radio value="Joker">Joker</Radio>
                <Radio value="iSoftbet">iSoftbet</Radio>
                <Radio value="PlayTech">PlayTech</Radio>
              </Space>
            </Radio.Group>
          </div>
          <div className="main__info__odd">
            <Title level={3} style={{ color: "#333333" }}>
              BEST FITUR
            </Title>
            <Space direction="vertical">
              <Select
                defaultValue="Auto Winrate 97,3%"
                style={{ width: 250 }}
                onChange={handleWinrate}
              >
                <Option value="97.3">Auto Winrate 97,3%</Option>
                <Option value="99.9">Auto Winrate 99,9%</Option>
              </Select>
              <Select
                defaultValue="Auto Spin"
                style={{ width: 250 }}
                onChange=""
              >
                <Option value="Auto Spin">Auto Spin</Option>
                <Option value="Spin Cepat">Spin Cepat</Option>
                <Option value="Spin Turbo">Spin Turbo</Option>
                <Option value="Buy Spin">Buy Spin</Option>
                <Option value="Normal Spin">Normal Spin</Option>
                <Option value="Taruhan Ganda">Taruhan Ganda</Option>
              </Select>
            </Space>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
