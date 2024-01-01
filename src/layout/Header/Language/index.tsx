import React from 'react'

const Language = () => {
	const [active, setActive] = React.useState<boolean>(false)

	return (
		<div className='language'>
			<button
				onClick={(): void => setActive(!active)}
				className={`language__btn ${active ? '' : 'active-length'}`}
			>
				UA
			</button>
			<span className='language__btn '>|</span>
			<button
				onClick={(): void => setActive(!active)}
				className={`language__btn ${active ? 'active-length' : ''}`}
			>
				EN
			</button>
		</div>
	)
}

export default Language
