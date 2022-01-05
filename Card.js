const Card = (props) => {
    return (
      <div>
        <h2>{props.item}</h2>
        <button onClick={() => props.removeHandler(props.index)}>remove</button>
      </div>
    );
  };
export default Card