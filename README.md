# Color Pallet

## Intro
This project was inspired by [Kevin Powell's YouTube video](https://youtu.be/I9zHX-jSKpA?si=s2XEPEXCrI9APIni) on color-mix(). It takes an input of RGB values, and displays a range of lighter and darker colors based on the input color provided. The colors are created using 8 different color interpolation methods - 4 of which are based on rectangular color spaces, and the rest based on polar color spaces. 

## Built with
This project was built using React/Next and plain CSS. I wish I used something other than Next (maybe Svelte or Astro?) since the project really doesn't have much going on, and SCSS. 

## How the colors are made
I take no credit for how the colors are created - it's the same lines of codes as Kevin's. I tried playing with different ratios of mixes and different color mixes, but nothing came out as good as his. 

There are 9 columns of colors. The fifth one in the middle is the base color that is specified (or randomly chosen) at the top of the page. The colors to the left of the base color are mixed with white, and the right with black. Colors closest to the base color have a mix ratio of 90% base to 10% mix. The next set of colors has 70% to 30%. The next set has an even 50% to 50%, and the last set has 30% base to 70% mix. 

Each row uses different color interpolation method to apply different mix ratios described above. Some base colors work better than others, and some methods work better with certain base colors than others. For example, try (193, 95, 155) and see how the color pallets are similar across all methods. hsl seems a bit different from the rest, but it's nothing crazy. Then, try (74, 231, 234) and  wonder how different shades of teal turns purple, navy, pink, or even greenish yellow. 

Anyhow, here is an example of the CSS code for creating these colors: 
```css
#srgb .colorsDiv div:nth-child(1) {
	background-color: color-mix(in srgb, var(--clr-base) 30%, white);
}

#srgb .colorsDiv div:nth-child(2) {
	background-color: color-mix(in srgb, var(--clr-base) 50%, white);
}

#srgb .colorsDiv div:nth-child(3) {
	background-color: color-mix(in srgb, var(--clr-base) 70%, white);
}

#srgb .colorsDiv div:nth-child(4) {
	background-color: color-mix(in srgb, var(--clr-base) 90%, white);
}

#srgb .colorsDiv div:nth-child(5) {
	background-color: var(--clr-base);
}

#srgb .colorsDiv div:nth-child(6) {
	background-color: color-mix(in srgb, var(--clr-base) 90%, black);
}

#srgb .colorsDiv div:nth-child(7) {
	background-color: color-mix(in srgb, var(--clr-base) 70%, black);
}

#srgb .colorsDiv div:nth-child(8) {
	background-color: color-mix(in srgb, var(--clr-base) 50%, black);
}

#srgb .colorsDiv div:nth-child(9) {
	background-color: color-mix(in srgb, var(--clr-base) 30%, black);
}
```