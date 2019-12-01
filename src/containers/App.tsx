import React from 'react';

import { ThemeProvider } from '@material-ui/styles';

import MainBar from '../components/MainBar/MainBar';
import ContentTabs from '../components/ContentTabs/ContentTabs';
import theme from '../Theme';

import './App.css';

const App: React.FC = () => {

    return (
        <ThemeProvider theme={theme}>
            <div className="Root">
                <MainBar className="Header">Shop</MainBar>
                <ContentTabs />
                <MainBar className="Footer">&copy; 2019 Ermolenko V.A.</MainBar>
            </div>
        </ThemeProvider>
  );
}

export default App;
