import { useState } from 'react';
import { Button, Text, Vibration, View, StyleSheet } from 'react-native';
import OneLineJokeComponent from './OneLineJokeView';
import MultiLineJokeComponent from './MultiLineJokeView';
import JokeTriggerButton from './JokeTriggerButton';

const oneLineJokes = ["I told them I wanted to be a comedian, and they laughed; then I became a comedian, no one's laughing now", "Procrastination: working tomorrow for a better today.", "No matter how good I get at tennis, I will never be better than a wall.", "I love the word frequently, and I try to use it as much as possible.", "You can't trust atoms, they make up everything.", "I shouldn't have driven home last night... Especially since i walked to the bar..", "I want to die peacefully in my sleep like my grandfather, not screaming in terror like his passengers.", " I used to be indecisive but now I'm not sure.", "\"I'm sorry\" and \"I apologize\" mean the same thing unless you're at a funeral.", "I saw a sign that said \"watch for children\" and I thought, \"That sounds like a fair trade", "I hate Russian dolls, they're so full of themselves.", "A recent survey showed that 6 out of 7 dwarfs are not happy.", "The easiest time to add insult to injury is when you're signing somebody's cast.", "Two antennas meet on a roof and fall in love; the wedding wasn't much but the reception was excellent.", "There are only two hard things in Computer Science: cache invalidation, naming things, and off-by-one errors.", "A man walked into his house and was delighted when he discovered that someone had stolen all of his lamps.", "It's hard to explain puns to kleptomaniacs because they always take things literally.", "I asked my North Korean friend how it was there, he said he couldn't complain.", "I discovered a substance that had no mass, and I was like \"0mg!\"", "I was so surprised when the stationary store moved", "There are 3 kinds of people in this world, those who can count and those who can't", "A Freudian slip is when you say one thing but mean your mother.", "I went shopping for a pair of camouflage pants. But I couldn't find any.", "Bacon and eggs walk into a diner, and the host says, \"Sorry, we don't serve breakfast here.\"", "I used to steal soap, but I'm clean now.", "Together, I can beat dissociative identity.", "There's no \"I\" in Denial.", "I'm against picketing, but I don't know how to show it.", "I often say to myself: \"I can't believe that cloning machine worked!\"", "Exaggerations went up by a million percent last year.", "If life hands you melons, you might be dyslexic.", "Came across a mass grave of snowmen, turns out to be a field of carrots.", "The advantage of easy origami is twofold.", "I've always wanted to be a comedian, but that'll never happen because I always punch up the fuck line.", "Velcro - what a rip-off.",  "I went to a seafood disco last week...and pulled a mussel.", "I was reading \"The History of Glue\" - I couldn't put it down.", "As an agnostic, dyslexic insomniac I lie awake all night wondering if there really is a dog.", "It was an emotional wedding. Even the cake was in tiers."];

const multiLineJokes = [
    ["Why did the chicken go to the seance?", "To talk to the other side."],
    ["Why don't some couples go to the gym?", "Because some relationships don't work out."],
    ["What did the shark say when he ate the clownfish?", "This tastes a little funny."],
    ["What do you call a woman with one leg?", "Eileen."],
    ["What did the buffalo say when his son left for college?", "Bison."],
    ["What do you call an apology written in dots and dashes?", "Re-Morse code."],
    ["Did you hear about the two people who stole a calendar?", "They each got six months."],
    ["Why do French people eat snails?", "They don't like fast food."],
    ["What did 0 say to 8?", "Nice belt."],
    ["What did the football coach say to the broken vending machine?", "Give me my quarterback."],
    ["What sits at the bottom of the sea and twitches?", "A nervous wreck."],
    ["Why did the Oreo go to the dentist?", "Because he lost his filling."],
    ["What does a house wear?", "Address."],
    ["Why was the broom late for school?", "It over-swept."],
    ["What did one DNA say to the other DNA?", "Do these genes make me look fat?"],
    ["What happens to an illegally parked frog?", "It gets toad away."],
    ["Why aren't dogs good dancers?", "Because they have two left feet."],
    ["What's brown and sticky?", "A stick."]
];

// First two lines of "Knock, knock" & "Who's there?" aren't recorded below as they're the same across all jokes
const knockKnockJokes = [
    [
        "Lettuce.",
        "Lettuce who?",
        "Lettuce in, it's freezing out here!"
    ],
    [
        "Atch.",
        "Atch who?",
        "Bless you!"
    ],
    [
        "Cows go.",
        "Cows go who?",
        "No silly, cow says moooo!"
    ],
    [
        "A pile-up.",
        "A pile-up who?",        
        "Oh no, yuck!"
    ],
    [
        "Says.",
        "Says who?",
        "Says me!"
    ],
    [
        "Nobel.",
        "Nobel who?",
        "Nobel, that's why I knocked!"
    ],
    [
        "Luke.",
        "Luke who?",        
        "Luke through the peephole and find out."
    ],
    [
        "Candice.",
        "Candice who ?",
        "Candice joke get any worse ? "
    ],
];

export default function JokeArea() {
    const [jokeShown, setJokeShown] = useState(false);
    const [isMultiLine, setIsMultiLine] = useState(false);
    const [jokeIndex, setJokeIndex] = useState(0);

    function handleClick(): void {
        Vibration.vibrate(80); // Haptic feedback on button click
        setJokeShown(true);
        const randomChoice = Math.random() < 0.5;
        setIsMultiLine(randomChoice);

        const maxJokes = randomChoice ? multiLineJokes.length : oneLineJokes.length;
        setJokeIndex((prevIndex) => (prevIndex + 1) % maxJokes);
    }

    return (
        <>
            <View style={styles.container}>
                {jokeShown ? (
                    isMultiLine ? (
                        <MultiLineJokeComponent joke={multiLineJokes[jokeIndex]} />
                    ) : (
                        <OneLineJokeComponent joke={oneLineJokes[jokeIndex]} />
                    )
                ) : (
                    <Text style={styles.text}>
                        Welcome! Hope you're in the mood for a chuckle :D
                    </Text>
                )}
            </View>
            <View style={{ flex: 0.25 }}>
                <JokeTriggerButton handleClick={handleClick} jokeShown={jokeShown} />
            </View>
        </>
    );
}

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