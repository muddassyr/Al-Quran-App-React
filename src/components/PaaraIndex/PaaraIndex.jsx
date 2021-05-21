import React, { useEffect } from 'react'
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



export default function PaaraIndex() {


    const classes = useStyles();
    //   const [data, setData] = useState([])


    useEffect(() => {

        axios({
            method: 'get',
            // url: 'http://api.alquran.cloud/v1/juz/{{juz}}/{{edition}}', // get /a juz
            // url: 'http://api.alquran.cloud/v1/juz/30/en.asad', // get a juz
            // url: 'http://api.alquran.cloud/v1/juz/1/{{edition}}',
            // url: 'http://api.alquran.cloud/v1/meta',//Meta - Get meta data about Surahs, Pages, Hizbs and Juzs
            url: 'http://api.alquran.cloud/v1/quran',//complete quran

        }).then((response) => {
            console.log(response);
            // console.log(response.data.data.juzs);
            //   setData(response.data.data.juzs)
        })

    }, [])

    return (
        <div className={classes.root}>


            <Grid item xs={12}>
                <Paper className={classes.paperBackGround} >Juzs (Paara)</Paper>
            </Grid>
            <hr />
            {/* {
                data.map((value, index) => {
                    return (
                        <div key={index}>

                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <div className={classes.mapInside}>
                                    </div>
                                </Paper>
                                <hr />


                            </Grid>

                        </div>
                    )
                })
            } */}

        </div>
    )
}
