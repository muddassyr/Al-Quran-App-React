import React, { useEffect } from 'react'
import axios from 'axios'

export default function Audio() {

    // const [data, setData] = useState([])

    useEffect(() => {

        axios({
            method: 'get',
            // url: 'http://api.alquran.cloud/v1/edition', // get  audio
            // url: 'http://api.alquran.cloud/surah', // get  audio
            // url: 'http://api.alquran.cloud/edition?format=text&type=translation', // get  audio
            // url: 'http://api.alquran.cloud/edition?format=audio&type=versebyverse&language=ar', // get  audio
            // url: 'http://api.alquran.cloud/v1/meta',//Meta - Get meta data about Surahs, Pages, Hizbs and Juzs
            // url: 'http://api.mp3quran.net/api/surah',
            // url: 'http://api.alquran.cloud/surah',
            // url: 'https://api.alquran.cloud/surah/7/editions/quran-simple-enhanced,ar.alafasy,en.transliteration,en.sahih,id.indonesian',
            // url: 'https://api.alquran.cloud/surah/1/editions/quran-simple-enhanced,ar.alafasy,en.transliteration,en.sahih,id.indonesian',
            url: 'https://api.alquran.cloud/surah/1/editions',

        }).then((response) => {
            // console.log(response, 'responese');
            // console.log(response.data.data.surahs.references);
            // setData(response.data.data.surahs.references)
        })


    }, [])


    return (
        <div>
            <h1>Audio version comming soon</h1>
            <div className="plyr-box w-100 pat-bg white-layer opc85 back-blend-multiply bg-white">
                <div className="plyr v4 w-100">


                    {/* {
                        data.map((value, index) => {
                            // console.log(value);
                            return (
                                <div key={index} className="player">
                                    <div className="cover"
                                    />
                                    <div className="info">
                                        <div className="title">
                                            {value.number}-
                                            {value.englishName}
                                        </div>
                                        <div className="artist">(Tilawat)</div>
                                    </div>
                                    <div className="controls">
                                        <div className="rew">
                                            <i className="fa fa-backward" />
                                        </div>
                                        <div className="play">
                                            <i className="fa fa-play" />
                                        </div>
                                        <div className="pause">
                                            <i className="fa fa-pause" />
                                        </div>
                                        <div className="fwd">
                                            <i className="fa fa-forward" />
                                        </div>
                                        <div className="stop">
                                            <i className="fa fa-stop" />
                                        </div>
                                    </div>
                                    <div className="progressbar">
                                        <div className="bar-loaded" />
                                        <div className="bar-played" />
                                    </div>
                                    <div className="timeHolder">
                                        <div className="time-current">00:00</div>
                                        <div className="time-separator">&nbsp;/&nbsp;</div>
                                        <div className="time-duration">…</div>
                                    </div>
                                    <div className="volume">
                                        <div className="volume-btn" title="Volume">
                                            <i className="fas fa-volume-up" />
                                        </div>
                                        <div className=" volume-adjust">
                                            <div>
                                                <div style={{ width: '80%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    } */}

                </div>
            </div>

        </div>
    )
}
