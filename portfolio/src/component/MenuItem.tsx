import React from 'react';

interface Props {
    name: string;
    url: string;
    icon: string;
}

const MenuItem = (props: Props) => {
    return (
        <button className="MenuItem"><i className={props.icon}></i><strong>{props.name}</strong></button>
    );
}
export default MenuItem;