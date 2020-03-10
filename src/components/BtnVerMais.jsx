import React, {useState} from 'react';
import {Button} from 'react-bootstrap'


function BtnVerMais({disabled, onClick, buttonText}) {
    return (
        <Button
            disabled={disabled}
            onClick={() => onClick(event)}>
            {buttonText}
        </Button>
    )
}

export { BtnVerMais };
