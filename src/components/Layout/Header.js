import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Get your meal on</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img
                    className={classes['main-image img']}
                    src={mealsImage}
                    alt="A buffet table full of delicious meals"
                />
            </div>
        </Fragment>
    );
};

export default Header;
