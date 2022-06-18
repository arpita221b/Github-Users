const Box = (props) => {
  return (
    <div className="box">
      <div className="img">
        <img className="image" src={props.src} />
      </div>
      <div className="details">
        <div>{props.username}</div>
        <a href={props.repository} target="_blank">
          Profile{" "}
        </a>
      </div>
    </div>
  );
};

export default Box;
