import './about.css'

export default function About() {
      return (
            <div className='about' id="about">
                  <div className="about-left">
                              <p className="about-title-left">
                                          Quem Somos ?
                              </p>
                              <p className="about-desc-left">
                                          Somos uma confeitaria localizada na região de Curitiba - PR, nossa empresa tem o foco na produção
                                         de bolachas e cookies caseiros. Tudo que fazemos é com muito amor e paixão.
                              </p>
                  </div>
                  <hr  className='about-hr'/>
                  <div className="about-right">
                              <p className="about-title-right">
                                         Para onde Entregamos ?
                              </p>
                              <p className="about-desc-right">
                                    Nossa confeitaria está localizada apenas em Curitiba, 
                                    por esse motivo só entregamos para Curitiba e região, mas futuramente queremos
                                    abrir uma franquia na região sudeste do país.
                              </p>
                  </div>
            </div>
      )
}
