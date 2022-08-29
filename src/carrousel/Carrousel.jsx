import './carrosel.css'
import Carousel from "react-elastic-carousel";
import ItemCarrousel from '../itemCarrousel/ItemCarrousel';

const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 }
];

export default function Carrousel() {
      return (
            <div className='carrousel' id="photo">
                  <div className="title-carrousel">
                        <h1 className="text-carrousel"><i class="far fa-images"/> Galeria de fotos</h1>
                  </div>
                  <Carousel breakPoints={breakPoints}>
                        <ItemCarrousel img="./images/imagem_27.jpeg" />
                        <ItemCarrousel img="./images/imagem_19.jpeg" />
                        <ItemCarrousel img="./images/imagem_32.jpeg" />
                        <ItemCarrousel img="./images/imagem_9.jpeg" />
                        <ItemCarrousel img="./images/imagem_13.jpeg" />
                        <ItemCarrousel img="./images/imagem_12.jpeg" />
                        <ItemCarrousel img="./images/imagem_18.jpeg" />
                        <ItemCarrousel img="./images/imagem_28.jpeg" />
                        <ItemCarrousel img="./images/imagem_16.jpeg" />
                        <ItemCarrousel img="./images/imagem_20.jpeg" />
                        <ItemCarrousel img="./images/imagem_21.jpeg" />
                        <ItemCarrousel img="./images/imagem_31.jpeg" />
                        <ItemCarrousel img="./images/imagem_2.jpeg"/>
                        <ItemCarrousel img="./images/imagem_7.jpeg"/>    
                  </Carousel>
            </div>
      )
}
