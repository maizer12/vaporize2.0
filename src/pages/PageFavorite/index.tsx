import Breadcrumbs from '../../components/UI/Breadcrumbs'
import './favorites.Module.scss'
import FavoriteItems from '../../components/Favorite/FavoriteItems'
import { AppSelector } from '../../hooks'
import EmptyState from '../../components/UI/EmptyState'
import { emptyFavorite } from './consts'

const PageFavorite = () => {
	const items = AppSelector(state => state.favoriteSlice.favoriteItems)
	const breadcrumbs = ['Головна', 'Обране']
	return (
		<main className='favorites'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			{items.length ? <FavoriteItems /> : <EmptyState {...emptyFavorite} />}
		</main>
	)
}

export default PageFavorite
