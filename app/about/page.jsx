import React from 'react'
import styles from "./page.module.css"

const page = () => {
  return (
	<main className={styles.aboutContainer}>
		<iframe width="560" height="315" src="https://www.youtube.com/embed/I9zHX-jSKpA?si=AUNwN7oa-TxrXjQP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		<div>
			<p>As an aspiring front-end developer, I enjoy watching Kevin Powell's videos on YouTube. A few days ago, I came across one about color-mix() and saw the pretty colors he made by mixing different ratios of a base color with white and black. It seemed simple enough, so I made one myself. </p>
			<p>The base color can be specified or selected randomly using RGB values (default is set as 75, 125, 175). This base color is shown in the middle column of each row. Each column to the left of the base color mixes with white, and black to the right.  </p>
			<p>Each row shows the result using different color interpolation method. The first four uses rectangular color space, and the last four uses polar color space. Of course I knew nothing about the two, so I looked them up and learned that rectangular color space represents colors using intensity of red, green, and blue (literally RGB that we know) while polar color space uses hue and saturation (HSL). Yup, it makes a lot of sense, not.</p>
			<p>Apparently, the former works better with digital displays and the latter with human-centered color manipulations (because the polar color space is closely aligned with how humans perceive and describe colors). Sure.</p>
			<p>What is interesting is how off some of these colors can be from my expectation (or even just from other interpolation methods). For example, an input of 8, 136, 143 shows some wild colors using polar color space methods. But then again, some inputs seem to produce similar ranges of colors across all methods. I wonder if it has to do with the fact that the input values are in RGB?</p>
			<p>Also, I really want to know how I can get the RGB or whatever values to be able to reproduce the colors created here without having to use the color-mix(). They are pretty to look at, but how can I find/reproduce/use these colors? Do I have to use some Chrome extension that tells me what color it is? Or just use color-mix()?</p>
			<p>At any rate, I decided that I liked the results from srgb and oklab the most - these two showed a range of colors closest to what I expected to see. They would be my go-to if I ever have to use color-mix() for any of my future projects.</p>
		</div>
	</main>
  )
}

export default page