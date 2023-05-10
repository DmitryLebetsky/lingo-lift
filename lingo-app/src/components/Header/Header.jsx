import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { appName, pagesInfo } from '../../helpers/constants';

const addLinksToHeader = (link, index) => {
    const { title, path } = link;
    return (
      <li key={index} className="navigation__item">
        {
          <NavLink
            className={({isActive}) => (isActive ? "navigation__item_active" : 'none')}
            exact="true" to={path}
            >
              {title}
            </NavLink>
        }
      </li>
    );
  };

class Header extends Component {
    render() {
        const {
            isUserLogged,
            logoutUser,
          } = this.props;

        return (
            <header className='header'>
                <span className='logo'>{appName}</span>
                <nav>
                    <ul className="navigation">
                        {
                            Object.values(pagesInfo).map(addLinksToHeader)
                        }
                        {
                            isUserLogged && <li className="navigation__item exit-icon">
                                <NavLink activeClassName="navigation__item_active" to="/">
                                    <IconButton
                                        onClick={logoutUser}>
                                        <ExitToAppIcon
                                            color="disabled"
                                            style={{ fontSize: '3rem' }}
                                        />
                                    </IconButton>
                                </NavLink>
                            </li>
                        }
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;