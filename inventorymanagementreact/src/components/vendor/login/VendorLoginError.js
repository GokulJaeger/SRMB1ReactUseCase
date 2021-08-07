import React from 'react';
import './VendorLoginError.css';

export default function VendorLoginError({msg}) {
    return (
        <div>
            {msg && <span>{msg}</span>}
        </div>
    )
}