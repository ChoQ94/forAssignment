import React from "react";

export default function Submit(props: any) {
  return (
    <button
      onClick={() => {
        console.log(props);
      }}
    >
      제출
    </button>
  );
}
