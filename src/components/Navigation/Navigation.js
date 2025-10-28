import React from "react";
import "./Navigation.css";

const Navigation = ({ races, onRaceSelect, currentRaceId }) => {
    return (
        <nav className="race-navigation">
            <ul>
                {races.map((race) => (
                    <li key={race.id}>
                        <button className={race.id === currentRaceId ? 'active' : ''} onClick={() => onRaceSelect(race.id)}>
                            {race.name}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;