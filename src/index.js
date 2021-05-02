import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import MobileBottom from './components/mobileBottom';

function App(){
    return(
        <div>
            <Navbar/>
            <MobileBottom/>
        </div>
    );
}

const app = App();

ReactDOM.render(app, document.querySelector(".root"));