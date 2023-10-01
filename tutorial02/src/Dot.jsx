import "./Dot.css";

export default function Dot({ x, y }) {
  return <div className="dot" style={{ top: y, left: x }}></div>;
}
