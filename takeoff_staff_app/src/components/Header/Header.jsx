import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <section className={classes.header}>
            <div className={classes.wrapper}>
                <div className={classes.logo_part}>
                    <p>Logo</p>
                    {/*<img src={logo} alt="Logotype" />*/}
                </div>
                <div className={classes.right_part}>
                    {/*<div className={classes.login_block}>*/}
                    {/*    { props.isAuth*/}
                    {/*        ? <p>{props.login} <button onClick={props.logout}>Logout</button></p>*/}
                    {/*        : <NavLink to={'/login'}>Login</NavLink> }*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    )
}

export default Header;