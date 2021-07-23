import React from 'react';
import './AdminLoginError.css';

export default function AdminLoginError({msg}) {
    return (
        <div>
            {msg && <span>{msg}</span>}
        </div>
    )
}
