import React from "react";
import { useHistory } from "react-router-dom";
import {
  Input,
  Image,
  Row,
  Col,
  Button,
  Space,
  Checkbox,
  Radio,
  Select,
  Typography,
} from "antd";

const { Option } = Select;
const { Title } = Typography;

const style = {
  background: "#5fb082",
  padding: "8px 0",
  height: "70vh",
  paddingLeft: 120,
  paddingTop: 70,
};
const handleWinrate = (value) => {
  localStorage.setItem("winrate", value);
  // console.log(e)
};

function Home() {
  const history = useHistory();

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  function handleClick() {
    history.push("/dashboard");
    openInNewTab("https://172.104.87.222/home/register?code=10004")
  }
  return (
    <>
      <div
        style={{
          backgroundColor: "#12291c",
          paddingBottom: 30,
        }}
      >
        <div
          style={{
            minHeight: "30vh",
            backgroundColor: "#0d120e",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "50px",
          }}
        >
          <Title style={{ color: "#fff" }}>Welcome to Cheat Engine</Title>
          <Image
            style={{ height: "200px", width: "200px" }}
            preview={false}
            src="https://img1.pngdownload.id/20180324/fzq/kisspng-2013-singapore-cyberattacks-anonymous-security-hac-anonymous-mask-5ab5d1467e8178.4964785115218650305182.jpg"
          />
        </div>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div style={style}>
              <Title level={2}>Cheat Engine</Title>
              <Checkbox.Group style={{ width: "100%" }} onChange="">
                <Row>
                  <Col span={24}>
                    <Checkbox value="A">Auto Scatter</Checkbox>
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
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>
              <Title level={2}>Provider Slot</Title>
              <Radio.Group onChange="" value="">
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
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>
              <Title level={2}>Best Fitur</Title>
              <Space direction="vertical">
                <Select
                  defaultValue="Auto Winrate 68,9%"
                  style={{ width: 200 }}
                  onChange={handleWinrate}
                >
                  <Option value="68.9">Auto Winrate 68,9%</Option>
                  <Option value="96.9">Auto Winrate 86,9%</Option>
                  <Option value="97.3">Auto Winrate 97,3%</Option>
                  <Option value="99.9">Auto Winrate 99,9%</Option>
                </Select>
                <Select
                  defaultValue="Auto Spin"
                  style={{ width: 200 }}
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
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>
              <Title level={2}>Hack Now!</Title>
              <Space direction="vertical">
                <Input placeholder="Username" />
                 <Button
                    type="primary"
                    block
                    danger
                    onClick={handleClick}
                  >
                    Hacked
                  </Button>

              </Space>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
