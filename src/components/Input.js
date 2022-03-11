import useStyles from "./Input.style.js";

function Input({ value, onChange }) {
  const classes = useStyles();
  const placeholder = "🔍  What do you want ?";
  return (
    <input
      className={classes.root}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
