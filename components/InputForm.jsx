import React, { useState, setState } from "react";
import { TextInput } from "react-native-paper";
import { Keyboard } from 'react-native';

export const Modal = () => {
    return (
        <>
            <TextInput
                placeholder="Store Name"
                maxLength={20}
                onBlur={Keyboard.dismiss}
            />
            <TextInput
                placeholder="Month (string)"
                maxLength={20}
                onBlur={Keyboard.dismiss}
            />
            <TextInput
                placeholder="Day"
                maxLength={20}
                onBlur={Keyboard.dismiss}
            />
            <TextInput
                placeholder="Year"
                maxLength={20}
                onBlur={Keyboard.dismiss}
            />
            <TextInput
                placeholder="Total Cost"
                maxLength={20}
                onBlur={Keyboard.dismiss}
            />
        </>
    );
};
