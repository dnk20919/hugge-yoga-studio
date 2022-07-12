import React from 'react';
import './App.css';
import NavMenu from './components/sitebar/Navigation';
import Logo from './components/assets/img/logo-green.jpeg';
import { css } from '@emotion/css';
import WelcomeBlock from './components/welcome/Welcome';
import MainWrapper from './components/main/Wrapper';

const App: React.FC = () => {
    return (
        <div
        className={css`
           heigth: 100vh;
           display: flex;
           flex-direction: row;
        `}>
            <div>
                <img src={Logo} alt="Здесь логотип" height='150px'/>
                <NavMenu />
            </div>
            <WelcomeBlock />
            <MainWrapper />
        </div> 
    )
}

export { App }