import { Text, StyleSheet } from 'react-native';

const introText = () => {

    const today = new Date();
    const isOctober26 = today.getMonth() === 9 && today.getDate() === 24; // months are 0-indexed

    return (
        <Text style={styles.text}>
            {isOctober26 ? "Happy Birthday my fiancé!!" : "Welcome! Hope you're in the mood for a chuckle :D" }
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
    }
})

export default introText;