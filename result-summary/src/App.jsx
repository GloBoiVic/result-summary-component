/* eslint-disable react/jsx-key */
import './App.scss';
import Display from './components/Display';
import data from '../data.json';

export default function App() {
  const cards = data.map((item) => {
    return <Display {...item} />;
  });

  return (
    <div className="app">
      <div className="top__section">
        <span>Your Result </span>
        <div className="result__display">
          <span>76</span> <br /> Of 100
        </div>
        <div className="result__description">
          <h1>Great</h1>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
      <div className="bottom__section">
        <h2>Summary</h2>
        {cards}
        <button>Continue</button>
      </div>
    </div>
  );
}
