import './BtnHeader.scss'
import { Link, useLocation } from 'react-router-dom'
type IProps = {
	name: string
	path: string
	url: string
	sum: number
}

function BtnHeader({ name, path, url, sum }: IProps) {
	const navigate = useLocation()
	return (
		<Link
			to={path}
			className={`header-btn ${
				navigate.pathname === path ? 'header-btn-active' : ''
			}`}
		>
			<div className='header-btn__icon'>
				<span
					className='header-btn__sum'
					style={{ display: sum ? '' : 'none' }}
				>
					{sum}
				</span>
				<img src={url} alt='button icon' />
			</div>
			<p className='header-btn__desc'>{name}</p>
		</Link>
	)
}

export default BtnHeader
