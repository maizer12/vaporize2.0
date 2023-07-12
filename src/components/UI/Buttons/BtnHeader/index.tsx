import './BtnHeader.scss'
import { Link } from 'react-router-dom'
type IProps = {
	name: string
	path: string
	url: string
	sum: number
}

function BtnHeader({ name, path, url, sum }: IProps) {
	return (
		<Link to={path} className='header-btn '>
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
