import './Navigation.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navigationLinks } from '../const'

function Navigation() {
	const [num, setNum] = useState<number>(0)
	return (
		<nav className='navigation'>
			<div className='navigation__content container'>
				<ul className='navigation__items'>
					{navigationLinks.map((e, i) => (
						<li
							key={e.name}
							onClick={() => setNum(i)}
							className={`navigation__item + ${num === i ? 'active' : ''}`}
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
