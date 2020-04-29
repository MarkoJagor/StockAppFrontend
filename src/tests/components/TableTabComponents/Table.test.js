import React from "react";
import {shallow} from "enzyme";
import Table from "../../../components/TableTabComponents/Table";

describe('Table', () => {
    let wrapper;
    let instance;
    beforeEach(() => {
        Table.defaultProps = {
            dynamicColumns: [],
            mockData: [
                {field: "name", header: "Name", sortable: true, excludeGlobalFilter: true},
                {field: "financialsDaily.price", header: "Price", sortable: true, excludeGlobalFilter: true},
                {field: "financialsDaily.chg", header: "Change %", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.eps_ttm", header: "EPS (TTM)", sortable: true, excludeGlobalFilter: true}
            ]
        };
        wrapper = shallow(<Table dynamicColumns={Table.defaultProps.mockData}/>);
        instance = wrapper.instance();
        jest.clearAllMocks();
    });

    describe('onColumnToggle function', () => {
        it('should change "selectedColumns" state', () => {
            const mockEvent = {
                value: [
                    {field: "financialsDaily.price", header: "Price", sortable: true, excludeGlobalFilter: true},
                    {field: "financialsDaily.chg", header: "Change %", sortable: true, excludeGlobalFilter: true}
                ]
            }
            instance.onColumnToggle(mockEvent);
            expect(wrapper.state('selectedColumns')).toEqual(mockEvent.value)
        })
    })

    describe('showModal function', () => {
        it('should change "show" state', () => {
            expect(wrapper.state('show')).toEqual(false);
            instance.showModal();
            expect(wrapper.state('show')).toEqual(true);
        })
    })
})