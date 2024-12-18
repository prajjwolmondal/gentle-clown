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
    const [loading, setLoading] = useState(false);

    const fetchMoreJokesThreshold = 2;
    const currentJoke = jokes[jokeIndex];

    function handleClick(): void {
        Vibration.vibrate(80); // Haptic feedback on button click
        setJokeIndex((prevIndex) => prevIndex + 1);

        if (jokeIndex >= jokes.length - fetchMoreJokesThreshold && !loading) {
            setLoading(true);
            fetchJokes();
        }
    }

    const fetchJokes = async () => {
        try {
            //TODO: The base URL should be overridable
            const response = await fetch("http://localhost:8000/random-joke?limit=5");
            const newJokes: Joke[] = await response.json();
            setJokes((prevJokes) => [...prevJokes, ...newJokes]);
        } catch (error) {
            console.error('Error fetching jokes:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchJokes();
    }, []);

    return (
        <View>
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
        </View>
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