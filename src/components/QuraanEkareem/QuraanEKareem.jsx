import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../css/style.css'
import {
  Link
} from "react-router-dom";

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

export default function QuraanEKareem() {
  const classes = useStyles();

  const [data, setData] = useState([])

  useEffect(() => {

    axios({
      method: 'get',
      // url: 'http://api.alquran.cloud/v1/edition', //quran editon
      // url: 'http://api.alquran.cloud/v1/surah', // get only surah
      // url: 'http://api.alquran.cloud/v1/juz/{{juz}}/{{edition}}', // get a juz
      // url: 'http://api.alquran.cloud/v1/search/{{keyword}}/{{surah}}/{{edition or language}}', // search all ayah, surah
      url: 'http://api.alquran.cloud/v1/quran/{{edition}}',//complete quran
      // url: 'http://api.alquran.cloud/v1/page/{{page}}/{{edition}}',//get a page no
      // url: 'http://api.alquran.cloud/v1/meta',//Meta - Get meta data about Surahs, Pages, Hizbs and Juzs
    }).then((response) => {
      // console.log(response, 'responese');
      // console.log(response.data.data);
      // console.log((response.data.data.surahs));
      setData(response.data.data.surahs)
    })
  }, [])



  return (
    <div className={classes.root}>
      {/* <Grid container spacing={3}> */}
      <Grid item xs={12}>
        <Paper className={classes.paperBackGround} >Surah Details</Paper>
      </Grid>
      <hr />
      {data.map((value, index) => {
        // console.log(value);
        return (
          <Link 
            key={index}
            className=''
            to={`/quranekareem/${index}`}
          >
          <div >
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <div className={classes.mapInside}>
                  <div className={classes.apterMapInside}>
                    <h4>{value.number}-{value.englishName}</h4>
                    <h4>{value.name}</h4>
                  </div>

                  <div className={classes.apterMapInside}>
                    <h6>{value.englishNameTranslation}:{value.numberOfAyahs}</h6>
                    <h6>{value.revelationType}</h6>
                  </div>

                </div>
                {/* {value.number} {value.englishName} {value.name}
                {value.numberOfAyahs} {value.revelationType} */}
              </Paper>
              <hr />

            </Grid>

          </div>
          </Link>
        
        )
      })

      }
      {/* <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
      {/* </Grid> */}
    </div>
  );
}
