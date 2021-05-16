import Senzori from './bluetooth/index';

const pulsReader = () => {
  const index = Math.floor(Math.random() * 9);
  return Senzori.puls[index];
};

const saturatieReader = () => {
  const index = Math.floor(Math.random() * 6);
  return Senzori.saturatieOX[index];
};

export default {
  pulsReader,
  saturatieReader,
};
