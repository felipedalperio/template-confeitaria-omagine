import Post from '../post/Post'
import parse from 'html-react-parser'
import './posts.css'

export default function Posts() {
      return (
            <div className='posts' id="posts">
                   <h1 className="posts-title">
                         Deliciosas opções
                  </h1>
                   <div className="posts-post">
                        <Post nome="Cookies" 
                                    img="./images/imagem_19.jpeg"
                                    desc={parse(
                                                            "<b style='color:#424242;'>Tradicional: </b>sem recheio e com gotas de chocolate; <br />"+
                                                             "<b style='color:#424242;'>Recheado: </b> com nutella e gotas de chocolate."
                                                )}/>

                        <Post nome="Bolachas " 
                                    img="./images/imagem_13.jpeg"
                                    desc={parse(
                                                 "<b style='color:#424242;'>Comum:</b> sem recheio e  sem desenho; </br> "+
                                                 "<b style='color:#424242;'>Recheada:</b> com recheio e sem desenho; </br>" +
                                                  "<b style='color:#424242;'>Personalizada:</b> com formato, desenho e sem recheio."
                                                )}/>

                        <Post nome="Kits prontos" 
                                    img="./images/imagem_26.jpeg"
                                    desc={parse(
                                          "<b style='color:#424242;'>Prontos:</b> kits montados de acordo com a Confeitaria Omagine; </br> "+
                                          "<b style='color:#424242;'>Personalizados:</b> kits montados de acordo com o Cliente. </br>" 
                                         )}/>
                  </div>
            </div>
      )
}
