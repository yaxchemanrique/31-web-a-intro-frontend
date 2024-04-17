import React, { useState, useEffect } from "react";

const Timer = () => {

    const [timeLeft, setTimeLeft] = useState(60);

    useEffect(() => {
        if (!timeLeft) return;

        const intervalID = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000)

        return () => clearInterval(intervalID)
    }, [timeLeft])

    return(
        <div>
            <h1>{timeLeft}</h1>
        </div>
    )
}

export {Timer}