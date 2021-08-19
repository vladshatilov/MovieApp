import './Header.css';
import $ from 'jquery';
import {useEffect} from "react";
import {Link, useHistory} from "react-router-dom";

const Header = (props) => {
    const fonts = [
        'Amatic',
        'Bangers',
        'Fredericka the Great',
        'Indie Flower',
        'Kirang Haerang',
        'Rye'
    ]
    const history = useHistory();
    useEffect(() => {
        const letters = document.querySelectorAll('.letter')
        let count = 0;
        const rollIntro = () => {
            letters.forEach(letter => {
                let randomFontIndex = Math.floor(Math.random()*fonts.length);
                let randomFont = fonts[randomFontIndex];
                letter.style.fontFamily = randomFont;
            })
        }
        let introAnimation = setInterval(function () {
            rollIntro();
            if (count>1500){clearInterval(introAnimation);}
            count++;
        },850);
    }, []);


    return (
        <>
            {/*<span className={'header'} onClick={()=>{window.scroll(0,0)}} >IMDB</span>*/}
        <header className={'header'} onClick={()=>{window.scroll(0,0)}}>
            <span></span>
            <div className='header__title loki'>
                <span className="letter">I</span>
                <span className="letter">M</span>
                <span className="letter">D</span>
                <span className="letter">B</span>
            </div>

            {/*<form action="#" id="form" onSubmit={props.startSearch}>*/}
            {/*    <input type="text" value={props.value} id="search" className="search" onChange={props.handleChangeSearch} placeholder="Search..." />*/}
            {/*</form>*/}

            {/*<Link to={'/watched'}>Watch_buttons</Link>*/}
            <div className="header__button watched" onClick={()=>{history.push('/watched')}}>Watched</div>
            <div className="header__button watchlist" onClick={()=>{history.push('/watchlist')}}>Watchlist</div>
            <i className="fa fa-imdb " aria-hidden="true"></i>
        </header>
        </>
    )
}

export default Header;