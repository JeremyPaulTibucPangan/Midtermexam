import React from 'react';
import Pangan from 'pangan';

export default function App() {
    const textToDisplay = "Hello World";

    return (
        <div>
            <Pangan display={textToDisplay} />
        </div>
    );
}