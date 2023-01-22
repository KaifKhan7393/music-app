import React, { useState } from "react";
import SongContext from "./SongContext";

const SongState = ({ children }) => {

    const [songSrc, setSongSrc] = useState('');

    return (
        <SongContext.Provider value={{ songSrc, setSongSrc }}>
            {children}
        </SongContext.Provider>
    )

}

export default SongState;