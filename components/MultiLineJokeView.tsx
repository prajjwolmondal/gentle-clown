import { Joke } from '@/types/Joke';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MultiLineJokeProps {
  joke: Joke;
}

const MultiLineJokeComponent: React.FC<MultiLineJokeProps> = ({ joke }) => {

  const multiLineJoke = joke.content.map(content => {
    return (
      <Text style={styles.text}>
        {content}
      </Text>
    );
  });

  return (
    <View style={styles.container}>
        {multiLineJoke}
    </View> 
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start',
    },
    text: {
        fontSize: 24,
        paddingBottom: 20
    }
})

export default MultiLineJokeComponent;