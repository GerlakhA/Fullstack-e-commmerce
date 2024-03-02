'use client'

import Autoplay from 'embla-carousel-autoplay'
import * as React from 'react'

import {
	CarouselContent,
	Carousel as WrapperCarousel
} from '@/components/ui/carousel'

export function Carousel() {
	const plugin = React.useRef(
		Autoplay({ delay: 2000, stopOnInteraction: true })
	)

	return (
		<WrapperCarousel
			plugins={[plugin.current]}
			className='w-[90%] flex items-center justify-center'
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}
		>
			<CarouselContent></CarouselContent>
		</WrapperCarousel>
	)
}
