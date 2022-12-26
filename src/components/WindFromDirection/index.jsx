import '../components.css';
function WindFromDirection({ detail, unit }) {
  return (
    <div className="compoenentContianer">
      <h4>Wind From Direction</h4>
      <h5>
        {detail} {unit}
      </h5>
    </div>
  );
}

export default WindFromDirection;
