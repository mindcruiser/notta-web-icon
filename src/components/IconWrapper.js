import React, { useCallback } from "react";
import styled from "styled-components";
import $message from "message-like-antd";
import "message-like-antd/src/theme/message.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px;
  padding: 8px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color ease 0.2s;
  :hover {
    background-color: #3089f033;
  }
  svg {
    margin: 36px 0;
  }
`;

export default ({ children, name }) => {
  const onCopy = useCallback((text, success) => {
    if (success) {
      $message.success(`【 ${text} 】has copied to clipboard`);
    } else {
      $message.error(`Something went wrong, please copy it manually`);
    }
  });
  return (
    <CopyToClipboard text={name} onCopy={onCopy}>
      <IconWrapper>{children}</IconWrapper>
    </CopyToClipboard>
  );
};
