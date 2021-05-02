import ReactDOM from 'react-dom';
import Navbar from './components/navbar';

function App(){
    return(
        <div>
            <Navbar/>
        </div>
    );
}

const app = App();

ReactDOM.render(app, document.querySelector(".root"));