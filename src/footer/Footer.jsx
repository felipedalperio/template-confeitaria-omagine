import './footer.css'

export default function Footer() {
      return (
            <div className="footer" id="footer">
                  <footer className="footer-content">
                        <div className="footer-left">
                              <div className="content-footer-left">
                                          <div className='logo-footer'>
                                                <img src="https://icons-for-free.com/iconfiles/png/512/cookie-1319971784454690183.png" alt="" />
                                          </div>     
                                                <p>Seja bem vindo a Confeitaria Omagine - A arte em fazer bolachas. <br /> Nosso objetivo 
                                                      é deixar a vida mais  suave e doce.
                                                </p>
                                                      <div className="socials">
                                                                  <a href='#'><i className='iconF fab fa-facebook'></i></a>
                                                                  <a href='#'><i className='iconF fab fa-pinterest'></i></a>
                                                                  <a href='#'><i className='iconF fab fa-instagram'></i></a>
                                                                  <a href='#'><i className='iconF fab fa-youtube'></i></a>
                                                                  <a href='#'><i className='iconF fab fa-whatsapp'></i></a>
                                                      </div>
                                    </div>
                        </div>
                        <ul className="footer-right">
                                    <ul className="box">
                                    <h2 className='title-footer'><i class="iconFR fas fa-truck" /> Envio do Produto</h2>
                                          <li>O envio  da encomenda é realizado de forma tercerizada, 
                                                      atualmente só estamos enviando para curitiba e região.</li>
                                    </ul>
                                    <ul className="feature">
                                          <h2 className='title-footer'><i class="iconFR iconRes fas fa-info"/> Quem Somos?</h2>  
                                          <li>Nossa Confeitaria tem o foco na produção de bolachas e cookies caseiros. Tudo que fazemos é com muito amor e paixão.</li>
                                    </ul>
                                    <ul className="address">
                                          <h2 className='title-footer'><i class="iconFR fas fa-map-marker-alt"/>Localização</h2>
                                      <li>Nossa empresa é localizada em Curitiba - PR.</li>
                                    </ul>
                        </ul>
                        <div className="footer-bottom">
                              <p>Todos os direitos reservados por &copy; conceitual 2022</p>
                        </div>
                  </footer>
           </div>
      )
}
