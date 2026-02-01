import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Novio from "../img/novio4.jpg";
import Foto2 from "../img/novio1.jpg";
import Foto3 from "../img/novio2.jpg";
import Foto4 from "../img/novio3.jpg";
import iglesia from "../img/iglesia.png";
import cena from "../img/cena.png";
import baile from "../img/baile.png";

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
    const eventDate = new Date("february 28, 2026 21:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(interval);
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
    }, 1000);

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

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="app-container w-100">
      <header className="header w-100">
        <h3 className="sl">¡NOS CASAMOS!</h3>
        <img src={Novio} className="novios img-fluid" alt="novios" />
        <h3 className="sl">SOFIA & LAUTARO</h3>
        <h4 className="fechafiesta">- 15/11/2025 -</h4>
      </header>

      {/* Sección de Música */}
      <div className="cancion-preferida w-100">
        <h3 className="cancion-titulo">NUESTRA CANCIÓN PREFERIDA</h3>
        <div className="music-player">
          <audio id="audioPlayer" preload="metadata">
            <source 
              src="/Perfect.mp3" 
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
          Todos los días juntos son días maravillosos y queremos que nos acompañen
          en el momento más importante de nuestras vidas.
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

        {/* Sección del salón */}
        <div className="salon w-100">
          <h1>SALÓN "LAS MARIAS"</h1>
          <h2 className="salon-subtitulo">
            RP338, San Miguel de Tucumán, Tucumán
          </h2>
          <h3 className="salon-fecha">15 de Noviembre de 2025</h3>
          <a
            href="https://maps.app.goo.gl/1x22tanXTvktoYPA6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-light btn-lg btn-salon">Ver Ubicación</button>
          </a>
        </div>

        {/* Itinerario */}
        <div className="itinerario">
          <h1>ITINERARIO DE LA FIESTA</h1>

          <div className="row w-100 g-4">
            <div className="col-md-4 col-12">
              <div className="evento">
                <img src={iglesia} alt="iglesia" className="itinerarioimg img-fluid" />
                <h4 className="itinerariotext">CEREMONIA</h4>
                <h5 className="itinerariop">Iglesia Nuestra Señora del Valle</h5>
                <h5 className="itinerariop">20:30hs</h5>
              </div>
            </div>

            <div className="col-md-4 col-12">
              <div className="evento">
                <img src={cena} alt="cena" className="itinerarioimg img-fluid" />
                <h4 className="itinerariotext">CENA</h4>
                <h5 className="itinerariop">22:00hs</h5>
              </div>
            </div>

            <div className="col-md-4 col-12">
              <div className="evento">
                <img src={baile} alt="baile" className="itinerarioimg img-fluid" />
                <h4 className="itinerariotext">BAILE</h4>
                <h5 className="itinerariop">00:00hs</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Carrusel */}
        <div className="carrusel">
          <p className="texto">¡NUESTRA HISTORIA!</p>
          <div className="carrusel-wrapper">
            <Slider {...settings}>
              <div>
                <img src={Foto2} alt="foto2" className="carrusel-img img-fluid" />
              </div>
              <div>
                <img src={Foto3} alt="foto3" className="carrusel-img img-fluid" />
              </div>
              <div>
                <img src={Foto4} alt="foto4" className="carrusel-img img-fluid" />
              </div>
            </Slider>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer w-100">
        <p className="footer-text">Desarrollo web Agostina Jimenez</p>
      </footer>
    </div>
  );
}

export default ScreenTwo;
