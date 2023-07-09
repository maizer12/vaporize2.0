import BtnLink from '../../UI/Buttons/BtnLink'
import './BlogItem.scss'

interface IProps {
	images: string[]
}

const NewsItem = ({ images }: IProps) => {
	return (
		<>
			{images.map(e => (
				<div key={e} className=' blog-item'>
					<img src={e} alt='news-img' className='blog-item__img' />
					<p className='blog-item__date'>13.07.2021 | Назва категорії</p>
					<h5 className='blog-item__name'>
						Електронні сигарети краще звичайних сигарет
					</h5>
					<p className='blog-item__desc'>
						Електронні сигарети стали новим направленням в культурі куріння,
						зробивши його набагато безпечнішим...
					</p>
					<div className='blog-item__link'>
						<BtnLink path='/'>читати детальніше</BtnLink>
					</div>
				</div>
			))}
		</>
	)
}

export default NewsItem
