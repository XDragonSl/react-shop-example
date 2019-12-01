import React from 'react';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
    tabHeader: {
        color: theme.palette.getContrastText(theme.palette.primary.main),
        backgroundColor: theme.palette.primary.main
    }
}));

const ContentTabs: React.FC = () => {

    const classes = useStyles();

    const [currentTab, setTab] = React.useState(0);

    const changeTab = (event: React.ChangeEvent<{}>, tab: number) => {
        setTab(tab);
    };

    return (
        <Paper className="Content">
            <Tabs
                className={classes.tabHeader}
                value={currentTab}
                onChange={changeTab}
                indicatorColor="secondary"
                centered
            >
                <Tab label="Products" />
                <Tab label="Basket" />
            </Tabs>
        </Paper>
    );
}

export default ContentTabs;
