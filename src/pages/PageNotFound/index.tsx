import { Link } from 'react-router-dom'
import Breadcrumbs from '../../components/UI/Breadcrumbs'
import BuyButton from '../../components/UI/Buttons/BuyButton'
import './PageNotFound.scss'

function PageNotFound() {
	const breadcrumbs = ['Головна', 'Не знайдено']
	return (
		<main className='not-found'>
			<div className='not-found__inner'>
				<Breadcrumbs breadcrumbs={breadcrumbs} />
				<h1 className='not-found__title'>Страницы не существует</h1>
				<div className='not-found__img'>404</div>
				<Link to='/'>
					<BuyButton width={133}>На главную</BuyButton>
				</Link>
			</div>
		</main>
	)
}

export default PageNotFound
