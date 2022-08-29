import About from '../../about/About';
import Header from '../../header/Header'
import Posts from '../../posts/Posts';
import Carrousel from '../../carrousel/Carrousel';
import './home.css';
import FloatButton from '../../floatButton/FloatButton';

export default function Home() {
      return (
            <>
            <FloatButton />
            <Header/>
            <div className="home">
                        <Posts/>
                  <div className="about-home" >
                              <About/>
                  </div>
                  <div className="carrousel-img">
                              <Carrousel/>
                  </div>
            </div>
            </>
      )
}
