import { Joke } from '@/types/Joke';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface OneLineJokeProps {
  joke: Joke;
}

const OneLineJokeComponent: React.FC<OneLineJokeProps> = ({ joke }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            {joke.content}
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
        fontSize: 24,
    }
})

export default OneLineJokeComponent;