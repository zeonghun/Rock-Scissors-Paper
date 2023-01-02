import logo from "./logo.svg";
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
    img: "https://media.istockphoto.com/photos/stone-pebble-gray-picture-id1288973456?b=1&k=20&m=1288973456&s=170667a&w=0&h=GBGgp4yrZv4ooDBws8yHF24sJ3rkEpObYsBWpVNKFT8=",
  },
  scissors: {
    name: "Scissors",
    img: "https://www.ikea.com/kr/en/images/products/sy-scissors__0112301_pe263788_s5.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  },
};

function App() {
  const play = (userChoice) => {
    console.log("선택됨!", userChoice);
  };
  return (
    <div>
      <div className="main">
        <Box title="You" />
        <Box title="Computer" />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>
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
    // 리액트에서는 문자열이 아닌 함수를 받아서 이벤트를 처리하기 때문에 onClick 안에서 콜백함수 형태로 함수를 전달
  );
}

export default App;
