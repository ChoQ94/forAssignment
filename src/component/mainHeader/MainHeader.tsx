import React, { useState } from "react";
import Name from "component2/name/Name";
import Mail from "component2/mail/Mail";
import Submit from "component2/submit/Submit";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 1110px;
  height: 83px;
  margin: 60px auto 30px;
  background-color: #323232;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type signStep = "이름" | "메일" | "제출";

export default function MainHeader() {
  const [registerData, setRegisterData] = useState();
  const [step, setStep] = useState<signStep>("이름");
  return (
    <>
      <HeaderWrapper>
        <p
          style={{
            fontSize: 32,
            color: "#ffffff",
            fontWeight: "bold",
          }}
        >
          내가 좋아하는 동물들
        </p>
      </HeaderWrapper>

      {step === "이름" && <Name onNext={() => setStep("메일")} />}

      {step === "메일" && <Mail onNext={() => setStep("제출")} />}
      {step === "제출" && <Submit />}
    </>
  );
}
