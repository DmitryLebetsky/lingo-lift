import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { appName, pagesInfo } from '../../helpers/constants';

import { useDispatch, useSelector } from 'react-redux';

import { changeLoggedStatusAction } from '../../store/loginManagerReducer';

import { sendNotificationAction } from '../../store/notificationManagerReducer';

import loginManager from '../../entities/loginManager';
import notificationManager from '../../entities/notificationManager';

const addLinksToHeader = (link, index) => {
    const { title, path } = link;
    return (
        <li key={index} className="navigation__item">
            {
                <NavLink
                    className={({ isActive }) => (isActive ? "navigation__item_active" : 'none')}
                    exact="true" to={path}
                >
                    {title}
                </NavLink>
            }
        </li>
    );
};

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOut = async () => {
        await loginManager.logOut()
        dispatch(changeLoggedStatusAction(loginManager.isAuthorized));
        if (!loginManager.isAuthorized) {
            navigate(pagesInfo.signIn.path);
            dispatch(sendNotificationAction(notificationManager.getNotification()));
        }
    }

    const isUserLogged = useSelector(state => state.loginManager.isLogged);

    const linksLayout = isUserLogged ? (
        <>
            {Object.values(pagesInfo).filter((page) => page.loggedNeed).map(addLinksToHeader)}
            <li className="navigation__item exit-icon">
                <NavLink activeClassName="navigation__item_active">
                    <IconButton
                        onClick={logOut}>
                        <ExitToAppIcon
                            color="disabled"
                            style={{ fontSize: '3rem' }}
                        />
                    </IconButton>
                </NavLink>
            </li>
        </>
    ) : (
        Object.values(pagesInfo).filter((page) => !page.loggedNeed).map(addLinksToHeader)
    );
    return (
        <header className='header'>
            <span className='logo'>{appName}</span>
            <nav>
                <ul className="navigation">
                    <>{linksLayout}</>
                </ul>
            </nav>
        </header>
    )
}

export default Header;