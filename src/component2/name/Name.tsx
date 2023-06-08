import React, { useState } from "react";
import styled from "styled-components";

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 720px;
  width: 360px;
  background-color: wheat;
  margin: auto;
`;

const Input = styled.input`
  width: 200px;
  margin: 20px;
`;

const Button = styled.button`
  width: 300px;
  height: 40px;
  color: white;
  background-color: #1a6dff;
  border: none;
  border-radius: 6px;
  margin: 20px auto;
`;

interface Props {
  onNext: any;
}

export default function Name(props: Props) {
  const { onNext } = props;
  const [name, setName] = useState<string>("");

  return (
    <NameWrapper>
      <div>
        <p>이름</p>
        <Input onChange={(e) => setName(e.target.value)}></Input>
      </div>
      <Button onClick={onNext}>g2</Button>
    </NameWrapper>
  );
}
