import './Footer.css'

const Footer = () => {
  return(
    <footer className='footer'>

      <div className="footer__top">
        <div className="footer__column">
          <h2 className='footer__title footer__title_left'>Подписаться на новости</h2>
          <form action="" className="footer__form form">
            <input className='form__email' type="email" placeholder='Введите email' name='email'/>
            <button className='form__btn btn__reset' type="button">подписаться</button>
          </form>
        </div>
        <div className="footer__column">
          <h2 className='footer__title footer__title_right'>Наши соцсети</h2>
          <div className="footer__social social">
            <a href="https://www.instagram.com/thedom.vip/" className="social__instagram"><span>Instagram</span></a>
            <a href="https://www.facebook.com/theDOM.vip/" className="social__facebook"><span>Facebook</span></a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__column left">
          <a className="footer__location "
             href="https://yandex.ru/maps/213/moscow/?ll=37.515429%2C55.761783&mode=search&oid=211261527429&ol=biz&z=16"
          >Москва, Шелепихинская набережная 34к2</a>
          <a className="footer__email" href="mailto:arenda@thedom.vip" >info@thedom.vip</a>
          <a className="footer__phone" href="https://thedom.vip/tel:+74957894170" >+7 (495) 789-41-70</a>
        </div>
        <div className="footer__column right">
          <div className="footer__powered">Дизайн и разработка - Andrey</div>
          <div className="footer__copyright">Copyright © 2021</div>
        </div>

      </div>

    </footer>
  )
}
export default Footer