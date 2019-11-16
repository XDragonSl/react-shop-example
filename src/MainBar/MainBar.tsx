import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './MainBar.css';

type MainBarProps = {
    className: string
}

class MainBar extends React.Component<MainBarProps> {

    render() {
        return (
            <AppBar className={this.props.className} position="static">
                <Toolbar>
                    <Typography variant="h6" className="Title">{this.props.children}</Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default MainBar;
