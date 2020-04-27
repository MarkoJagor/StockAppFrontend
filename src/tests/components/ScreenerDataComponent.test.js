import React from 'react';
import {shallow} from 'enzyme';
import ScreenerDataComponent from "../../components/ScreenerDataComponent";
import axios from "axios";

jest.mock('axios');

describe('ScreenerDataComponent', () => {
    describe('when rendered', () => {
        it('should fetch a list of companies', () => {
            const getSpy = jest.spyOn(axios, 'get');
            const ScreenerDataComponentInstance = shallow(<ScreenerDataComponent/>);
            expect(getSpy).toBeCalled();
            getSpy.mockClear();
        });
    });
});