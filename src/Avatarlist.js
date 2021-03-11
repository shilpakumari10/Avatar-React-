import React from 'react';
import 'tachyons';

const Avatarlist= (props) => {
    return (
        <div className="avatarstyle  ma4 bg-black dib pa3 grow tc">
            <img src={'https://joeschmoe.io/api/v1/${props.name}'} alt="Avatar" />
            <h1>{ props.name}</h1>
            <p>{ props.work}</p>
        </div>
        )
    }
export default Avatarlist;