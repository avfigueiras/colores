import React from 'react';
import Color from '../index';
import { render } from '@testing-library/react';

const mockHistory = {
    push: jest.fn()
};

describe("Color test", () =>{
    test("test 1", () =>{
        const colorComponent = render(
        <Color history={mockHistory}/>);

        expect(colorComponent).toMatchSnapshot();
    })
})