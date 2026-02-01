import React from "react";
import "../style/screenone.css";

function ScreenOne({ onEnter }) {
  return (
    <div className="screen1-container w-100">
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <h1 className="screen1-title">Sofía & Lautaro</h1>
        <p className="screen1-subtitle">¡Te invitamos a compartir nuestro gran día!</p>
        <button className="screen1-btn btn btn-light btn-lg" onClick={onEnter}>
          Ingresar
        </button>
      </div>
    </div>
  );
}

export default ScreenOne;
