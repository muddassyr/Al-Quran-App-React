import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './surah.css'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
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
        flexDirection: 'column',
        color: 'black',
        border: '1px solid #3F51B5',
        padding: '10px 10px'
    },
    apterMapInside: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // border: '1px solid black'

    },
    spanAyahs: {
        fontSize: '30px',
        fontWeight: '500',
        color: 'black'
    },
    ayahNumber: {
        fontSize: '14px',
        borderRadius: '50%',
        border: '1px solid black',
        padding: '2px 3px'
    },
}));


export default function Surah() {

    const classes = useStyles();

    const { id } = useParams()
    const [data, setData] = useState([])
    const [getSurahAyahs, setGetSurahAyahs] = useState([])

    const getSurah = data[id]

    // var getSurahAyahs

    useEffect(() => {

        axios({
            method: 'get',
            url: 'http://api.alquran.cloud/v1/quran/{{edition}}', // 
        }).then((response) => {
            // console.log(response, 'responese');
            setData(response.data.data.surahs)
            // console.log(getSurah, 'get surah');            
        })
        if (getSurah) return setGetSurahAyahs(getSurah.ayahs)

    }, [getSurah])
    // console.log(getSurah, 'get surah');
    // console.log(getSurahAyahs, 'get surah ayahs');


    // const getSurahAyahs = getSurah.ayahs
    // setGetSurahAyahs(getSurah.ayahs)

    if (!getSurah) return <h1>Loading ...</h1>


    return (
        <div>
            <div
                // style={{ width: '100%', border: '1px solid black' }}
            >
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h3 style={{
                            backgroundColor: '#3F51B5',
                            padding: " 4px 2px",
                            color: '#fff',
                            marginBottom: '0'
                        }}
                        >
                            Surah detail
                        </h3>
                        <div className={classes.mapInside}>

                            <div className={classes.apterMapInside}>
                                <h4>{getSurah.number}-{getSurah.englishName}</h4>
                                <h4>{getSurah.name}</h4>
                            </div>
                            <hr />
                            <div className={classes.apterMapInside}>
                                <h6>{getSurah.englishNameTranslation}:{getSurah.numberOfAyahs}</h6>
                                <h6>{getSurah.revelationType}</h6>
                            </div>

                        </div>
                        <hr />
                        {
                            getSurahAyahs.map((value, index) => {
                                return (
                                    <span
                                        key={index}
                                        className={classes.spanAyahs}
                                    >
                                        <h4 >
                                            {value.text}
                                            <span className={classes.ayahNumber}>
                                                {value.number}
                                            </span>
                                        </h4>

                                        <hr />
                                    </span>
                                )
                            })
                        }
                    </Paper>
                </Grid>

            </div>

            {/* {data.map((value, index)=>{
                return(
                    <div key={index}>
                        <div>{value.name}</div>
                        <div>{value.text}</div>
                        <div>{value.type}</div>
                        <div>{value.identifier}</div>
                        <div>{value.format}</div>
                        <div>{value.direction}</div>
                        <div>{value.language}</div>

                    </div>
                )
            })} */}
        </div>
    )
}
