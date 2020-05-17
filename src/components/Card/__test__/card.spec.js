import React from 'react';
import Card from '../index';
import { render } from '@testing-library/react';

describe("Card test", () =>{
    test("test 1", () =>{
        const cardComponent = render(<Card />);

        expect(cardComponent).toMatchSnapshot();
    })
})