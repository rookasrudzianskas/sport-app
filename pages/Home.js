import { StyleSheet, Text, Image, SafeAreaView, TextInput, View } from 'react-native';
import { HomeStyles } from '../assets/styles/HomeStyles';
import avatar from '../assets/images/avatar.svg'
import runCard from '../assets/images/cards/runCard.svg'
import powerliftingCard from '../assets/images/cards/powerliftingCard.svg'
import pushUpsCard from '../assets/images/cards/pushUpsCard.svg'
import Card from '../components/Card';
import Box from '../components/Box';

export default function Home({ navigation }) {

    const NavigateRun = () => {
        navigation.navigate('Run')
    }
    const NavigatePowerlifting = () => {
        navigation.navigate('Powerlifting')
    }
    const NavigatePushUps = () => {
        navigation.navigate('PushUps')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.hello}>Hello,</Text>
            <TextInput style={styles.input} placeholderTextColor="#000" placeholder='Your name:' />
            <Image style={styles.avatar} source={avatar} />
            <Box />
            <Text style={styles.exercises}>Sport exercises</Text>
            <View style={styles.cardList}>
                <Card click={NavigateRun} source={runCard} />
                <Card click={NavigatePowerlifting} source={powerliftingCard} />
                <Card click={NavigatePushUps} source={pushUpsCard} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create(HomeStyles);
