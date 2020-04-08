import React from 'react';

function Game({ match }) {
  
  React.useEffect(() => {
    fetchStage();
  }, []);

  const [stage,setStage] = React.useState({});
  const [answer,setAnswer] = React.useState({});
  const [count,setCount] = React.useState(0);
  const [stack,setStack] = React.useState(0);
  const [left,setLeft] = React.useState(0);

  function guessingcheck(char) {
    if(stack <= 3) {
      console.log(char);
      console.log(answer[stack]);
      if(char === answer[stack]){
        setStack(stack + 1);
        setLeft(left - 1)
      } 
      else{
        setCount(count + 1);
      }
      }
  }


  const fetchStage = async () => {
    const fetchStage = await fetch(
      `http://localhost:8080/api/stage/${match.params.id}`
    );
    const stage = await fetchStage.json();
    console.log(stage)
    setAnswer(stage.data.answer);
    setCount(0);
    setStack(0);
    setLeft(4);
  };
  return (
  <div>
      <h1>Guessing Game</h1>
      <p>Please Choose A or B or C or D to guess the first character</p>
      <p>Answer: {stack > 0 ? answer[0]: "_ "}{stack > 1 ? answer[1]: "_ "}{stack > 2 ? answer[2]: "_ "}{stack > 3 ? answer[3]: "_"}</p>
      <p>Character(s)remaining: {left}</p>
      <p>Fail: {count}</p>   
      <p style={{display :"inline-block"}}>Choose: </p>
      <button onClick= {() =>guessingcheck('A')}>A</button>
      <button onClick= {() =>guessingcheck('B')}>B</button> 
      <button onClick= {() =>guessingcheck('C')}>C</button> 
      <button onClick= {() =>guessingcheck('D')}>D</button> 
      <p style={{fontSize: 50 }}>{stack === 4 ? "YOUWIN!" : ""}</p>
      {stack ===4 ? <button onClick= {event => window.location.href='/'}>Create New Game</button> : "" }
    </div>
);
}


export default Game;
