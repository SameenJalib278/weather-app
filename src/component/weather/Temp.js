import React, {useState, useEffect} from 'react'
import "./style.css";
import Weathercard from '../weather/Weathercard';

const Temp = () => {

    const [searchValue, setsearchValue] = useState("mumbai");
    const [tempInfo, settempInfo] = useState("");

    const getWeatherInfo= async()=>{
        try{
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=58a5d6c92f8ad8db5dd958526f215ace`;
          let res= await fetch(url);
          let data= await res.json(res);
        //   console.log(data);
        const{temp,humidity,pressure}= data.main;
        const{main:weathermood}=data.weather[0];
        const{name}=data;
        const{speed}=data.wind;
        const{country,sunset}=data.sys;

        const myNewWeatherInfo ={
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset
        };
         settempInfo(myNewWeatherInfo);

        }
        catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        getWeatherInfo();
    }, []);

    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input type='search' placeholder='search ...' autoFocus id='search' className='searchTerm' value={searchValue } onChange={(e)=> setsearchValue(e.target.value)} />
                    <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
                </div>
            </div>
           <Weathercard tempInfo={tempInfo}/>
            
        </>
    )
}

export default Temp;

