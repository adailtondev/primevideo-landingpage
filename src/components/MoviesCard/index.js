import { StyleSheet } from "react-native"
import { Image } from "react-native"
import { TouchableOpacity } from "react-native"

export const MoviesCard = (props) => {
    return (
        <TouchableOpacity>
            <Image style={styles.img} source={props.movieURL}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img: {
        marginRight: 20,
    }
})