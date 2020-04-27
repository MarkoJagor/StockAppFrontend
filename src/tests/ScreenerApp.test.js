import React from "react";
import {cleanup, render} from '@testing-library/react'
import ScreenerApp from "../ScreenerApp";

afterEach(cleanup)

it('should take a snapshot', () => {
    const {asFragment} = render(<ScreenerApp/>)

    expect(asFragment(<ScreenerApp/>)).toMatchSnapshot()
});