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
    const jokes = ["I told them I wanted to be a comedian, and they laughed; then I became a comedian, no one's laughing now", "Procrastination: working tomorrow for a better today.", "No matter how good I get at tennis, I will never be better than a wall.", "I love the word frequently, and I try to use it as much as possible.", "You can't trust atoms, they make up everything.", "I shouldn't have driven home last night... Especially since i walked to the bar..", "I want to die peacefully in my sleep like my grandfather, not screaming in terror like his passengers.", "If I ever saw an amputee being hanged, I'd just start calling out letters.", " I used to be indecisive but now I'm not sure.", "\"I'm sorry\" and \"I apologize\" mean the same thing unless you're at a funeral.", "I saw a sign that said \"watch for children\" and I thought, \"That sounds like a fair trade", "I hate Russian dolls, they're so full of themselves.", "A recent survey showed that 6 out of 7 dwarfs are not happy.", "The easiest time to add insult to injury is when you’re signing somebody’s cast.", "Two antennas meet on a roof and fall in love; the wedding wasn't much but the reception was excellent.", "There are only two hard things in Computer Science: cache invalidation, naming things, and off-by-one errors.", "A man walked into his house and was delighted when he discovered that someone had stolen all of his lamps.", "It's hard to explain puns to kleptomaniacs because they always take things literally.", "I asked my North Korean friend how it was there, he said he couldn't complain.", "I discovered a substance that had no mass, and I was like \"0mg!\"", "I was so surprised when the stationary store moved", "There are 3 kinds of people in this world, those who can count and those who can't", "A Freudian slip is when you say one thing but mean your mother.", "I went shopping for a pair of camouflage pants. But I couldn't find any.", "Bacon and eggs walk into a diner, and the host says, \"Sorry, we don’t serve breakfast here.\"", "I used to steal soap, but I'm clean now.", "Together, I can beat dissociative identity.", "There's no \"I\" in Denial.", "I'm against picketing, but I don't know how to show it.", "I often say to myself: \"I can't believe that cloning machine worked!\"", "Exaggerations went up by a million percent last year.", "If life hands you melons, you might be dyslexic.", "Came across a mass grave of snowmen, turns out to be a field of carrots.", "The advantage of easy origami is twofold.", "I've always wanted to be a comedian, but that'll never happen because I always punch up the fuck line.", "Velcro - what a rip-off.",  "I went to a seafood disco last week...and pulled a mussel.", "I was reading \"The History of Glue\" - I couldn't put it down.", "As an agnostic, dyslexic insomniac I lie awake all night wondering if there really is a dog.",];
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