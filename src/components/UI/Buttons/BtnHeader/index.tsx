import './BtnHeader.scss'
import { Link } from 'react-router-dom'
type IProps = {
	setActivePagination: React.Dispatch<React.SetStateAction<number>>
	activePagination: number
	i: number
	name: string
	path: string
	url: string
	sum: number
}

function BtnHeader({
	setActivePagination,
	activePagination,
	i,
	name,
	path,
	url,
	sum,
}: IProps) {
	return (
		<Link
			to={path}
			onClick={() => setActivePagination(i)}
			key={name}
			className={`header-btn ${
				activePagination === i ? 'header-btn__active' : ''
			}`}
		>
			<div className='header-btn__icon'>
				<span
					className='header-btn__sum'
					style={{ display: sum > 0 ? '' : 'none' }}
				>
					{name}
				</span>
				<img src={url} alt='btn-icon' />
			</div>
			<p className='header-btn__desc'>{name}</p>
		</Link>
	)
}

export default BtnHeader
