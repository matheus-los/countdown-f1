import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = ({raceName, raceDate, schedule}) => {
  const targetDate = new Date(raceDate).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <h1>CountDown F1 - {raceName} 2025</h1>

      <div className="countdown-timer">
        <div className="time-block">
          <span>{timeLeft.days}</span>
          <p>Dias</p>
        </div>
        <div className="time-block">
          <span>{timeLeft.hours}</span>
          <p>Horas</p>
        </div>
        <div className="time-block">
          <span>{timeLeft.minutes}</span>
          <p>Minutos</p>
        </div>
        <div className="time-block">
          <span>{timeLeft.seconds}</span>
          <p>Segundos</p>
        </div>
      </div>

      {schedule && (
        <div className="countdown-schedule">

          <h2>
            Agenda do Fim de Semana
            {schedule.isSprintWeekend && (
              <span className="sprint-badge"> (SPRINT)</span>
            )}
          </h2>

          <table className="schedule-table">
            <thead>
              <tr>
                {schedule.sessions.map((session) => (
                  <th key={session.name}>{session.name}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr>
                {schedule.sessions.map((session) => (
                  <td key={session.name}>{session.datetime}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Countdown;