// import {  useState } from "react";
// import Square from "./square";

// const Board = () => {
//   const [time, setTime] = useState(3);
//   const [game, setGame] = useState([null, null, null, null, null, null, null, null, null]);
//   const [player, setPlayer] = useState(true);

//   const listWinner = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   const checkWinner = () => {
//     for (let i = 0; i < listWinner.length; i++) {
//       const [p1, p2, p3] = listWinner[i];
//       if (game[p1] && game[p1] === game[p2] && game[p2] === game[p3]) {
//         return game[p1];
//       }
//     }
//     return null;
//   };
//   const winner = checkWinner();
//   let check = "";
//   if (winner) {
//     check = `Người thắng: ${winner}`;
//   } else if (!game.includes(null)) {
//     check = "Hòa";
//   } else {
//     check = `Next: ${player ? "X" : "O"}`;
//   }
//   const Reset = () => {
//     setGame([null, null, null, null, null, null, null, null, null]);
//     setPlayer(player ? "X" : "O");
//     setTime(3);
//     return;
//   }
//   return (
//     <>
//       <div className="grid grid-cols-2 gap-20"></div>
 
//       <h2>{time}</h2>
//       <h2>{check}</h2>
//       <div className="grid grid-cols-3 gap-2 w-[240px]">
//         <Square value={game[0]} position={0} handlePlay={handlePlay} />
//         <Square value={game[1]} position={1} handlePlay={handlePlay} />
//         <Square value={game[2]} position={2} handlePlay={handlePlay} />
//         <Square value={game[3]} position={3} handlePlay={handlePlay} />
//         <Square value={game[4]} position={4} handlePlay={handlePlay} />
//         <Square value={game[5]} position={5} handlePlay={handlePlay} />
//         <Square value={game[6]} position={6} handlePlay={handlePlay} />
//         <Square value={game[7]} position={7} handlePlay={handlePlay} />
//         <Square value={game[8]} position={8} handlePlay={handlePlay} />
//       </div>
//       <button onClick={Reset} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Chơi Lại</button>
     
//     </>
//   );
// };

// export default Board;