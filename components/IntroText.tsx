import { Text, StyleSheet } from 'react-native';

const introText = () => {

    return (
        <Text style={styles.text}>
            "Welcome! Hope you're in the mood for a chuckle :D"
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
    }
})

export default introText;