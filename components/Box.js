import { Image, View, StyleSheet, Text } from 'react-native';
import { HomeStyles } from '../assets/styles/HomeStyles';
import backgroundBox from '../assets/images/backgroundBox.svg'
import { useState } from 'react';

export default function Box() {

    const [level, setLevel] = useState(0)

    return (
        <View style={styles.box}>
            <Text style={styles.level}>{level}</Text>
            <Text style={styles.progress}>Your progress</Text>
            <Image style={styles.backgroundBox} source={backgroundBox} />
        </View>
    )
}

const styles = StyleSheet.create(HomeStyles);