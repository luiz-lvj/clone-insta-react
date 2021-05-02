import getAllStories from './getStories';

export default function InstaBody(){
    return(
        <div class="corpo">
            <LeftContent/>
            <SideBar/>
        </div>
    );
}

function LeftContent(){
    return(
        <div class="esquerda">
            <Stories/>
        </div>
    );
}

function Stories(){
    const allStories = getAllStories();
    return(
        <div class="stories">
            {allStories.map(storie => <SingleStorie image={storie.image}  user={storie.user} />)}
            <StoriesArrow/>
        </div>
    );
}

function SingleStorie(props){
    return(
        <div class="story">
            <div class="imagem">
                <img src={props.image} />
            </div>
            <div class="usuario">
            {props.user}
            </div>
        </div>
    );
}

function StoriesArrow(){
    return(
        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    );
}

function SideBar(){
    return(
        <div></div>
    );
}