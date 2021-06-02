import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../css/style.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
        color: 'black'
    },
    paperBackGround: {
        padding: theme.spacing(2),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
        backgroundColor: '#3F51B5',
        color: '#fff'
    },
    mapInside: {
        display: 'flex',
        flexDirection: 'row',
        color: 'black'
        // border: '1px solid black'
    },
    ayahs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
}));



export default function CompleteQuran() {


    const classes = useStyles();
    const [data, setData] = useState([])


    useEffect(() => {

        axios({
            method: 'get',
            // url: 'http://api.alquran.cloud/v1/juz/{{juz}}/{{edition}}', // get /a juz
            // url: 'http://api.alquran.cloud/v1/juz/30/en.asad', // get a juz
            // url: 'http://api.alquran.cloud/v1/juz/1/{{edition}}',
            // url: 'http://api.alquran.cloud/v1/meta',//Meta - Get meta data about Surahs, Pages, Hizbs and Juzs
            url: 'http://api.alquran.cloud/v1/quran',//complete quran

        }).then((response) => {
            // console.log(response);
            // console.log(response.data.data.surahs);
            setData(response.data.data.surahs)
        })

    }, [])

    if (!data) return <h1>Loading...</h1>

    return (
        <div className={classes.root}>


            <Grid item xs={12}>
                <Paper className={classes.paperBackGround} >Complete Quran</Paper>
            </Grid>
            <hr />
            {
                data.map((value, index) => {
                    // console.log(value);
                    const ayahsArray = value.ayahs
                    // console.log(ayahsArray);
                    return (
                        <div key={index}>

                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <h1>{value.name}</h1>
                                    <div>
                                        {ayahsArray.map((val, ind) => {
                                            var newInd = ind++
                                            // console.log(newInd);
                                            return <div className={classes.ayahs}>
                                                {/* <h4>
                                                    ⃝
                                                </h4> */}
                                                <h4>
                                                    ⃝{val.text}
                                                </h4>
                                                <h4>
                                                    -{newInd}
                                                </h4>
                                                {/* <h4><span> ⃝</span>{val.text} <span>-{ind}</span> </h4> */}
                                            </div>
                                        })

                                        }

                                    </div>
                                </Paper>
                                <hr />


                            </Grid>

                        </div>
                    )
                })
            }

        </div>
    )
}
