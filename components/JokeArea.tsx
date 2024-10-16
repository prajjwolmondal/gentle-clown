import { useState } from 'react';
import { Button, Text, View } from 'react-native';


function JokeButton() {
    const [jokeShown, setJokeShown] = useState(false);

    function handleClick() {
        setJokeShown(true);
    }

    return (
        <View style={{ width: '50%' }}>
            <Button onPress={handleClick} title={ jokeShown ? 'Another one!' : 'Make me laugh!'} />
        </View>
    )
}

function JokeTextArea() {
    
}

export default function JokeArea() {
    return (
        <View>
            <Text> Joke will be shown here</Text>
            <JokeButton />
        </View>
    );
}