/* eslint-disable react/prop-types */
// import Image from '../images/icon-memory.svg';

export default function Display(props) {
  let secondaryClassName;
  if (props.category === 'Reaction') {
    secondaryClassName = 'card-red';
  } else if (props.category === 'Memory') {
    secondaryClassName = 'card-yellow';
  } else if (props.category === 'Verbal') {
    secondaryClassName = 'card-green';
  } else {
    secondaryClassName = 'card-blue';
  }
  return (
    <>
      <div className="cards">
        <div className={`card ${secondaryClassName}`}>
          <div className="left-col">
            <img src={`${props.icon}`} alt="Reaction Icon" />
            <span>{props.category}</span>
          </div>
          <div className="right-col">
            <p>
              {props.score} <span>/100</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
