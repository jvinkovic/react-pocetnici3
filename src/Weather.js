import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const apiKey = "21f5a6c3c8e682ccc0a932d0ab315219";
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&lang=hr&q=`;

export default function Weather(){
    const [city, setCity] = useState('');
    const [icon, setIcon] = useState('');
    const [data, setData] = useState();

    const handleSearch = () => {
        if(city && city.length > 2){
            fetch(url + city)
                .then(response => response.json())
                .then(podaci => setData(podaci));
        }
    }

    useEffect(() => {
        if(data?.weather){
            setIcon(data.weather[0].icon);
        }
    }, [data]);

    useEffect(() => {
        setData(null);
    }, [city]);

    return (
        <div>
            <div>
                <Link to='/'>Todo app</Link>
            </div>

            <input value={city} placeholder="Unesi grad" type="text" onChange={(e) => setCity(e.target.value.trim())} />
            <button onClick={handleSearch}>Trazi</button>
            {data && data.message && (<p>{data.message}</p>)}
            {data && data.main && (<>
                        <h1>{city}</h1>
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
                        <br />
                        <div>Temp: {data.main.temp} C</div>
                        <div>Clouds: {data.clouds.all}%</div>
                        <div>Humidity: {data.main.humidity}%</div>
                        <div>Pressure: {data.main.pressure}hPa</div>
                        <div>Wind: {data.wind.speed}m/s</div>
                        <div>{data.weather[0].description}</div>
                    </>)}
        </div>
    );
}