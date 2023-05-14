import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Dice from "./components/Dice";
import ConfettiComponent from "./components/Confetti";

function App() {
  const [dice, setDice] = useState(generateRandomNumber());

  const [tenzies, setTenzies] = useState(false);

  const [numOfRolls, setNumOfRolls] = useState(0);

  const buttonName = tenzies ? "Reset" : "Roll";

  useEffect(() => {
    const allSameAndHeld = dice.every(
      (die) => die.value === dice[0].value && die.isHeld
    );

    if (allSameAndHeld) {
      setTenzies(true);
      console.log("Tenzies!!!!");
      console.log(`It took ${numOfRolls} rolls to get Tenzies!`);
    }
  }, [dice]);

  function generateRandomNumber() {
    const lst = [];

    for (let i = 0; i < 10; i++) {
      lst.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid(),
      });
    }

    return lst;
  }

  function rollDice() {
    if (tenzies) {
      setTenzies(false);
      setDice(generateRandomNumber());
    } else {
      setDice((prevDice) => {
        return prevDice.map((die) => {
          if (die.isHeld) {
            return die;
          }
          return { ...die, value: Math.floor(Math.random() * 6) + 1 };
        });
      });
      setNumOfRolls((prevNumOfRolls) => prevNumOfRolls + 1);
    }
  }

  function toggleDie(id, value) {
    console.log(`Die with id ${id} has value ${value}`);
    setDice((prevDice) => {
      return prevDice.map((die) => {
        if (die.id === id) {
          return { ...die, isHeld: !die.isHeld };
        }
        return die;
      });
    });
  }

  return (
    <main className="bg-customWhite h-[600px] max-w-[800px] p-20 flex flex-col justify-center gap-12 items-center">
      <h1 className="text-[40px] m-0">Tenzies</h1>
      <p className="font-normal mt-0 text-center">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="grid grid-cols-5 gap-10 mb-[40px]">
        {dice.map((die) => (
          <Dice
            key={die.id}
            id={die.id}
            value={die.value}
            isHeld={die.isHeld}
            changeState={toggleDie}
          />
        ))}
      </div>
      <button
        onClick={rollDice}
        className="bg-blue-600 w-24 h-8 rounded-md text-white hover:bg-blue-700 transition"
      >
        {buttonName}
      </button>
      {tenzies && <ConfettiComponent />}
    </main>
  );
}

export default App;
