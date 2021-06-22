import React from "react";
import styled from "styled-components";

const GuideWrapper = styled.div`
  flex: 1;
  margin: 24px;
  padding: 24px;
  background-color: #3089f033;
  border-radius: 8px;
  p {
    margin: 0 0 24px;
    font-weight: bold;
  }
  pre {
    margin: 0;
    font-family: monospace;
    line-height: 2rem;
  }
`;

export default () => {
  return (
    <header
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Notta Web Icon</h1>
        <h3>MY_PACKAGE_JSON_VERSION</h3>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <GuideWrapper>
          <p>Installation</p>
          <pre>
            <code>
              npm install notticon --save <br />
              yarn add notticon
            </code>
          </pre>
        </GuideWrapper>
        <GuideWrapper>
          <p>Usage</p>
          <pre>
            <code>
              {`import { Home } from 'notta-web-icon'`}
              <br />
              {`<Home size="24" color="#009C22" >`}
            </code>
          </pre>
        </GuideWrapper>
      </div>
    </header>
  );
};
