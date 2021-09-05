import classes from "./Input.module.css";

const Input = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* Spread operator to poplulate props.input */}
            <input {...props.input} />
        </div>
    );
};

export default Input;
