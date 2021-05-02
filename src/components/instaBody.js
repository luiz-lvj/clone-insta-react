import Stories from './getStories';
import Posts from './getPosts';

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
            <Posts/>
        </div>
    );
}

function SideBar(){
    return(
        <div></div>
    );
}