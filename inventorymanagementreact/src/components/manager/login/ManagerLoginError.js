import React from 'react';
import './ManagerLoginError.css';

export default function ManagerLoginError({msg}) {
    return (
        <div>
            {msg && <span>{msg}</span>}
        </div>
    )
}