import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

interface JokeTriggerButtonProps {
    jokeShown: boolean;
    handleClick: () => void;
}

const JokeTriggerButton: React.FC<JokeTriggerButtonProps> = ({handleClick, jokeShown}) => {
    return (
        <View style={styles.anotherOneButton}>
            <Button mode="elevated" onPress={handleClick}>
              { jokeShown ? 'Another one!' : 'Make me laugh!' }
            </Button>
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