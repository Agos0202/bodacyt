import React, { useEffect, useState } from "react";
import Novio from "../img/novio4.jpeg";
import iglesia from "../img/iglesia.png";
import anillo from "../img/anillo.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/screentwo.css";

function ScreenTwo() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("february 26, 2026 21:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  // Actualizar la barra de progreso del audio
  useEffect(() => {
    const audioPlayer = document.getElementById("audioPlayer");
    
    const updateProgress = () => {
      if (audioPlayer && audioPlayer.duration) {
        const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        const progressFill = document.getElementById("progressFill");
        if (progressFill) {
          progressFill.style.width = percent + "%";
        }
      }
    };

    if (audioPlayer) {
      audioPlayer.addEventListener("timeupdate", updateProgress);
      
      return () => {
        audioPlayer.removeEventListener("timeupdate", updateProgress);
      };
    }
  }, []);

  return (
    <div className="app-container w-100">
      <header className="header w-100">
        <h3 className="sl">¡NOS CASAMOS!</h3>
        <img src={Novio} className="novios img-fluid" alt="novios" />
        <h3 className="sl">CECILIA & TOMAS</h3>
        <h4 className="fechafiesta">- 26/02/2026 -</h4>
      </header>

      {/* Sección de Música */}
      <div className="cancion-preferida w-100">
        <h3 className="cancion-titulo">NUESTRA CANCIÓN PREFERIDA</h3>
        <div className="music-player">
          <audio id="audioPlayer" preload="metadata">
            <source 
              src="/Llegaste tu.mp3" 
              type="audio/mpeg"
            />
            Tu navegador no soporta audio HTML5.
          </audio>
          <div className="player-controls">
            <button 
              className="btn-player btn-play" 
              onClick={() => document.getElementById('audioPlayer').play()}
              aria-label="Reproducir"
            >
              ▶
            </button>
            <button 
              className="btn-player btn-pause" 
              onClick={() => document.getElementById('audioPlayer').pause()}
              aria-label="Pausar"
            >
              ⏸
            </button>
          </div>
          <div className="progress-bar" onClick={(e) => {
            const audio = document.getElementById('audioPlayer');
            if (audio && audio.duration) {
              const rect = e.currentTarget.getBoundingClientRect();
              const percent = (e.clientX - rect.left) / rect.width;
              audio.currentTime = percent * audio.duration;
            }
          }}>
            <div className="progress-fill" id="progressFill"></div>
          </div>
        </div>
      </div>

      <div className="w-100 px-3 px-md-5">
        <p className="texto">
          Encontrarnos fue maravilloso y queremos que nos acompañes en el momento más importante de nuestras vidas.
          "DAR EL SÍ PARA SIEMPRE"
        </p>

        <div className="cuenta-regresiva">
          <h3>Faltan tan solo</h3>
          <div className="tiempo">
            <div className="bloque">
              <p className="numero">{timeLeft.days}</p>
              <span className="etiqueta">Días</span>
            </div>
            <div className="bloque">
              <p className="numero">{timeLeft.hours}</p>
              <span className="etiqueta">Horas</span>
            </div>
            <div className="bloque">
              <p className="numero">{timeLeft.minutes}</p>
              <span className="etiqueta">Minutos</span>
            </div>
            <div className="bloque">
              <p className="numero">{timeLeft.seconds}</p>
              <span className="etiqueta">Segundos</span>
            </div>
          </div>
        </div>

        

        {/* Itinerario */}
        <div className="itinerario">
          <h1>ITINERARIO DE LA FIESTA</h1>

          <div className="row w-100 g-4 itinerario-grid justify-content-center">
            
            <div className="col-12 col-sm-10 col-md-6 col-xl-5 itinerario-col">
              <div className="evento h-100">
                <img src={anillo} alt="civil" className="itinerarioimg img-fluid" />
                <h4 className="itinerariotext">CIVIL</h4>
                 <h5 className="itinerariop">Juzgado de Paz - Ranchillos</h5>
                <h5 className="itinerariop">11:00hs</h5>
              </div>
            </div>

            <div className="col-12 col-sm-10 col-md-6 col-xl-5 itinerario-col">
              <div className="evento h-100">
                <img src={iglesia} alt="iglesia" className="itinerarioimg img-fluid" />
                <h4 className="itinerariotext">CEREMONIA RELIGIOSA</h4>
                <h5 className="itinerariop">Parroquia Espíritu Santo</h5>
                <h5 className="itinerariop">Ranchillos, Tucumán.</h5>
                <h5 className="itinerariop">12:15hs</h5>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="footer w-100">
        <p className="footer-text">
          <a 
            href="https://wa.me/5493813670162" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            Desarrollo web Agostina Jimenez
          </a>
        </p>
      </footer>
    </div>
  );
}

export default ScreenTwo;
