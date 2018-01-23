import React from 'react'
import {Link} from 'react-router-dom'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

import routes from '../routes'

const SideBarItem = (props) => (
    <Link
        style={{textDecoration: 'none'}}
        to={props.to}
        onClick={props.drawerToggle}
    >
        <MenuItem>{props.text}</MenuItem>
    </Link>
)

const SideBar = (props) => (
    <Drawer
        docked={false}
        width={250}
        open={props.isDrawerOpen}
        onRequestChange={props.drawerToggle}
    >
        {
            routes.map((route, index) => (
                <SideBarItem
                    key={route.path}
                    to={route.to || route.path}
                    text={`${index + 1}. ${route.text}`}
                    drawerToggle={props.drawerToggle}
                />
            ))
        }
    </Drawer>
)

export default SideBar