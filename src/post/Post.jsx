import './post.css'
import Swal from 'sweetalert2/src/sweetalert2.js'

function callAlertSweet(){
      Swal.fire({
            title: 'Quase lá ...',
            width: 600,
            padding: '1em',
            backdrop: `
                  #75582d7c
            `,
            html:
                  '<div style="text-align: start"> Nossos pedidos são realizados via <b>whatsApp</b>, nos mande uma mensagem!</div>',
                  focusConfirm: true,
                  showCloseButton: true,
                  showCancelButton: true,
                  confirmButtonText:
                         '<i class="fab fa-whatsapp"></i> Enviar mensagem!',
                  confirmButtonAriaLabel: 'Thumbs up, great!',
                  cancelButtonText:
                        '<i class="fas fa-times"></i> outra hora ',
                  cancelButtonAriaLabel: 'outra hora',
             background: '#fff ',
           
          }).then((result) => {
            if (result.isConfirmed) {
                  window.location.replace(getLinkWhastapp());
            } 
          });
}

function getLinkWhastapp(number="554198421380", message = "Olá, Gostaria de saber mais sobre a Omagine ^^") {
      var url = 'https://wa.me/' 
         + number 
         + '?text=' 
         + encodeURIComponent(message)
    
      return url
    }
    
export default function Post( props) {

      return (
            <div className= 'post'>    
                  <img 
                        className='post-img'
                        src={ props.img }
                        alt=''
                        />
                  <div className="post-content">
                        <span className="post-title">{ props.nome }</span>
                        <p className="post-desc">
                                  {props.desc}
                        </p>
                        
                        <button type='submit' onClick={callAlertSweet} className="post-button">
                                    SAIBA MAIS <i class="fas fa-plus"></i>
                        </button>

                  </div>
            </div>
      )
}
