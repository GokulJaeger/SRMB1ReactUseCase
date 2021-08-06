import React from 'react';
import './CheckerLoginError.css';

export default function CheckerLoginError({msg}) {
    return (
        <div>
            {msg && <span>{msg}</span>}
        </div>
    )
}