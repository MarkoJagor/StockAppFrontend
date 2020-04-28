import React from "react";
import {shallow} from "enzyme";
import TabsComponent from "../../../components/TableTabComponents/TabsComponent";
import axios from "axios";

describe('TabsComponent', () => {
    let wrapper;
    let instance;
    beforeEach(() => {
        wrapper = shallow(<TabsComponent/>);
        instance = wrapper.instance();
        jest.clearAllMocks();
    });

    describe('updateTickerSearch function', () => {
        it('should change "searchByTickerInput" state', () => {
            const searchValue = "aaa";
            expect(wrapper.state('searchByTickerInput')).toEqual("");
            instance.updateTickerSearch(searchValue);
            expect(wrapper.state('searchByTickerInput')).toEqual(searchValue);
        })
    })

    describe('filterTableData function', () => {
        it('should change "tableData" state', () => {
            const tableData = jest.spyOn(axios, 'get');
            expect(wrapper.state('tableData')).toHaveLength(0);
            instance.filterTableData(tableData);
            expect(wrapper.state('tableData')).toEqual(tableData);
        })
    })

    describe('handleFilterInputChange function', () => {
        it('should change "filterInputs" array item state', () => {
            const mockEvent = {
                target: {
                    name: "oneYearBetaMin",
                    value: "1"
                }
            };
            const expectedValue = "1"
            wrapper.instance().handleFilterInputChange(mockEvent);
            expect(wrapper.state().filterInputs.oneYearBetaMin).toEqual(expectedValue)
        })
    })

    describe('handleSliderChange function', () => {
        it('should change "filterInputs" array item state', () => {
            const mockEvent = {
                target: {
                    name: "assetsRange",
                    value: [1000, 2000]
                }
            }
            const expectedArray = [1000, 2000];
            wrapper.instance().handleRangeSliderChange(mockEvent.target.name, mockEvent.target.value);
            expect(wrapper.state().filterInputs.assetsRange).toEqual(expectedArray);
        })
    })

    describe('resetFilterInputs function', () => {
        it('should change "filterInputs" array state', () => {
            const mockFilterInputs = {
                oneYearBetaMin: "",
                oneYearBetaMax: "",
                threeMonthPerfMin: "",
                threeMonthPerfMax: ""
            };
            wrapper.setState({filterInputsClone: mockFilterInputs});
            wrapper.instance().resetFilterInputs();
            expect(wrapper.state().filterInputs).toEqual(mockFilterInputs)
        })
    })

    describe('onTabChange function', () => {
        it('should change "activeIndex" state', () => {
            const activeIndex = 0;
            const mockEvent = {
                index: 1
            }
            const expectedIndex = 1
            expect(wrapper.state().activeIndex).toEqual(activeIndex)
            wrapper.instance().onTabChange(mockEvent)
            expect(wrapper.state().activeIndex).toEqual(expectedIndex)
        })
    })
})
