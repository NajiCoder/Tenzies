import propTypes from "prop-types";

export default function Dice(props) {
  const { value, isHeld, id, changeState } = props;

  return (
    <div
      onClick={() => changeState(id, value)}
      className={`flex justify-center items-center h-12 w-12 shadow-md rounded-xl hover:transition cursor-pointer ${
        isHeld ? "bg-customGreen" : "bg-white"
      }`}
    >
      <h2 className="font-bold text-md">{value}</h2>
    </div>
  );
}

Dice.propTypes = {
  value: propTypes.number.isRequired,
  isHeld: propTypes.bool.isRequired,
  id: propTypes.string.isRequired,
  changeState: propTypes.func.isRequired,
};
