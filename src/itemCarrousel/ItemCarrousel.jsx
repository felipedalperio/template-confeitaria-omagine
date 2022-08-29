import './itemCarrousel.css'

export default function ItemCarrousel(props) {
      return (
            <div className='item-carrousel'>
                        <img className='img-item-carrousel'
                              src={props.img} alt="" />
            </div>
      )
}
