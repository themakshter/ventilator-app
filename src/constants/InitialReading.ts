import Constants from './Constants';

export default {
  peep: {
    name: 'PEEP',
    unit: 'cmH2O',
    setValue: 5,
    value: 5,
    lowerLimit: 4,
    upperLimit: 21,
  },
  measuredPressure: 25,
  plateauPressure: {
    name: 'Plateau Pressure',
    unit: 'cmH2O',
    setValue: 50,
    value: 50,
    lowerLimit: 51,
    upperLimit: 49,
  },
  respiratoryRate: {
    name: 'Patient Rate',
    upperLimit: 35,
    lowerLimit: 8,
    unit: 'BPM',
    setValue: 20,
    value: 20,
  },
  tidalVolume: {
    name: 'Tidal Volume',
    unit: 'ml',
    setValue: 600,
    value: 400,
    lowerLimit: 300,
    upperLimit: 700,
  },
  ieRatio: '1:2',
  vti: 100,
  vte: 400,
  minuteVentilation: {
    name: 'Minute Vent.',
    unit: 'lpm',
    setValue: 10,
    value: 10,
    lowerLimit: 9,
    upperLimit: 11,
  },
  inspiratoryTime: 3,
  expiratoryTime: 5,
  fiO2: {
    name: 'FiO2',
    upperLimit: 100,
    lowerLimit: 50,
    unit: '%',
    setValue: 75,
    setValueText: '40-50',
    value: 75,
  },
  flowRate: 23,
  pip: {
    name: 'PIP',
    unit: 'cmH20',
    setValue: 50,
    value: 50,
    lowerLimit: 100,
    upperLimit: 0,
  },
  mode: 'VCV',
  graphPressure: new Array(Constants.GraphLength).fill(40),
  graphVolume: new Array(Constants.GraphLength).fill(400),
  graphFlow: new Array(Constants.GraphLength).fill(100),
  alarms: [],
  pressureGraph: {
    upperLimit: 80,
    lowerLimit: 0,
  },
};