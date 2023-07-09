import Breadcrumbs from '../../components/UI/Breadcrumbs'
import FavoritesItem from '../../components/FavoritesItem'
import { AppSelector } from '../../hooks'
import './favorites.Module.scss'

const Favorites = () => {
	const FavoritesDB = AppSelector(state => state.favoriteSlice.favoritesDB)

	const breadcrumbs = ['Головна', 'Обране']
	return (
		<main className='favorites'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<ul className='favorites__items'>
				{FavoritesDB.map((e, i) => (
					<FavoritesItem index={i} key={i} elementCart={e} />
				))}
			</ul>
		</main>
	)
}

export default Favorites
