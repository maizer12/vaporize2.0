import { AppSelector } from '../../../hooks'
import FavoriteItem from '../FavoriteItem'
import './FavoriteItems.scss'
function FavoriteItems() {
	const items = AppSelector(state => state.favoriteSlice.favoriteItems)

	return (
		<ul className='favorite-items'>
			{items.map((e, i) => (
				<FavoriteItem index={i} key={i} element={e} />
			))}
		</ul>
	)
}

export default FavoriteItems
