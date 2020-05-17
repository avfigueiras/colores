import React from 'react';
import Detail from '../index';
import { render } from '@testing-library/react';

const renderWithProps = (props) => {
    const defaultProps = {
        match: { params: { color:'color' } },
    };
    return render(< Detail {...defaultProps} />);
}

describe("Detail test", () =>{
    test("test 1", () =>{
        expect(renderWithProps).toMatchSnapshot();
    })
})