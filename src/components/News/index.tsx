import React from 'react'
import NewsItem from '../News/NewsItem'
import './news.Module.scss'
import newsData from '../../services/newsItems.json'

const News = () => {
	const images: string[] = newsData.filter((e, i) => i <= 2)
	return (
		<section className='news'>
			<h3 className='news__title'>Новини</h3>
			<div className='news__items'>
				<NewsItem images={images} />
			</div>
		</section>
	)
}

export default News
