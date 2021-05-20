import React, { useEffect, useState } from 'react'
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
        color: 'black'
        // border: '1px solid black'
    },
    apterMapInside: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // border: '1px solid black'

    },
}));


export default function AboutQuran() {

    const classes = useStyles();
    const [data, setData] = useState([])

    useEffect(() => {

        // axios({
        //     method: 'get',
        //     url: 'http://api.alquran.cloud/v1/meta',//Meta - Get meta data about Surahs, Pages, Hizbs and Juzs
        // }).then((response) => {
        //     // console.log(response, 'responese');
        //     // console.log((response.data.data));
        //     setData(response.data.data)
        // })


        async function getData() {
            const response = await fetch('http://api.alquran.cloud/v1/meta')

            let datas = await response.json()
            // console.log(datas.data);
            delete datas.data.sajdas
            setData(datas.data)
            // console.log(data);


        }
        getData()
    }, [])

    if (!data) return <h1>Loading...</h1>


    return (
        <div className={classes.root}>

            <Grid item xs={12}>
                <Paper className={classes.paperBackGround} >Information About Quran</Paper>
            </Grid>
            <hr />

            {
                Object.keys(data).map((value, index) => {
                    // console.log(data);

                    // console.log(data.ayahs.count);
                    const arr = []
                    arr.push(data.ayahs.count)
                    arr.push(data.surahs.count)
                    // arr.push(data.sajdas.count)
                    arr.push(data.rukus.count)
                    arr.push(data.pages.count)
                    arr.push(data.manzils.count)
                    arr.push(data.hizbQuarters.count)
                    arr.push(data.juzs.count)
                    // console.log(arr);
                    return (
                        <div key={index}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <div className={classes.mapInside}>
                                        <h4>How many {value.replace(/_/g, ' ').toUpperCase()} in Holy Quran ?</h4>
                                        {arr.map((val, ind) => {
                                            if (index === ind)
                                                return <>
                                                    <h4>{val}</h4>
                                                </>
                                            return (
                                                <div key={ind}></div>
                                            )
                                        })}
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
