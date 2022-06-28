import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Board from "./Board";
import Card from "./Card";

function App() {
  const [cards, setCards] = useState([
    {
      id: 0,
      title: "card #1",
      details: "this is a test card!",
    },
  ]);
  return (
    <main>
      <h1>Team Sunshine Inspiration Board</h1>
      <Board></Board>
      <Card></Card>
    </main>
  );
}

export default App;
