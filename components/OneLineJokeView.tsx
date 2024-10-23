import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface OneLineJokeProps {
  joke: string;
}

const OneLineJokeComponent: React.FC<OneLineJokeProps> = ({ joke }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            {joke}
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
    }
})

export default OneLineJokeComponent;