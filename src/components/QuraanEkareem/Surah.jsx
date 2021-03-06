import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './surah.css'
// import gif from './105-loader-1.gif'


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
        color: 'black',
        textAlign: "right",
    },
    container: {
        margin: " 0% 10%",
        padding: " 0% 3%"
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

    // if (!getSurah) return <h1>Loading ...</h1>
    if (!getSurah) return <div className='d-flex justify-content-center align-items-center' style={{height: "70vh"}}>
        {/* <img src={gif} alt="" width={250} /> */}
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none"><style dangerouslySetInnerHTML={{__html: "@keyframes loader4{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}" }} /><path stroke="#0A0A30" strokeLinecap="round" strokeWidth="1.5" d="M12 6.864v1.333m0 7.606v1.333M17.136 12h-1.333m-7.606 0H6.864m8.768 3.632l-.943-.943M9.311 9.311l-.943-.943m0 7.264l.943-.943m5.378-5.378l.943-.943" style={{animation: 'loader4 1.5s linear infinite both', transformOrigin: 'center center'}} /></svg>

    </div>


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
                        <div className={classes.container}>
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
                        </div>

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
