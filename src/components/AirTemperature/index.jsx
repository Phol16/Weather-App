import '../components.css';
import TemperatureIcon from './TemperatureIcon';
import { useMemo } from 'react';
function AirTemperature({ detail, unit }) {
  const resolveDetailToColorName = useMemo(() => {
    if (detail >= 35) {
      return 'red';
    }
    if (detail >= 20 && detail < 30) {
      return 'orange';
    }
    if (detail < 20) {
      return 'blue';
    }
  }, [detail]);
  return (
    <div className="compoenentContianer">
      <section>
        <h4>Air Temperature</h4>
        <h5>
          {detail}° {unit}
        </h5>
      </section>
      <TemperatureIcon color={resolveDetailToColorName} />
    </div>
  );
}

export default AirTemperature;
