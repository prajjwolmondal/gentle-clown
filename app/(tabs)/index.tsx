import JokeArea from "@/components/JokeArea";
import { styles } from "@/constants/DefaultStyles";
import { ImageBackground, View } from "react-native";

export default function HomeScreen() {
    return (
        <ImageBackground source={require('./wallpaper.jpeg')} style={{ flex: 1}} imageStyle={{ opacity: 0.85}}>
            <View style={[styles.container, {flexDirection: 'column'},]}>
                    <View style={{ flex: 0.1}} />
                    <JokeArea />
            </View>
        </ImageBackground>
    )
}