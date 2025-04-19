// src/components/Secciones.jsx
import React from 'react';

// Asumiendo que las imágenes están en la carpeta public/images/

function Secciones() {
  return (
    <>
      {/* */}
      <section id="one" className="wrapper style2">
        <div className="inner">
          <div className="grid-style">
            <div>
              <div className="box">
                <div className="image fit">
                  <img src="/images/pic02.jpg" alt="" width="600" height="300" />
                </div>
                <div className="content">
                  <header className="align-center">
                    <p>maecenas sapien feugiat ex purus</p>
                    <h2>Lorem ipsum dolor</h2>
                  </header>
                  <p> Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada.</p>
                  <footer className="align-center">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="button alt">Learn More</a>
                  </footer>
                </div>
              </div>
            </div>
            <div>
              <div className="box">
                <div className="image fit">
                  <img src="/images/pic03.jpg" alt="" width="600" height="300" />
                </div>
                <div className="content">
                  <header className="align-center">
                    <p>mattis elementum sapien pretium tellus</p>
                    <h2>Vestibulum sit amet</h2>
                  </header>
                  <p> Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada.</p>
                  <footer className="align-center">
                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="button alt">Learn More</a>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* */}
      <section id="two" className="wrapper style3">
        <div className="inner">
          <header className="align-center">
            <p>Nam vel ante sit amet libero scelerisque facilisis eleifend vitae urna</p>
            <h2>Morbi maximus justo</h2>
          </header>
        </div>
      </section>

      {/* */}
      <section id="three" className="wrapper style2">
        <div className="inner">
          <header className="align-center">
            <p className="special">Nam vel ante sit amet libero scelerisque facilisis eleifend vitae urna</p>
            <h2>Morbi maximus justo</h2>
          </header>
          <div className="gallery">
            <div>
              <div className="image fit">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#"><img src="/images/pic01.jpg" alt="" width="600" height="300" /></a>
              </div>
            </div>
            <div>
              <div className="image fit">
                 {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#"><img src="/images/pic02.jpg" alt="" width="600" height="300" /></a>
              </div>
            </div>
            <div>
              <div className="image fit">
                 {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#"><img src="/images/pic03.jpg" alt="" width="600" height="300" /></a>
              </div>
            </div>
            <div>
              <div className="image fit">
                 {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#"><img src="/images/pic04.jpg" alt="" width="600" height="300" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Secciones;