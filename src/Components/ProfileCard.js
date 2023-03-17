import React from "react";
import { Avatar, Card, Typography, Button, Row, Col } from "antd";
import styled from "styled-components";

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function ProfileCard() {
  return (
    <div>
      <Card
        style={{
          backgroundColor: "white",
          borderRadius: "24px",
          marginTop: "-4rem",
          padding: "1rem 0 1rem 0",
          boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <WrapperStyled>
          <div style={{ display: "block" }}>
            <Avatar size={100}>A</Avatar>
          </div>
          <Typography.Title
            style={{ display: "block", marginBottom: 0, marginTop: "1rem" }}
          >
            Nguyen Van A
          </Typography.Title>
          <Typography.Title
            style={{ display: "block", marginTop: 0 }}
            level={2}
          >
            Nguyen Van A
          </Typography.Title>
          <Button
            style={{
              backgroundColor: "#10393B",
              border: "#10393B",
              width: "80%",
              borderRadius: "50px",
              color: "white",
              marginBottom: "1rem",
            }}
          >
            Edit Profile
          </Button>
          <Button
            style={{
              backgroundColor: "white",
              width: "80%",
              borderRadius: "50px",
              color: "#10393B",
              borderColor: "#10393B",
              marginBottom: "1rem",
            }}
          >
            Activity History
          </Button>
          <div
            style={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              alignContent: "space-between",
            }}
          >
            <Row>
              <Col span={12}>Following</Col>
              <Col span={12}>
                <div style={{ float: "right" }}>123</div>
              </Col>
            </Row>
            <Row>
              <Col span={12}>Followers</Col>
              <Col span={12}>
                <div style={{ float: "right" }}>123</div>
              </Col>
            </Row>
            <Row>
              <Col span={12}>Item Storage</Col>
              <Col span={12}>
                <div style={{ float: "right" }}>123</div>
              </Col>
            </Row>
          </div>
          <div style={{ width: "80%" }}>
            <Typography.Title level={5} style={{ margin: 0 }}>
              About me:
            </Typography.Title>
            <Typography.Text>Corrupti neque itaque ducimus.</Typography.Text>
          </div>
        </WrapperStyled>
      </Card>
    </div>
  );
}
