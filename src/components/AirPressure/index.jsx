import '../components.css';
function AirPressure({ detail, unit }) {
  return (
    <div className="compoenentContianer">
      <h4>Air Pressure</h4>
      <h5>
        {detail} {unit}
      </h5>
    </div>
  );
}

export default AirPressure;
