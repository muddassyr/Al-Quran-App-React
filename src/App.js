import React, {useEffect , useState} from 'react'
import axios from 'axios'
import './App.css';
import LeftDrawer from './components/Drawer/Drawer';

function App() {

    // const [data, setData] = useState([])

    useEffect(() => {

        axios({
            method: 'get',
            // url: 'http://api.alquran.cloud/v1/edition', //quran editon
            url: 'http://api.alquran.cloud/v1/surah', // get only surah
            // url: 'http://api.alquran.cloud/v1/edition', // get  audio
            // url: 'http://api.alquran.cloud/v1/juz/{{juz}}/{{edition}}', // get a juz
            // url: 'http://api.alquran.cloud/v1/ayah/{{reference}}/{{edition}}', // get a ayah
            // url: 'http://api.alquran.cloud/v1/search/{{keyword}}/{{surah}}/{{edition or language}}', // search all ayah, surah
            // url: 'http://api.alquran.cloud/v1/quran/{{edition}}',//complete quran
            // url: 'http://api.alquran.cloud/v1/manzil/{{manzil}}/{{edition}}',//get a manzil
            // url: 'http://api.alquran.cloud/v1/ruku/{{ruku}}/{{edition}}',//get a ruko
            // url: 'http://api.alquran.cloud/v1/page/{{page}}/{{edition}}',//get a page no
            // url: 'http://api.alquran.cloud/v1/hizbQuarter/{{hizb}}/{{edition}}',//get a hizb quarter of quran
            // url: 'http://api.alquran.cloud/v1/sajda/{{edition}}',//Sajda - Get all verses requiring Sajda / Prostration in the Quran
            // url: 'http://api.alquran.cloud/v1/meta',//Meta - Get meta data about Surahs, Pages, Hizbs and Juzs
        }).then((response) => {
            console.log(response, 'responese');
            // console.log(response.data.data);
            // console.log((response.data.data.surahs));
            // setData(response.data.data.surahs)
        })



    }, [])
    return ( 
        <div>
            {/* <h1>Al-Quran</h1> */}
            <LeftDrawer />
        </div>
    );
}

export default App;