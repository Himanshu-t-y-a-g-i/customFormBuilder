import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { AllRoutes } from './AllRoutes/AllRoutes';
import { useDispatch } from 'react-redux';
import { lscheckF } from './Redux/userReducer/action';

function App() {
    const lsData = JSON.parse(localStorage.getItem("formCreatorAppData")) || {};
    const isAuth = lsData.isAuth;
    const token = lsData.token;
    const dispatch = useDispatch();
    if (isAuth && token) {
        dispatch(lscheckF(token));
    }
    console.log(isAuth)
    return (
        <div className="App">
            <Navbar />
            <AllRoutes />
        </div>
    );
}

export default App;