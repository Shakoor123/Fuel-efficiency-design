import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
const CicularProgressBar = ({ percentage, color }) => {
  return (
    <div style={{ width: "45px", height: "45px" }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0.75,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "round",

          // Text size
          textSize: "20px",

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.0,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: "gray",
          textColor: "white",
          trailColor: color,
          backgroundColor: "yellow",
        })}
      />
    </div>
  );
};

export default CicularProgressBar;
