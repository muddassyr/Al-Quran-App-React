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
    color: theme.palette.text.secondary,
  },
}));

export default function QuraanEKareem() {
  const classes = useStyles();

  const [data, setData] = useState([])

  useEffect(() => {

    axios({
      method: 'get',
      // url: 'http://api.alquran.cloud/v1/edition', //quran editon
      url: 'http://api.alquran.cloud/v1/surah', // get only surah
      // url: 'http://api.alquran.cloud/v1/juz/{{juz}}/{{edition}}', // get a juz
      // url: 'http://api.alquran.cloud/v1/search/{{keyword}}/{{surah}}/{{edition or language}}', // search all ayah, surah
      // url: 'http://api.alquran.cloud/v1/quran/{{edition}}',//complete quran
      // url: 'http://api.alquran.cloud/v1/page/{{page}}/{{edition}}',//get a page no
      // url: 'http://api.alquran.cloud/v1/meta',//Meta - Get meta data about Surahs, Pages, Hizbs and Juzs
    }).then((response) => {
      // console.log(response, 'responese');
      // console.log(response.data.data);
      // console.log((response.data.data));
      setData(response.data.data)
    })
  }, [])



  return (
    <div className={classes.root} className='mediaScreen'>
      <Grid container spacing={3}>
        {data.map((value, index) => {
          // console.log(value);
          return (
            <div key={index}>
              <Grid item xs={12}>
                <Paper className={classes.paper} >{value.number}</Paper>
              </Grid>

            </div>
          )
        })

        }
        {/* <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}
