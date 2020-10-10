import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
    const MenuItemList = [
        { name: "ongyjho", url: "intro", icon: "fas fa-rocket" },
        { name: "project", url: "project", icon: "fas fa-project-diagram" },
        { name: "blog", url: "https://blog.ongyjho.org", icon: "fab fa-wordpress" },
        { name: "github", url: "github", icon: "fab fa-github-square" }
    ];
    return (
        <div>
            {
                MenuItemList.map((menuItem) => (<MenuItem {...menuItem} />))
            }
        </div>
    );
}

export default Menu;