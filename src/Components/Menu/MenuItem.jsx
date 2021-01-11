import React from 'react'

function MenuItem({mnuItem}){    
    return (
    <li><a href={mnuItem.link}>{mnuItem.name}</a></li>
    );
}

export default MenuItem;