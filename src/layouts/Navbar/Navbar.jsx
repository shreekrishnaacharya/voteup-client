import React from 'react'
import { MenuList } from './MenuList'
import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setLogout } from "redux/action/userAction";
import { useHistory } from "react-router-dom";
import { pages } from "links/pages";

const Navbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const logoutButton = () => {
        dispatch(setLogout());
        history.push(pages.LOGIN);
    }
    let menuList = {};
    menuList = MenuList.map(({ url, title }, index) => {
        return (
            <NavLink to={url} exact key={index} className="item" activeClassName="active" style={{ float: "left" }}>{title}</NavLink>
        );
    });

    return (
        <div style={{ marginBottom: "100px" }}>
            <div className="ui fixed top menu">
                <div className="item">
                    <i className="address card icon yellow" style={{ fontSize: "50px", margin: "-10px 25px" }}></i>
                </div>
                {menuList}
                <div className="right menu">
                    <div className='item'>
                        <a className="ui red button " onClick={logoutButton}>Logout</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export { Navbar };