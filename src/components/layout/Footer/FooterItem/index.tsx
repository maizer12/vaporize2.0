import React from 'react';
import ILink from '../../../../types/ILink';
import { Link } from 'react-router-dom';

interface IProp {
	links: ILink[];
	name: string;
}

const FooterItem = ({ links, name }: IProp) => {
	return (
		<ul className='footer-items'>
			<li className='footer-items__item'>
				<h5 className='footer-items__name'>{name}</h5>
			</li>
			<li className='footer-items__item'>
				{links.map(e => (
					<Link to={e.path} key={e.name} className='footer-items__link'>
						{e.name}
					</Link>
				))}
			</li>
		</ul>
	);
};

export default FooterItem;
