import Image from 'next/image'
import cn from 'classnames'

import styles from './index.module.css'

const ImageFill = ({ alt, aspectRatio, className, priority = false, shape = 'rounded', src }) => (
	<div className={cn(styles.imageWrapper, className)} style={{ '--aspect-ratio': aspectRatio }}>
		<Image src={src} fill alt={alt} priority={priority} className={cn(styles.image, styles[shape])} />
	</div>
)

export default ImageFill
