import './menu.css'

export default function menu() {
      return (
            <div className='menu'>
                  <div className='menu-left'>
                        <p><b>Fale conosco</b></p>
                        <div className="social-menu">
                               <a href='#'><i className='fab fa-youtube'> Youtube</i></a>
                               <a href='#'><i className='fab fa-instagram-square'> Instagram</i></a>
                               <a href='#'><i class="fab fa-pinterest-square"> Pinterest</i></a>
                               <a href='#'><i class="fab fa-whatsapp-square"> WhatsApp</i></a>
                        </div>
                  </div>
                  <div className='menu-center'>
                        <div className="menu-center-content">
                              <p className='bem-vindo-menu'>Seja Bem-vindo</p>
                              <div className='logo-menu'>
                                          <p>Omagine</p>
                              </div>
                              <div className='barra-pesquisa'>
                                          <i className="iconP fas fa-search"></i> <input className='search-menu' placeholder='O que procura?'/>
                              </div>  
                       </div>
                  </div>
                  <div className='menu-right'>
                      <ul className='menu-menu'>
                            <li   className="menu-item" ><a>Conta  <br /> Login / cadastro</a></li>
                            <li   className="menu-item" ><a>Meu Carrinho </a></li>
                            <li   className="menu-item" ><a>Rastrear pedido</a></li>
                            <li   className="menu-item" ><a>Fale conosco</a></li>
                      </ul>
                  </div>

            </div>
      )
}
