import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return 'Loading.....'
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center" >
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="text-secondary" gutterBottom>Infected</Typography>
                        <Typography varaint="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=","></CountUp>
                        </Typography>
                        <Typography color="text-secondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="text-secondary" gutterBottom>Recovered</Typography>
                        <Typography varaint="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator=","></CountUp>
                        </Typography>
                        <Typography color="text-secondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Number of Recovered cases from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="text-secondary" gutterBottom>Deaths</Typography>
                        <Typography varaint="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator=","></CountUp>
                        </Typography>
                        <Typography color="text-secondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Number of deaths by COVID-19</Typography>
                    </CardContent>
                </Grid>
                
            </Grid>
        </div>
    );
};

export default Cards;