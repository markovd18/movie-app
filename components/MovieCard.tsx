import { View, Text, ImageBackground } from 'react-native'
import { styles } from '../styles/styles';
import { Movie } from '../utils/Movie';

type Props = {
    data: Movie,
    posterSourceFolderUri?: string
}

const MovieCard: React.FC<Props> = ({data, posterSourceFolderUri}) => {

    const prepareUri = (uri?: string) => {
        if (uri && !uri.endsWith('/')) {
            return uri.concat('/');
        }
        return uri;
    }

    return (
        <ImageBackground
            source={{uri: `${prepareUri(posterSourceFolderUri)}star_wars_episode_${data.episode_number}_poster.png`}}
            imageStyle={styles.moviePoster}
            style={styles.card}
            resizeMethod='resize'
        >
            <View style={styles.movieHeader}>
                <Text style={styles.movieHeaderText}>Episode: {data.episode_number}</Text>
                <Text style={styles.movieHeaderText}>{data.title}</Text>
            </View>
        </ImageBackground>
    )

}

export default MovieCard;