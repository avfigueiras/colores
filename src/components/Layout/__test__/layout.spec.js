import React from 'react';
import Layout from '../index';
import { render } from '@testing-library/react';

describe("Layout test", () =>{
    test("test 1", () =>{
        const layoutComponent = render(<Layout />);

        expect(layoutComponent).toMatchSnapshot();
    })
})