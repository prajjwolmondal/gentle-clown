import { Text, View } from "react-native";
import { styles } from "@/constants/DefaultStyles";

export default function InfoScreen() {
    return (
        <View style={[styles.container, {flexDirection: 'column'},]}>
            <View style={{backgroundColor: 'yellow'}} >
                <Text>Info screen</Text>
                <Text>Gentle clown v0.0.3</Text>
            </View>
        </View>
    )
}