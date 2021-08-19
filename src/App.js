import './App.css';
import Header from "./Components/Header/Header";
import NavFooter from "./Components/NavFooter";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Trending from "./Components/Trending/Trending";
import Movies from "./Components/Movies/Movies";
import TV from "./Components/TVseries/TV";
import Search from "./Components/Search/Search";
import Watched from "./Components/Watch_buttons/Watched";
import Watchlist from "./Components/Watch_buttons/Watchlist";
import {GlobalProvider} from "./Context/GlobalState";

// require('dotenv').config()

function App() {
    return (
        <GlobalProvider>
            <BrowserRouter>
                <>
                    <Header/>
                    <div className="App">
                        <Container>
                            <Switch>
                                <Route exact path='/' component={Trending}/>
                                <Route path='/movies' component={Movies}/>
                                <Route path='/tv' component={TV}/>
                                <Route path='/watched' component={Watched}/>
                                <Route path='/watchlist' component={Watchlist}/>
                                <Route path='/search' component={Search}/>
                            </Switch>
                        </Container>
                    </div>
                    <NavFooter/>
                </>
            </BrowserRouter>
        </GlobalProvider>
    );
}

export default App;
