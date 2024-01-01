import style from './Footer.module.scss';
import { columnFooterOne, columnFooterTwo, columnFooterThree } from './_const';
import { HTag, PTag, LinkTag } from '../../common';
import { FC } from 'react';
import { FooterColumn } from './FooterColumn';

export const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <ul className={style['footer-inner']}>
          <FooterColumn items={columnFooterTwo} name="Контакти">
            <div className={style.contact}>
              <LinkTag path="tel:+380680000000" isTag={true}>
                +38 (000) 000 00 00
              </LinkTag>
              <LinkTag path="tel:+380680000000" isTag={true}>
                +38 (000) 000 00 00
              </LinkTag>
            </div>
            <LinkTag path="mailto:support@site.ua" isTag={true}>
              support@site.ua
            </LinkTag>
            <PTag size="sm">Пн-Пт с 12:00 до 19:00 Сб з 12:00 до 17:00, Вс- вихідний</PTag>
          </FooterColumn>
          <FooterColumn items={columnFooterOne} name="Інформація" />
          <FooterColumn items={columnFooterTwo} name="Каталог" />
          <FooterColumn items={columnFooterThree} name="Особистий кабінет" useSocial={true} />
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
