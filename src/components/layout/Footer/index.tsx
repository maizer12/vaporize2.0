import style from './Footer.module.scss';
import FooterItem from './FooterItem';
import { logo } from '../../../_config';
import { columnFooterOne, columnFooterTwo, columnFooterThree } from './const';
import { PTag, Socials } from '../../../common';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <ul className={style['footer-inner']}>
          <li className={style['footer-colum']}>
            <img src={logo} alt="logo" className={style.logo} />
            <div className="footer-colum__number">
              <a href="tel:+38(000)0000000" className="footer-colum__link">
                +38 (000) 000 00 00
              </a>
              <a href="tel:+38(068)0000000" className="footer-colum__link">
                +38 (068) 000 00 00
              </a>
            </div>
            <a href="mailto:support@site.ua" className="footer-colum__link">
              support@site.ua
            </a>
            <p className="footer-colum__schedule"></p>
            <PTag size="sm">Пн-Пт с 12:00 до 19:00 Сб з 12:00 до 17:00, Вс- вихідний</PTag>
          </li>
          <li className={style['footer-colum']}>
            <FooterItem name={'Інформація'} links={columnFooterOne} />
          </li>
          <li className={style['footer-colum']}>
            <FooterItem name={'Каталог'} links={columnFooterTwo} />
          </li>
          <li className={style['footer-colum']}>
            <FooterItem name={'Особистий кабінет'} links={columnFooterThree} />
            <Socials />
          </li>
        </ul>
      </div>
      <div className={style['footer-bottom']}>
        <div className="container">
          <PTag size="md">&copy; 2023 ELECTRO FLUX</PTag>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
