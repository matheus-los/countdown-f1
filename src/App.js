import React, { useState } from "react";
import "./App.css";

import { RACE_DATA } from "./raceData.js";
import Navigation from "./components/Navigation/Navigation.js";
import Countdown from "./components/Countdown/Countdown.js";
import GpInfo from "./components/GpInfo/GpInfo.js";
import StandingTable from "./components/StandingsTable/StandingTable.js";

function App() {
  const [selectedRaceId, setSelectedRaceId] = useState(RACE_DATA[0].id);
  const handleRaceSelect = (raceId) => {
    setSelectedRaceId(raceId);
  };
  const currentRaceData = RACE_DATA.find(race => race.id === selectedRaceId);

  return (
    <div className="app-container">
      <Navigation
        races={RACE_DATA}
        onRaceSelect={handleRaceSelect}
        currentRaceId={selectedRaceId}
      />

      <div className="main-container">
        <section className="secao-da-pagina">
          <Countdown
            raceName={currentRaceData.name}
            raceDate={currentRaceData.raceDate}
            schedule={currentRaceData.schedule}
          />
        </section>

        <section className="secao-da-pagina">
          <GpInfo
            info={currentRaceData.info}
          />
        </section>

        <section className="secao-da-pagina">
          <StandingTable />
        </section>
      </div>
    </div>
  );
};

export default App;