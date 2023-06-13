import AppLoading from 'expo-app-loading';
import { useFonts, Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';
import Navigator from './Navigate';


export default function App() {
  let [fontsLoaded] = useFonts({
    Ubuntu_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Navigator />
    );
  }
};