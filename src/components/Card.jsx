import React, { useMemo, useState } from 'react';
import style from './style/card.module.css';

const Card = ({ data, time }) => {
  const airPressure = data.instant.details.air_pressure_at_sea_level;
  const airTemperature = data.instant.details.air_temperature;
  const cloudAreaFracture = data.instant.details.cloud_area_fraction;
  const relativeHumidity = data.instant.details.relative_humidity;
  const windSpeed = data.instant.details.wind_speed;

  const [mainName, setMainName] = useState('Air Temperature')
  const [mainDetail, setMainDetail] = useState(airTemperature)

  const details = useMemo(() => {
    return [
      {
        name: 'Air Temperature',
        details: `${airTemperature} °c`,
      },
      {
        name: 'Air Pressure',
        details: `${airTemperature} hPa`,
      },
      {
        name: 'Cloud Area Fracture',
        details: `${airTemperature} %`,
      },
      {
        name: 'Relative Humidity',
        details: `${airTemperature} %`,
      },
      {
        name: 'WindSpeed',
        details: `${windSpeed} m/s`,
      },
    ];
  });

  return (
    <div className={style.container}>
      <main className={style.main}>
        <h2>{mainName}</h2>
        <h3>{mainDetail}</h3>
      </main>
      <section className={style.detailsContainer}>
        {details.map((element, index) => {
          return (
            <main key={index} className={style.details}>
              <button className={style.button} onClick={()=>{
                setMainName(element.name) 
                setMainDetail(element.details)
                }}>
              <h4>{element.name}</h4>
              <p>{element.details}</p>
              </button>
            </main>
          );
        })}
      </section>
      <p className={style.time}>{new Date(time).toLocaleString()}</p>
    </div>
  );
};

export default Card;
