import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../css/style.css'
import {
  Link
} from "react-router-dom";
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
    color: 'black'
    // border: '1px solid black'
  },
  apterMapInside: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // border: '1px solid black'

  },
  linkTag: {
    textDecoration: "none"
  },
}));

export default function QuraanEKareem() {
  const classes = useStyles();

  const [data, setData] = useState([])

  useEffect(() => {
    // getFullData()
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

  // const getFullData = async () => {
  //   const response = await axios.get("http://api.alquran.cloud/v1/quran/{{edition}}")
  //   console.log("response ====>", response);
  //   setData(response.data.data.surahs)

  // }



  return (
    <div className={classes.root}>
      {/* <Grid container spacing={3}> */}
      <Grid item xs={12}>
        <Paper className={classes.paperBackGround} >Surah Details</Paper>
      </Grid>
      <hr />
      {data.length === 0 ? <div className='d-flex justify-content-center align-items-center' style={{height: '70vh'}}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width={500} height={500} style={{ width: '100%', height: '100%', contentVisibility: 'visible' }}><defs><clipPath id="a"><path d="M0 0h500v500H0z" /></clipPath><clipPath id="b"><path d="M0 0h500v500H0z" /></clipPath></defs><g clipPath="url(#a)"><path strokeLinecap="round" strokeLinejoin="round" stroke="#121331" strokeWidth="32.199999999999996" d="M118.905 250.823c-.005-.276-.005-.547-.005-.823 0 0 0 0 0 0M248.855 249.177c-.005.276-.005.547-.005.823 0 0 0 0 0 0M378.805 250.823c-.005-.276-.005-.547-.005-.823 0 0 0 0 0 0" fill="none" display="block" /></g></svg> */}
        {/* <img src={gif} alt="" width={300} /> */}
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none"><style dangerouslySetInnerHTML={{__html: "@keyframes loader4{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}" }} /><path stroke="#0A0A30" strokeLinecap="round" strokeWidth="1.5" d="M12 6.864v1.333m0 7.606v1.333M17.136 12h-1.333m-7.606 0H6.864m8.768 3.632l-.943-.943M9.311 9.311l-.943-.943m0 7.264l.943-.943m5.378-5.378l.943-.943" style={{animation: 'loader4 1.5s linear infinite both', transformOrigin: 'center center'}} /></svg>
      </div> : data.map((value, index) => {
        // console.log(value);
        return (
          <Link
            key={index}
            className={classes.linkTag}
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
