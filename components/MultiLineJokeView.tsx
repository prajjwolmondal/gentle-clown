import { Joke } from '@/types/Joke';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MultiLineJokeProps {
  joke: Joke;
}

const MultiLineJokeComponent: React.FC<MultiLineJokeProps> = ({ joke }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
          {joke.content.join("\n")}
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
        paddingBottom: 20
    }
})

export default MultiLineJokeComponent;