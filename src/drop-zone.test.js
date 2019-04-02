import React from 'react';
import {act, fireEvent, render} from 'react-testing-library';
import {DropZone} from "./drop-zone";

describe('DropZone', () => {
    test('should function normally', () => {
        const {getByText} = render(<DropZone/>);
        const dropZone = getByText('Drop File Here');
        const file = new File(['(⌐□_□)'], 'chucknorris.png', {
            type: 'image/png',
        });
        act(() => {
            fireEvent.drop(dropZone, {
                dataTransfer: {
                    files: [file]
                }
            });
        });
    });
});