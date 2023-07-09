import { link } from 'fs';
import React from 'react';
import './breadcrumbs.Module.scss'
type IProps = {
    breadcrumbs: string[]
}
const Breadcrumbs = ({breadcrumbs}:IProps) => {
	return (
		<section className='breadcrumbs'>
			{breadcrumbs.map((e, i) => (
				<li key={e} className='breadcrumbs__item'>{e}</li>
			))}
		</section>
	)
};

export default Breadcrumbs;