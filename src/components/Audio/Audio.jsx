import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './audio.css'

export default function Audio() {

    const [data, setData] = useState([])

    useEffect(() => {

        axios({
            method: 'get',
            // url: 'http://api.alquran.cloud/v1/edition', // get  audio
            url: 'http://api.alquran.cloud/v1/meta',//Meta - Get meta data about Surahs, Pages, Hizbs and Juzs

        }).then((response) => {
            // console.log(response, 'responese');
            // console.log(response.data.data.surahs.references);
            setData(response.data.data.surahs.references)
        })
    }, [])


    return (
        <div
        // style={{margin: '0 6rem'}}
        >
            <div className="plyr-box w-100 pat-bg white-layer opc85 back-blend-multiply bg-white">
                <div className="plyr v4 w-100">


                    {
                        data.map((value, index) => {
                            // console.log(value);
                            return (
                                <div key={index} className="player">
                                    {/* <div className="cover"
                                    style={{ backgroundImage: 'url("https://alim.nauthemes.com/wp-content/themes/alim/assets/images/audio-img2.jpg")' }}
                                    /> */}
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
                    }



                    <ul className="playlist mb-0 list-unstyled">
                        <li data-cover="https://alim.nauthemes.com/wp-content/themes/alim/assets/images/audio-img2.jpg" data-artist="(Tilawat)" className="active">
                            <a href="https://alim.nauthemes.com/wp-content/uploads/2021/01/surah-fateh.mp3" title>Quran Majeed</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
