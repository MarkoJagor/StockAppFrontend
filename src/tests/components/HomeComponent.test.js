import React from "react";
import HomeComponent from "../../components/HomeComponent";
import {shallow} from "enzyme";

describe('HomeComponent', () => {
    let wrapper;
    let instance;
    beforeEach(() => {
        wrapper = shallow(<HomeComponent/>);
        instance = wrapper.instance();
        jest.clearAllMocks();
    });

    describe('filterTickers function', () => {
        it('should change "filteredTickers" state', () => {
            const mockEvent = {
                query: "T"
            };
            const expectedCompanyCount = 4;

            jest.useFakeTimers();
            instance.filterTickers(mockEvent);
            setTimeout(() => {
                expect(wrapper.state('filteredTickers')).toHaveLength(expectedCompanyCount);
            }, 250)
            jest.runAllTimers();
        })
    })

    describe('onSearch function', () => {
        it('should open new window, if search query is correct', () => {
            global.open = jest.fn()
            wrapper.setState({ticker: "tal1t"});
            instance.onSearch();

            expect(global.open).toBeCalledWith(("screener/" + wrapper.state('ticker').toUpperCase()), "_blank");
        })

        it('should call "showError" function, if search query is incorrect', () => {
            const spy = jest.spyOn(instance, 'showError');
            instance.messages = {show: jest.fn()}
            wrapper.setState({ticker: "tal1ttt"});
            instance.onSearch();

            expect(spy).toBeCalled();
        })
    })

    describe('AutoComplete onChange event', () => {
        it('should change "ticker" state', () => {
            const mockEvent = {
                value: "text"
            };
            const expectedValue = "text";

            wrapper.find('AutoComplete').simulate('change', mockEvent)
            expect(wrapper.state('ticker')).toEqual(expectedValue)
        })
    })
})