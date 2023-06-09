import React from "react";
import { useNavigate } from "react-router-dom";

export default function Submit(props: any) {
  const router = useNavigate();
  return (
    <button
      onClick={() => {
        console.log(props);
        router("/");
      }}
    >
      제출
    </button>
  );
}
