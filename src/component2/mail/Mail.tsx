import ItemContainer from "component/itemContainer/ItemContainer";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { textState } from "recoil/todo/atoms";
import styled from "styled-components";

const MailWrapper = styled.div`
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
  onNext?: any;
}

export default function Mail(props: Props) {
  const { onNext } = props;
  const [name, setName] = useState<string>("");
  const [submitData, setSubmitData] = useRecoilState(textState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubmitData({
      name: submitData.name,
      mail: e.target.value,
    });
  };
  console.log(name);
  const router = useNavigate();
  return (
    <MailWrapper>
      <div>
        <p>메일</p>
        <Input onChange={handleChange}></Input>
      </div>
      <Button
        onClick={() => {
          router("/submit");
        }}
      >
        g2
      </Button>
    </MailWrapper>
  );
}
