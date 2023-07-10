import React from 'react'
import Breadcrumbs from '../../components/UI/Breadcrumbs'
import './contact.Module.scss'
const PageContact = () => {
	const breadcrumbs = ['Головна', 'Контакти']
	return (
		<main className='contact'>
			<div className='contact__container'>
				<Breadcrumbs breadcrumbs={breadcrumbs} />
			</div>
		</main>
	)
}

export default PageContact
