import React from "react";
import KDALIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'

function Budget() {
    return (
        <div>
            <p>Budget</p>
            <button id="back2Top" onClick={() => window.location.pathname = "/"}>
                <KDALIcon 
                    fontSize="large"
                />
            </button>
        </div>
    )
}

export default Budget