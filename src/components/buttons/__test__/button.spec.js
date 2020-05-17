import React from 'react';
import Boton from '../index';
import {render} from '@testing-library/react';

describe("Boton test", () =>{
    test("test 1", () =>{
        const BotonComponent = render(<Boton />);

        expect(BotonComponent).toMatchSnapshot();
    })
})