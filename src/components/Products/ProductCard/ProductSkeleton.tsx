import ContentLoader from 'react-content-loader'

const ProductSkeleton = () => (
	<ContentLoader
		speed={2}
		width={280}
		height={418}
		viewBox='0 0 280 418'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
	>
		<rect x='14' y='16' rx='0' ry='0' width='232' height='210' />
		<rect x='18' y='244' rx='0' ry='0' width='226' height='51' />
		<rect x='21' y='311' rx='0' ry='0' width='99' height='33' />
		<rect x='161' y='311' rx='0' ry='0' width='80' height='33' />
		<rect x='21' y='363' rx='0' ry='0' width='95' height='42' />
		<rect x='166' y='374' rx='0' ry='0' width='76' height='25' />
	</ContentLoader>
)

export default ProductSkeleton
