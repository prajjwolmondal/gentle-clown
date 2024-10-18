import JokeArea from "@/components/JokeArea";
import { styles } from "@/constants/DefaultStyles";
import { View } from "react-native";

export default function HomeScreen() {
    return (
        <View style={[styles.container, {flexDirection: 'column'},]}>
            <JokeArea />            
        </View>
    )
}