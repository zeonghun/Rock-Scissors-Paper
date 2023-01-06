import React from "react";

const Box = (props) => {
  let result;
  if (props.title == "Computer" && props.result != "tie" && props.result != "") {
    result = props.result == "win" ? "lose" : "win"; // 컴퓨터와 유저의 결과를 반대로 출력
  } else {
    result = props.result;
  }
  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img} /> {/*조건부 렌더링*/}
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
