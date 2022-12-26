import '../components.css';
import WindSpeedIcon from './WindSpeedIcon';
function WindSpeed({ detail, unit }) {
  return (
    <div className="compoenentContianer">
      <section>
        <h4>Wind Speed</h4>
        <h5>
          {detail} {unit}
        </h5>
      </section>
      <WindSpeedIcon />
    </div>
  );
}

export default WindSpeed;
