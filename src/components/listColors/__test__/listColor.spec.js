import React from 'react';
import List from '../index';
import { render } from '@testing-library/react';
import axios from 'axios';

jest.mock('axios');

describe("ListColors test", () =>{
    test("List  test1  some value ", async () => {
       const resultTest ={
            "data": {
                "id": 1,
                "name": "cerulean",
                "year": 2000,
                "color": "#98B2D1",
                "pantone_value": "15-4020"
            }
        }
        axios.get.mockImplementationOnce(() => Promise.resolve({data: {data: [resultTest]}}));

        const listComponent = render(<List/>);

        expect(listComponent).toMatchSnapshot();
        
    });
    test("List  test2  null value ", async () => {
         axios.get.mockImplementationOnce(() => Promise.resolve({data: {data: []}}));
 
         const listComponent = render(<List/>);
 
         expect(listComponent).toMatchSnapshot();
         
     });
})