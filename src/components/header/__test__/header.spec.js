import React from 'react';
import Header from '../index';
import { render } from '@testing-library/react';

describe("Header test", () =>{
    test("test 1", () =>{
        const headerComponent = render(<Header />);

        expect(headerComponent).toMatchSnapshot();
    })
})