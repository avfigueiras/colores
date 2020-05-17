import React from 'react';
import Home from '../Home';
import { render } from '@testing-library/react';

describe("Home test", () =>{
    test("test 1", () =>{
        const homeComponent = render(<Home />);

        expect(homeComponent).toMatchSnapshot();
    })
})