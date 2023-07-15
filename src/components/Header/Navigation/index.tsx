import './Navigation.scss'
import { Link, useLocation } from 'react-router-dom'
import { navigationLinks } from '../const'

function Navigation() {
	const navigate = useLocation()
	return (
		<nav className='navigation'>
			<div className='navigation__content container'>
				<ul className='navigation__items'>
					{navigationLinks.map((e, i) => (
						<li
							key={e.name}
							className={`navigation__item + ${
								e.path === navigate.pathname ? 'active' : ''
							}`}
						>
							<Link to={e.path} className='navigation__link'>
								{!i && <img src='/img/navbar.svg' alt='catalog' />}
								{e.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}

export default Navigation
