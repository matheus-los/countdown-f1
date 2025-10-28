import React from "react";
import "./StandingTable.css"

const driversData = [
  { pos: 1, name: "Oscar Piastri", team: "McLaren", pts: 346 },
  { pos: 2, name: "Lando Norris", team: "McLaren", pts: 332 },
  { pos: 3, name: "Max Verstappen", team: "Red Bull Racing", pts: 306 },
  { pos: 4, name: "George Russell", team: "Mercedes", pts: 252 },
  { pos: 5, name: "Charles Leclerc", team: "Ferrari", pts: 192 },
  { pos: 6, name: "Lewis Hamilton", team: "Ferrari", pts: 142 },
  { pos: 7, name: "Kimi Antonelli", team: "Mercedes", pts: 89 },
  { pos: 8, name: "Alexander Albon", team: "Williams", pts: 73 },
  { pos: 9, name: "Nico Hülkenberg", team: "Kick Sauber", pts: 41 },
  { pos: 10, name: "Isack Hadjar", team: "Racing Bulls", pts: 39 },
  { pos: 11, name: "Carlos Sainz", team: "Williams", pts: 38 },
  { pos: 12, name: "Fernando Alonso", team: "Aston Martin", pts: 37 },
  { pos: 13, name: "Lance Stroll", team: "Aston Martin", pts: 32 },
  { pos: 14, name: "Liam Lawson", team: "Racing Bulls", pts: 30 },
  { pos: 15, name: "Esteban Ocon", team: "Haas F1 Team", pts: 28 },
  { pos: 16, name: "Yuki Tsunoda", team: "Red Bull Racing", pts: 28 },
  { pos: 17, name: "Pierre Gasly", team: "Alpine", pts: 20 },
  { pos: 18, name: "Oliver Bearman", team: "Haas F1 Team", pts: 20 },
  { pos: 19, name: "Gabriel Bortoleto", team: "Kick Sauber", pts: 18 },
  { pos: 20, name: "Franco Colapinto", team: "Alpine", pts: 0 },
  { pos: 21, name: "Jack Doohan", team: "Alpine", pts: 0 }
];


const StandingTable = () => {
    return (
        <div className="standing-container">
            <h2>🏁Classificação de Pilotos🏁</h2>

            <table className="standing-table">
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th>Piloto</th>
                        <th>Equipe</th>
                        <th>Pontos</th>
                    </tr>
                </thead>
                <tbody>
                    {driversData.map((driver) => (
                        <tr key={driver.name}>
                            <td>{driver.pos}</td>
                            <td>{driver.name}</td>
                            <td>{driver.team}</td>
                            <td>{driver.pts}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StandingTable;