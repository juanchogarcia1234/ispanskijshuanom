import React, { useState, useCallback } from 'react'
import ImageViewer from 'react-simple-image-viewer'

const Viewer = () => {
	const [currentImage, setCurrentImage] = useState(0)
	const [isViewerOpen, setIsViewerOpen] = useState(false)
	const images = [
		'images/spravochnik-po-nepravilnym-glagolam-nastoyasshego-v-ispanskom (1).jpg',
		'images/spravochnik-po-nepravilnym-glagolam-nastoyasshego-v-ispanskom (2).jpg',
		'images/spravochnik-po-nepravilnym-glagolam-nastoyasshego-v-ispanskom.jpg',
	]

	const openImageViewer = useCallback((index) => {
		setCurrentImage(index)
		setIsViewerOpen(true)
	}, [])

	const closeImageViewer = () => {
		setCurrentImage(0)
		setIsViewerOpen(false)
	}

	return (
		<div className="text-center pt-5 mt-1">
			<img
				src="images/СПРАВОЧНИК-ПО-НЕПРАВИЛЬНЫМ-ГЛАГОЛАМ-НАСТОЯЩЕГО-В-ИСПАНСКОМ.jpg"
				width="100%"
				style={{ margin: '2px', minWidth: '300px' }}
				alt=""
				className="mb-4"
			/>
			{images.map((src, index) => (
				<img
					src={src}
					onClick={() => openImageViewer(index)}
					width="150"
					key={index}
					style={{ margin: '2px', cursor: 'pointer' }}
					alt=""
				/>
			))}

			{isViewerOpen && (
				<ImageViewer
					src={images}
					currentIndex={currentImage}
					disableScroll={false}
					closeOnClickOutside={true}
					onClose={closeImageViewer}
				/>
			)}
		</div>
	)
}

export default Viewer
