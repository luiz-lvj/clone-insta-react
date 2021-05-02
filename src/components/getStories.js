const images = [
    "assets/img/9gag.svg",
    "assets/img/meowed.svg",
    "assets/img/barked.svg",
    "assets/img/nathanwpylestrangeplanet.svg",
    "assets/img/wawawicomics.svg",
    "assets/img/respondeai.svg",
    "assets/img/filomoderna.svg",
    "assets/img/memeriagourmet.svg"
];

const userNames = [
    "9gag",
    "meowed",
    "barked",
    "nathanwpylestrangeplanet",
    "wawawicomics",
    "respondeai",
    "filomoderna",
    "memeriagourmet",
];


export default function getAllStories(){
    let stories = [];
    for(let i = 0; i< images.length; i++){
        const storie = {
            image: images[i],
            user: userNames[i]
        };
        stories.push(storie);
    }
    return stories;
}