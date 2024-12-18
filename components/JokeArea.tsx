import { useEffect, useState } from 'react';
import { Vibration, View, StyleSheet } from 'react-native';
import OneLineJokeComponent from './OneLineJokeView';
import MultiLineJokeComponent from './MultiLineJokeView';
import JokeTriggerButton from './JokeTriggerButton';
import { Card } from 'react-native-paper';
import IntroText from './IntroText';
import { Joke } from '@/types/Joke';


export default function JokeArea() {
    const [jokeIndex, setJokeIndex] = useState(-1);
    const [jokes, setJokes] = useState<Joke[]>([]);

    function handleClick(): void {
        Vibration.vibrate(80); // Haptic feedback on button click
        setJokeIndex((prevIndex) => prevIndex + 1); // TODO: fetch more when index reaches end
    }

    useEffect(() => {
        const fetchJokes = async () => {
            try {
                const response = await fetch("http://localhost:8000/random-joke?limit=5");
                const data: Joke[] = await response.json();
                setJokes(data);
            } catch (error) {
                console.error('Error fetching jokes:', error);
            }
        }

        fetchJokes();
    }, []);

    const currentJoke = jokes[jokeIndex];

    return (
        <div>
            <Card style={styles.container}>
                <Card.Content>
                    {jokeIndex >= 0 ? (
                        currentJoke.content.length > 1 ? (
                            <MultiLineJokeComponent joke={currentJoke} />
                        ) : (
                            <OneLineJokeComponent joke={currentJoke} />
                        )
                    ) : (
                        <IntroText />
                    )}
                </Card.Content>
            </Card>
            <View style={{ flex: 0.4 }}>
                <JokeTriggerButton handleClick={handleClick} jokeShown={jokeIndex >= 0} />
            </View>
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 24,
    }
})