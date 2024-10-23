import { Button, StyleSheet, View } from "react-native";

interface JokeTriggerButtonProps {
    jokeShown: boolean;
    handleClick: () => void;
}

const JokeTriggerButton: React.FC<JokeTriggerButtonProps> = ({handleClick, jokeShown}) => {
    return (
        <View style={styles.anotherOneButton}>
            <Button onPress={handleClick} title={ jokeShown ? 'Another one!' : 'Make me laugh!'} />
        </View>
    );
}

const styles = StyleSheet.create({
    anotherOneButton: {
        padding: 50,
        width: 'auto'
    }
})

export default JokeTriggerButton;