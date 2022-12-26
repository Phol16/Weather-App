import { useState, useEffect } from 'react';
import AirPressure from './components/AirPressure';
import AirTemperature from './components/AirTemperature';
import CloudAreaFraction from './components/CloudAreaFraction';
import RelativeHumidity from './components/RelativeHumidity';
import WindFromDirection from './components/WindFromDirection';
import WindSpeed from './components/WindSpeed';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const [details, setDetails] = useState({});
  const [units, setUnits] = useState({});

  useEffect(() => {
    requestData();
  }, []);

  const requestData = async () => {
    const fetchResponse = await fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=6.921442&lon=122.079025');
    const response = await fetchResponse.json();
    setDetails(response.properties.timeseries[0].data.instant.details);
    setUnits(response.properties.meta.units);
  };
  return (
    <div>
      <MainContent detail={details.air_temperature} />
      <section className="detailContainer">
        <AirPressure className="details" detail={details.air_pressure_at_sea_level} unit={units.air_pressure_at_sea_level} />
        <AirTemperature className="details" detail={details.air_temperature} unit={units.air_temperature} />
        <CloudAreaFraction className="details" detail={details.cloud_area_fraction} unit={units.cloud_area_fraction} />
        <RelativeHumidity className="details" detail={details.relative_humidity} unit={units.relative_humidity} />
        <WindFromDirection className="details" detail={details.wind_from_direction} unit={units.wind_from_direction} />
        <WindSpeed className="details" detail={details.wind_speed} unit={units.wind_speed} />
      </section>
    </div>
  );
}

export default App;
