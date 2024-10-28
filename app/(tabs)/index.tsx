import JokeArea from "@/components/JokeArea";
import { appTheme, styles } from "@/constants/DefaultStyles";
import { ImageBackground, View } from "react-native";
import {
    PaperProvider,
  } from 'react-native-paper';

export default function HomeScreen() {
    return (
        <PaperProvider theme={appTheme}>
            <ImageBackground source={require('./wallpaper.jpeg')} style={{ flex: 1}} imageStyle={{ opacity: 0.85}}>
                <View style={[styles.container, {flexDirection: 'column'},]}>
                        <View style={{ flex: 0.25}} />
                        <JokeArea />
                </View>
            </ImageBackground>
        </PaperProvider>
    )
}