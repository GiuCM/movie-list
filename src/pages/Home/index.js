import { Container, MovieList, Movie } from "./styles";
import { useEffect, useState } from "react";

function Home() {
	const test = process.env.REACT_APP_API_KEY

	console.log(test)
	console.log("oi")

	const [movies, setMovies] = useState([])

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
	}, [])

	return (
		<Container>
			<h1>Movies</h1>
			<MovieList>

				{movies.map(movie => {
					return (
						<Movie key={movie.id}>
							<a href="https://google.com.br">
								<img src={movie.image_url} alt={movie.title} />
							</a>
							<span>{movie.title}</span>
						</Movie>
					)
				})}
			</MovieList>
		</Container>
	)
}

export default Home;