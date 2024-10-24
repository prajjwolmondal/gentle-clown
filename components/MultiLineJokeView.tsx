import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MultiLineJokeProps {
  joke: string[];
}

const MultiLineJokeComponent: React.FC<MultiLineJokeProps> = ({ joke }) => {
  return (
    <View style={styles.container}>
      {joke.map((line, index) => (
        <Text key={index} style={styles.text}>
          {line}
        </Text>
      ))}
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