import Senzori from './bluetooth/index';

let renderCounter = 0;

const pulsReader = () => {
  const index = Math.floor(Math.random() * 17);
  return Senzori.puls[index];
};

const saturatieReader = () => {
  const index = Math.floor(Math.random() * 6);
  return Senzori.saturatieOX[index];
};

const getEkg = ekg => {
  renderCounter++;
  let value;
  if (renderCounter % 2 === 1) {
    value = [...ekg, ...Senzori.ekg1];
    return value.slice(8, value.length);
  }
  if (renderCounter % 2 === 0) {
    value = [...ekg, ...Senzori.ekg];
    return value.slice(14, value.length);
  }
};

export default {
  pulsReader,
  saturatieReader,
  getEkg,
};
