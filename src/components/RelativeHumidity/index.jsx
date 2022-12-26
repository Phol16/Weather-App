import '../components.css';
import { useMemo } from 'react';
import RelativeHumidityIcon from './RelativeHumidityIcon';
function RelativeHumidity({ detail, unit }) {
  let opacitiness = useMemo(() => {
    return detail;
  }, [detail]);
  const opaciti = `0.${Math.floor(opacitiness)}`;
  return (
    <div className="compoenentContianer">
      <section>
        <h4>Relative Humidity</h4>
        <h5>
          {detail} {unit}
        </h5>
      </section>
      <RelativeHumidityIcon opacityValue={opaciti} />
    </div>
  );
}

export default RelativeHumidity;
