import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppSelector } from '../../hooks'
import { headerMenu } from './const'
import './Header.scss'
import Language from './Language'
import Navigation from './Navigation'
import Contacts from './Contacts'
import { logo } from '../../_config'
import Search from '../Search'
import HeaderButtons from './HeaderButtons'
import Authorization from '../Authorization/Authorization'

const Header = () => {
	const patch = useLocation()
	const [loginOpen, setLoginOpen] = useState(false)
	const loginUser = AppSelector(state => state.auntificationSlice.userLogin)

	return (
		<>
			<header className='header'>
				<div className='header__top'>
					<div className='header__content container'>
						<nav className='menu'>
							{headerMenu.map(e => (
								<Link
									key={e.name}
									to={e.path}
									className={`menu__link ${
										patch.pathname === e.path ? 'active-menu' : ''
									}`}
								>
									{e.name}
								</Link>
							))}
						</nav>
						<ul className='header-items'>
							<li className='header__item'>
								<Language />
							</li>
							<li className='header__item'>
								<a href='#' className='header__link'>
									Кешбек:10
								</a>
							</li>
							<li className='header__item'>
								{loginUser.length >= 1 ? (
									<button className='header__link'>{loginUser}</button>
								) : (
									<button
										onClick={() => setLoginOpen(true)}
										className='header__link'
									>
										Увійти
									</button>
								)}
							</li>
						</ul>
					</div>
				</div>
				<div className='header-inner'>
					<div className='header-inner__content container'>
						<div className='header-inner__colum'>
							<Link to='/' className='header-inner__logo'>
								<img src={logo.header} alt='logo' />
							</Link>
							<Search />
						</div>
						<div className='header-inner__contact'>
							<Contacts />
						</div>
						<HeaderButtons />
					</div>
				</div>
				<Navigation />
			</header>
			<Authorization open={loginOpen} setOpen={setLoginOpen} />
		</>
	)
}

export default Header
