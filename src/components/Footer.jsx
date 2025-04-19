// src/components/Footer.jsx
import React from 'react';
// Importa los íconos específicos que necesitas de react-icons
import { FaTwitter, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <>
      {/* */}
      <footer id="footer">
        <div className="container">
          {/* Asegúrate que tu CSS aún defina estilos para ul.icons y sus li/a si es necesario */}
          <ul className="icons">
            <li>
               {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" aria-label="Twitter"> {/* Usa aria-label para accesibilidad */}
                <FaTwitter /> {/* Usa el componente de ícono */}
                {/* Ya no necesitas <span className="label"> */}
              </a>
            </li>
            <li>
               {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
            </li>
            <li>
               {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </li>
            <li>
               {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" aria-label="Email">
                <FaEnvelope /> {/* FaEnvelope en lugar de FaEnvelopeO */}
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        Made with <a href="https://templated.co/">Templated</a> Distributed by <a href="https://themewagon.com/">ThemeWagon</a>.
      </div>
    </>
  );
}

export default Footer;