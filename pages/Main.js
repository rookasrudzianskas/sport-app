import { StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import { MainStyles } from '../assets/styles/MainStyle';
import backgroundImage from '../assets/images/BackgroundMain.svg'


export default function Main({ navigation }) {

    const NavigateHome = () => {
        navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Welcome</Text>
            <Text style={styles.textButton} onPress={NavigateHome}>Get started</Text>
            <Image style={styles.background} source={backgroundImage} />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create(MainStyles);
