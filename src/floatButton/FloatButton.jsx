import './floatButton.css'; 


function getLinkWhastapp(number="99999999", message = "Olá! Gostaria de saber mais sobre a Omagine. :D") {
      var url = 'https://wa.me/' 
         + number 
         + '?text=' 
         + encodeURIComponent(message)
    
      return url
    }


export default function  () {
  return (
    <div className='floatButton'>
          <form method="get" action={getLinkWhastapp()}>
                        <button className='buttonWhats'  type="submit" >
                                    <i className="IconWhats fab fa-whatsapp"></i>
                        </button>
            </form>   
    </div>
  )
}
