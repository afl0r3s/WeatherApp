import React, { useState } from 'react';
import Nav from './components/Nav';
import Cards from './components/Cards';
import './App.css';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
export default function App() {
	const [cities, setCities] = useState([]);

	function onSearch(ciudad) {
		//Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
		//pero de momento agregaremos una ciudad por default para ver que funcione
		/* 
    const ciudadEjemplo = {
      min: 32,
      max: 35,
      img: "03n",
      id: 2172797,
      wind: 3.6,
      temp: 300.15,
      name: "Cairns",
      weather: "Clouds",
      clouds: 40,
      latitud: -16.92,
      longitud: 145.77
    };
    setCities((oldCities) => [...oldCities, ciudadEjemplo]); 
    */
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
			.then((r) => r.json())
			.then((recurso) => {
				if (recurso.main !== undefined) {
					const ciudad = {
						min: Math.round(recurso.main.temp_min),
						max: Math.round(recurso.main.temp_max),
						img: recurso.weather[0].icon,
						id: recurso.id,
						wind: recurso.wind.speed,
						temp: recurso.main.temp,
						name: recurso.name,
						weather: recurso.weather[0].main,
						clouds: recurso.clouds.all,
						latitud: recurso.coord.lat,
						longitud: recurso.coord.lon,
					};
					setCities((oldCities) => [...oldCities, ciudad]);
				} else {
					alert('Ciudad no encontrada');
				}
			});
	}

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

	return (
		<div className="App">
			{/* Tu código acá: */}
			<Nav onSearch={onSearch} />
			<Cards cities={cities} onClose={onClose} />
		</div>
	);
}
