import React from 'react';
import {shallow} from 'enzyme';
import ScreenerDataComponent from "../../../components/ScreenerComponents/ScreenerDataComponent";
import axios from "axios";
import {act} from 'react-dom/test-utils';

jest.mock('axios');

const whenStable = async () => {
    await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 0))
    })
}

describe('ScreenerDataComponent', () => {
    describe('when rendered', () => {
        it('should fetch a list of companies', async () => {
            const getSpy = jest.spyOn(axios, 'get');
            const wrapper = shallow(<ScreenerDataComponent/>);
            await whenStable();
            expect(getSpy).toBeCalled();
            expect(wrapper.find('TabsComponent').prop('tickerData')).toEqual(wrapper.state().tickerData)
            getSpy.mockRestore();
        });
    });
});