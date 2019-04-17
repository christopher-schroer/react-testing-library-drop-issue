import React, {useCallback} from 'react';

export const DropZone = () => {
    const handleDrop = useCallback(event => {
        console.log(event.dataTransfer.files[0].name);
    });
    return React.createElement("div", {
        onDrop: handleDrop
    }, "Drop File Here");
};