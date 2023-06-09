import React, { useState } from "react";
import Name from "component2/name/Name";
import Mail from "component2/mail/Mail";
import Submit from "component2/submit/Submit";
import styled from "styled-components";
import { useRecoilState, useResetRecoilState } from "recoil";
import { textState } from "recoil/todo/atoms";

const HeaderWrapper = styled.div`
  width: 1110px;
  height: 83px;
  margin: 0px auto;
  background-color: #323232;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type signStep = "이름" | "메일" | "제출";

export default function MainHeader() {
  const [registerData, setRegisterData] = useState();

  // 값만 가져오기
  // const headcounts = useRecoilValue(headcountsState);
  // 수정만 해주기
  // const setHeadcounts = useSetRecoilState(headcountsState);
  // 초기화
  const resetHeadcounts = useResetRecoilState(textState);
  const [count, setCount] = useRecoilState(textState);
  const [boo, isBoo] = useState(false);
  console.log(count);
  const [step, setStep] = useState<signStep>("이름");

  const exper = () => {
    if (!boo) {
      setCount({
        name: "",
        mail: "zzzz",
      });
      isBoo(!boo);
    } else {
      resetHeadcounts();
      isBoo(!boo);
    }
  };
  return (
    <>
      <HeaderWrapper>
        <p
          style={{
            fontSize: 32,
            color: "#ffffff",
            fontWeight: "bold",
          }}
          onClick={exper}
        >
          내가 좋아하는 동물들
        </p>
      </HeaderWrapper>

      {/* {step === "이름" && <Name onNext={() => setStep("메일")} />}

      {step === "메일" && <Mail onNext={() => setStep("제출")} />}
      {step === "제출" && <Submit />} */}
    </>
  );
}
