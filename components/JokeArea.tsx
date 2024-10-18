import { useState } from 'react';
import { Button, Text, View } from 'react-native';


function JokeButton({ jokeShown, onClick }) {

    return (
        <View style={{ width: '50%' }}>
            <Button onPress={onClick} title={ jokeShown ? 'Another one!' : 'Make me laugh!'} />
        </View>
    )
}

function returnOneLineJoke(): string {
    const jokes = ["I told them I wanted to be a comedian, and they laughed; then I became a comedian, no one's laughing now", "Procrastination: working tomorrow for a better today.", "No matter how good I get at tennis, I will never be better than a wall.", "I love the word frequently, and I try to use it as much as possible.", "You can't trust atoms, they make up everything.", "I shouldn't have driven home last night... Especially since i walked to the bar..", "I want to die peacefully in my sleep like my grandfather, not screaming in terror like his passengers.", "If I ever saw an amputee being hanged, I'd just start calling out letters.", " I used to be indecisive but now I'm not sure.", "\"I'm sorry\" and \"I apologize\" mean the same thing unless you're at a funeral.", "Last night I was playing poker with Tarot cards, I got a full house and four people died.", "I don't hold grudges, my father did and I always hated him for it", "I saw a sign that said \"watch for children\" and I thought, \"That sounds like a fair trade", "I hate Russian dolls, they're so full of themselves.", "A recent survey showed that 6 out of 7 dwarfs are not happy.", "The easiest time to add insult to injury is when you’re signing somebody’s cast.", "Two antennas meet on a roof and fall in love; the wedding wasn't much but the reception was excellent.", "There are only two hard things in Computer Science: cache invalidation, naming things, and off-by-one errors."];
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

function JokeTextArea({ joke }) {
    return (
        <Text>
            {joke}
        </Text>
    );
}

export default function JokeArea() {
    const [jokeShown, setJokeShown] = useState(false);
    const [joke, setJoke] = useState("Jokes will be shown here");

    function handleClick() {
        setJokeShown(true);
        setJoke(returnOneLineJoke);
    }

    return (
        <>
            <View style={{ flex: 0.1, backgroundColor: 'yellow'}} />
            <View style={{ flex: 1, backgroundColor: 'red'}}>
                <JokeTextArea joke={joke} />
            </View>
            <View style={{ flex: 0.25, backgroundColor: 'green'}}>
                <JokeButton jokeShown={jokeShown} onClick={handleClick}/>
            </View>
        </>
    );
}