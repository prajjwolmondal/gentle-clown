import { ImageBackground, Text, StyleSheet, View } from "react-native";
import { appTheme } from "@/constants/DefaultStyles";
import { Card, PaperProvider } from "react-native-paper";

export default function InfoScreen() {
    return (
        <PaperProvider theme={appTheme}>
            <ImageBackground source={require('./wallpaper.jpeg')} style={{ flex: 1}} imageStyle={{ opacity: 0.85}}>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Card.Content>
                        <Text style={{ fontSize: 20}}>
                            Gentle clown v0.0.4
                        </Text>
                        <Text style={{ fontSize: 14, paddingTop: 20}}>
                            Made by Prajjwol Mondal
                        </Text>
                    </Card.Content>
                </Card>
            </View>
            </ImageBackground>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        padding: 30,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    card: {
        backgroundColor: 'white',
    },
})