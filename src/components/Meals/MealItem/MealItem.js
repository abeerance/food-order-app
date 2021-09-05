import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import AvailableMeals from "../AvailableMeals";

const MealItem = (props) => {
    const price = `${props.price.toFixed(2)} CHF`;

    return (
        <li className={classes.meal}>
            <div>
                <h3 className={classes["meal h3"]}>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id}/>
            </div>
        </li>
    );
};

export default MealItem;
