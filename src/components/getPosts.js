const userImages = [
    "assets/img/meowed.svg",
    "assets/img/barked.svg"
];

const postImages = [
    "assets/img/gato-telefone.svg",
    "assets/img/dog.svg"
];

const usersPosts = [
    "meowed",
    "barked"
];

const likedFor = [
    {
        user: "respondeai",
        number: "101.523",
        image: "assets/img/respondeai.svg"
    },
    {
        user: "adorable_animals",
        number: "99.159",
        image: "assets/img/adorable_animals.svg"
    }
];

export default function Posts(){
    const allPosts = getAllPosts();
    return(
        <div class="posts">
            {allPosts.map(post => <SinglePost userImage={post.userImage} postImage={post.postImage} userPost={post.userPost}
                userLike={post.userLike} numberLikes={post.numberLikes} imageLikes={post.imageLikes}/>)}
        </div>
    );
}

function SinglePost(props){
    return(
        <div class="post">
            <PostTop userImage={props.userImage} userPost={props.userPost}/>
            <PostContent postImage={props.postImage}/>
            <PostBottom userLike={props.userLike} numberLikes={props.numberLikes} imageLikes={props.imageLikes}/>
        </div>
    );
}

function PostBottom(props){
    return(
        <div class="fundo">
            <BottomActions/>
            <BottomLikes userLike={props.userLike} numberLikes={props.numberLikes} imageLikes={props.imageLikes}/>
        </div>
    );
}

function BottomLikes(props){
    return(
        <div class="curtidas">
            <img src={props.imageLikes} />
            <div class="texto">
            Curtido por <strong>{props.userLike}</strong> e <strong>outras {props.numberLikes} pessoas</strong>
            </div>
        </div>
    );
}

function BottomActions(){
    return(
        <div class="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    );
}

function PostTop(props){
    return(
        <div class="topo">
            <div class="usuario">
                <img src={props.userImage} />
                {props.userPost}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}

function PostContent(props){
    return(
        <div class="conteudo">
            <img src={props.postImage} />
        </div>
    );
}

function getAllPosts(){
    let posts = [];
    for(let i = 0; i< userImages.length; i++){
        const post = {
            userImage: userImages[i],
            postImage: postImages[i],
            userPost: usersPosts[i],
            userLike: likedFor[i].user,
            numberLikes: likedFor[i].number,
            imageLikes: likedFor[i].image
        };
        posts.push(post);
    }
    return posts;
}