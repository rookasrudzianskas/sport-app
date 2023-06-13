import { Image, TouchableHighlight, View, StyleSheet } from 'react-native';
import { HomeStyles } from '../assets/styles/HomeStyles';

export default function Card(props) {
    return (
        <View>
            <TouchableHighlight onPress={props.click} style={styles.touch}>
                <Image style={styles.card} source={props.source} />
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create(HomeStyles);