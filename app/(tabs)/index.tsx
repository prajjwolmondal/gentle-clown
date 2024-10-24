import JokeArea from "@/components/JokeArea";
import { styles } from "@/constants/DefaultStyles";
import { ImageBackground, View } from "react-native";
import {
    MD3LightTheme as DefaultTheme,
    PaperProvider,
  } from 'react-native-paper';

export default function HomeScreen() {
    return (
        <PaperProvider theme={theme}>
            <ImageBackground source={require('./wallpaper.jpeg')} style={{ flex: 1}} imageStyle={{ opacity: 0.85}}>
                <View style={[styles.container, {flexDirection: 'column'},]}>
                        <View style={{ flex: 0.25}} />
                        <JokeArea />
                </View>
            </ImageBackground>
        </PaperProvider>
    )
}

const theme = {
    ...DefaultTheme,
    colors: {
        "primary": "rgb(248, 189, 42)",
        "onPrimary": "rgb(64, 45, 0)",
        "primaryContainer": "rgb(92, 67, 0)",
        "onPrimaryContainer": "rgb(255, 223, 160)",
        "secondary": "rgb(216, 196, 160)",
        "onSecondary": "rgb(59, 47, 21)",
        "secondaryContainer": "rgb(83, 69, 42)",
        "onSecondaryContainer": "rgb(245, 224, 187)",
        "tertiary": "rgb(177, 207, 169)",
        "onTertiary": "rgb(29, 54, 27)",
        "tertiaryContainer": "rgb(51, 77, 48)",
        "onTertiaryContainer": "rgb(204, 235, 196)",
        "error": "rgb(255, 180, 171)",
        "onError": "rgb(105, 0, 5)",
        "errorContainer": "rgb(147, 0, 10)",
        "onErrorContainer": "rgb(255, 180, 171)",
        "background": "rgb(30, 27, 22)",
        "onBackground": "rgb(233, 225, 216)",
        "surface": "rgb(30, 27, 22)",
        "onSurface": "rgb(233, 225, 216)",
        "surfaceVariant": "rgb(77, 70, 57)",
        "onSurfaceVariant": "rgb(208, 197, 180)",
        "outline": "rgb(153, 143, 128)",
        "outlineVariant": "rgb(77, 70, 57)",
        "shadow": "rgb(0, 0, 0)",
        "scrim": "rgb(0, 0, 0)",
        "inverseSurface": "rgb(233, 225, 216)",
        "inverseOnSurface": "rgb(52, 48, 42)",
        "inversePrimary": "rgb(121, 89, 0)",
        "elevation": {
          "level0": "transparent",
          "level1": "rgb(41, 35, 23)",
          "level2": "rgb(47, 40, 24)",
          "level3": "rgb(54, 45, 24)",
          "level4": "rgb(56, 46, 24)",
          "level5": "rgb(61, 50, 25)"
        },
        "surfaceDisabled": "rgba(233, 225, 216, 0.12)",
        "onSurfaceDisabled": "rgba(233, 225, 216, 0.38)",
        "backdrop": "rgba(54, 48, 36, 0.4)"
    }
};