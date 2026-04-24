import adrianImage from '../assets/Adrian.webp'
import "../css/Adrian.css"

function Adrian () {
	return (
		<article>
			<img
				src={adrianImage}
				alt='Illustrasjon av studentprofil'
			/>
			<h2>Adrian</h2>
			<p>
				E-post:{' '}
				<a href='mailto:adrianklevm@gmail.com'>adrianklevm@gmail.com</a>
			</p>
			<p>Bachelorstudie: Digitale medier og design</p>
		</article>
	)
}

export default Adrian
