import { useCallback, useState } from 'react';
import { FlatList, ListRenderItemInfo, Text, TouchableOpacity, View } from 'react-native';
import { getNextSort, Sort } from './utils/Sort';
import { styles } from './styles/styles'
import { Movie } from './utils/Movie';
import useFetchMovies from './hooks/useFetchMovies';
import MovieCard from './components/MovieCard';

const posterSourceFolderUri: string = 'https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/public/images/';
const moviesDataUri: string = 'https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json';

const App = () => {

    const [movies, sortMovies] = useFetchMovies(moviesDataUri);
    const [sort, setSort] = useState<Sort>(Sort.NONE);


    const renderMovie = (itemInfo: ListRenderItemInfo<Movie>) => (
        <MovieCard data={itemInfo.item} posterSourceFolderUri={posterSourceFolderUri}/>
    );

    const toggleSort = useCallback(() => {
        setSort(prevState => getNextSort(prevState)); 
        sortMovies(sort);
    }, [sort]);

    return (
        <View style={styles.container}>
            <FlatList
                data={movies}
                renderItem={renderMovie}
                keyExtractor={movie => movie.episode_number}
            />
            
            <TouchableOpacity 
                style={styles.button}
                onPress={toggleSort}
            >
                <Text>Sort</Text>
            </TouchableOpacity>
        </View>
    );
}

export default App;


