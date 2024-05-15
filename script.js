const typingText = document.querySelector('.typing-text p')
const input = document.querySelector('.wrapper .input-field')
const time = document.querySelector('.time  span b')
const mistakes = document.querySelector('.mistakes span b')
const wpm = document.querySelector('.wpm span b')
const cpm = document.querySelector('.cpm span b')
const btn = document.querySelector('button')


//set values
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake =0;
let isTyping = false;





function loadParagraph(){
    const paragraph = ["The quick brown fox jumps over the lazy dog.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","The cat in the hat sat on the mat.","Jackdaws love my big sphinx of quartz.","How much wood would a woodchuck chuck if a woodchuck could chuck wood?","Peter Piper picked a peck of pickled peppers.","She sells seashells by the seashore.","Sally sells seashells down by the seashore.","The five boxing wizards jump quickly.","Whether the weather be fine or whether the weather be not, we'll weather the weather, whatever the weather, whether we like it or not.","In the distant future, humanity has colonized planets across the galaxy.","As the sun set over the horizon, a sense of tranquility enveloped the land.","The old oak tree stood tall, its branches reaching towards the endless sky.","A mysterious message appeared on the ancient scroll, written in a forgotten language.","The sound of waves crashing against the shore echoed through the deserted island.","In the heart of the forest, a hidden path led to a magical clearing.","The city streets were alive with the hustle and bustle of everyday life.","A lone traveler embarked on a journey to discover the secrets of the lost civilization.","The stars twinkled in the night sky, guiding explorers to new adventures.","Amidst the chaos, a glimmer of hope emerged, lighting the way forward.","In a world where magic and technology coexist, a group of unlikely heroes must band together to save their kingdom from the brink of destruction, facing epic battles and formidable foes along the way.","The ancient prophecy foretold of a chosen one who would rise from humble beginnings to challenge the darkness threatening to engulf the land, embarking on a perilous quest filled with trials and tribulations.","As the clock struck midnight on New Year's Eve, a cascade of fireworks illuminated the sky, marking the beginning of a new chapter filled with hope, dreams, and endless possibilities.",
    "Deep within the enchanted forest, hidden from mortal eyes, lies a magical realm where mythical creatures roam freely and ancient secrets wait to be discovered by those brave enough to seek them.","In the sprawling metropolis of the future, where skyscrapers tower above the clouds and neon lights illuminate the night sky, a shadowy organization plots to seize control, plunging the city into chaos.","Legend speaks of a lost civilization buried beneath the sands of time, its majestic temples and towering pyramids standing as a testament to the ingenuity and resilience of its people.", "High atop the snow-capped peaks of the mountain range, a monastery serves as a sanctuary for monks dedicated to the pursuit of enlightenment, their tranquil existence disrupted by the arrival of a mysterious stranger.", "In the aftermath of a devastating war that ravaged the land, survivors struggle to rebuild their shattered world, forging new alliances and confronting old rivalries as they strive to create a better future for generations to come.", "The vast expanse of the ocean stretches out before you, its shimmering surface hiding untold treasures and ancient mysteries waiting to be uncovered by intrepid explorers daring enough to venture into its depths.", "Amidst the hustle and bustle of the bustling city streets, amidst the cacophony of honking horns and bustling crowds, a solitary figure stands, lost in thought, pondering the meaning of life and the nature of existence itself."];

const randomIndex =Math.floor(Math.random()*paragraph.length)
typingText.innerHTML='';
for(const char of paragraph[randomIndex]){
    console.log(char);
    typingText.innerHTML+= `<span>${char}</span>`
}
typingText.querySelectorAll('span')[0].classList.add('active');
}

// handle user input

function initTyping(){
    const char = typingText.querySelectorAll('span')
    const typedChar = input.value.charAt(charIndex)
    if(charIndex < char.length && timeLeft > 0){
        if(char[charIndex].innerText === typedChar){
            char[charIndex].classList.add('correct');
            console.log("correct");
        }
        else{
            char[charIndex].classList.add('incorrect');
            console.log("incorrect");
        }
        charIndex++;
    }
    else{}
}
input.addEventListener("input", initTyping)

loadParagraph();