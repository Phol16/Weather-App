import './MainContent.css';
import Time from './Time';
import Morning from './image/Morn-Default.png';
import Evening from './image/Eve-Default.png';
import Night from './image/Night-Default.png';
import { useMemo } from 'react';

function MainContent({ detail }) {
  const now = new Date();
  const current = now.getHours();
  const backgroundDesign = useMemo(() => {
    if (current >= 6 && current <= 16) {
      return Morning;
    }
    if (current >= 17 && current <= 19) {
      return Evening;
    }
    if (current <= 5 || current >= 20) {
      return Night;
    }
  }, [Time]);
  const detailColor = useMemo(() => {
    if (current >= 6 && current <= 17) {
      return 'black';
    }
    return 'white';
  }, [Time]);
  return (
    <div className="mainContainer" style={{ backgroundImage: `url(${backgroundDesign}` }}>
      <p className="temp" style={{ color: `${detailColor}` }}>
        {detail}°C
      </p>
      <p className="location" style={{ color: `${detailColor}` }}>
        Zamboanga City
      </p>
      <Time />
    </div>
  );
}

export default MainContent;
