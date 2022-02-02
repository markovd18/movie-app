import { useEffect, useState } from "react";
import { Movie } from "../utils/Movie";
import { Sort } from "../utils/Sort";

type Data = {
    movies: Movie[]
}

const useFetchMovies = (uri: string): [
    movies: Movie[],
    sortMovies: (sort: Sort) => void,
] => {

    const [movies, setMovies] = useState<Movie[]>([]);

    const sortMovies = (sort: Sort) => {
        setMovies(prevState => {
            const newState = [...prevState];
            return newState.sort((first, second) => { 
                const diff = Number.parseInt(first.episode_number) - Number.parseInt(second.episode_number);
                return sort === Sort.EP_NUM_ASC ? diff : (- diff);
            });
        });

    }

    useEffect(() => {
        const fetchData = async () => {
            const data: Data = await (await fetch(uri)).json();
            setMovies(() => data.movies);
        };

        fetchData();
    }, []);

    return [movies, sortMovies];
}

export default useFetchMovies;