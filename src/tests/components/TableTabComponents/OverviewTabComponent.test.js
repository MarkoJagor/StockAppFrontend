import React from "react";
import {shallow} from "enzyme";
import OverviewTabComponent from "../../../components/TableTabComponents/OverviewTabComponent";

describe('OverviewTabComponent', () => {
    it('passes down correct props to Table component', () => {
        const wrapper = shallow(<OverviewTabComponent/>)
        expect(wrapper.find('Table').props()).toMatchObject({
            dynamicColumns: wrapper.state().dynamicColumns,
            tickerData: wrapper.props().tickerData,
            tableData: wrapper.props().tableData,
            filterInputs: wrapper.props().filterInputs,
            searchByTickerInput: wrapper.props().searchByTickerInput,
            updateTickerSearch: wrapper.props().updateTickerSearch,
            filterTableData: wrapper.props().filterTableData,
            handleFilterInputChange: wrapper.props().handleFilterInputChange,
            handleRangeSliderChange: wrapper.props().handleRangeSliderChange,
            resetFilterInputs: wrapper.props().resetFilterInputs
        })
    })
})