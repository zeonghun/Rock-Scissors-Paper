import { useState } from "react";
import "./App.css";
import Box from "./component/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandScissors, faHandBackFist, faHand } from "@fortawesome/free-regular-svg-icons";

// 유저는 박스 두개를 볼 수 있다.(타이틀, 사진, 결과).
// 유저는 박스 하단에 가위바위보 버튼을 볼 수 있다.
// 버튼을 클릭하면 클릭한 아이템이 유저 박스에 보인다.
// 버튼을 클릭하면 컴퓨터 아이템은 랜덤하게 선택이 된다.
// 3번 4번의 아이템을 가지고 누가 이겼는지 승패를 나눈다.
// 박스 테두리가 결과에 따라 색이 변한다. 지면 빨간색, 이기면 초록색, 비기면 검정색이 보인다.

const choice = {
  rock: {
    name: "Rock",
    img: "https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png",
  },
  paper: {
    name: "Paper",
    img: "https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);

  const play = (userChoice) => {
    console.log("선택됨!", userChoice);
    setUserSelect(choice[userChoice]);
    let computerChoice=randomChoice();
    setComputerSelect(computerChoice);
  };

  const randomChoice=()=>{
    let itemArray = Object.keys(choice); // 랜덤값으로 객체(가위,바위,보) 중에 하나를 부여하기 위해 객체를 배열화 시킴
    let randomItem=Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} />
        <Box title="Computer" item={computerSelect} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>
          {/*리액트에서는 문자열이 아닌 함수를 받아서 이벤트를 처리하기 때문에 onClick 안에서 콜백함수 형태로 함수를 전달*/}
          <FontAwesomeIcon icon={faHandScissors} size="4x" />
        </button>
        <button onClick={() => play("rock")}>
          <FontAwesomeIcon icon={faHandBackFist} size="4x" />
        </button>
        <button onClick={() => play("paper")}>
          <FontAwesomeIcon icon={faHand} size="4x" />
        </button>
      </div>
    </div>
  );
}

export default App;
