import React from "react";
import {shallow} from "enzyme";
import FilterComponent from "../../../components/ScreenerComponents/FilterComponent";

describe('FilterComponent', () => {
    let wrapper;
    let instance;
    let mockResetFilterInputs = jest.fn();
    let mockHandleRangeSliderChange = jest.fn();
    let mockHandleFilterInputChange = jest.fn();
    let mockOnClose = jest.fn();
    let mockFilterInputs = {
        oneYearBetaMin: "",
        oneYearBetaMax: "",
        threeMonthPerfMin: "",
        threeMonthPerfMax: "",
        sixMonthPerfMin: "",
        sixMonthPerfMax: "",
        annualRevenueRange: [0, 2000],
        assetsRange: [0, 5000],
        currentAssetsRange: [0, 1000],
        debtRange: [0, 1000],
        divPaidRange: [-100, 0],
        chgMin: "",
        chgMax: "",
        currentRatioMin: "",
        currentRatioMax: "",
        debtToEquityMin: "",
        debtToEquityMax: "",
        divPerShareMin: "",
        divPerShareMax: "",
        divYieldMin: "",
        divYieldMax: "",
        ebitdaRange: [0, 1000],
        epsFyMin: "",
        epsFyMax: "",
        epsTtmMin: "",
        epsTtmMax: "",
        epsDilutedFyMin: "",
        epsDilutedFyMax: "",
        epsDilutedTtmMin: "",
        epsDilutedTtmMax: "",
        evRange: [-2000, 2000],
        evEbitdaMin: "",
        evEbitdaMax: "",
        grossMrqMin: "",
        grossMrqMax: "",
        grossProfitFyRange: [-200, 200],
        grossProfitMrqRange: [-200, 200],
        incomeRange: [-100, 100],
        mktCapRange: [0, 2000],
        netDebtRange: [-2000, 2000],
        monthlyPerfMin: "",
        monthlyPerfMax: "",
        netMrqMin: "",
        netMrqMax: "",
        operatingMrqMin: "",
        operatingMrqMax: "",
        priceMin: "",
        priceMax: "",
        p_eMin: "",
        p_eMax: "",
        p_bMin: "",
        p_bMax: "",
        pretaxMrqMin: "",
        pretaxMrqMax: "",
        priceToRevMin: "",
        priceToRevMax: "",
        quickRatioMin: "",
        quickRatioMax: "",
        revenueRange: [0, 2000],
        roaMin: "",
        roaMax: "",
        roeMin: "",
        roeMax: "",
        sharesRange: [0, 1000],
        volatilityMin: "",
        volatilityMax: "",
        weeklyPerfMin: "",
        weeklyPerfMax: "",
        yearlyPerfMin: "",
        yearlyPerfMax: "",
        ytdPerfMin: "",
        ytdPerfMax: ""
    };
    let mockTickerData = [
        {
            "ticker_id": "TAL1T",
            "name": "TALLINK GRUPP",
            "employees": null,
            "sector": "Transportation",
            "industry": "Marine Shipping",
            "financialsDaily": {
                "ticker_id": "TAL1T",
                "price": 0.662,
                "div_yield": null,
                "mkt_cap": 411308.0,
                "p_e": 9.68,
                "price_rev": 0.43,
                "p_b": 0.4815,
                "ev_ebitda": 8.01,
                "ev": 1160000.0,
                "chg": 0.0195,
                "weekly_perf": -0.63,
                "monthly_perf": -31.29,
                "three_month_perf": -34.85,
                "six_month_perf": -33.62,
                "ytd_perf": -35.66,
                "yearly_perf": -38.43,
                "one_year_beta": 1.26,
                "volatility": 2.25
            },
            "financialsQuarterly": {
                "ticker_id": "TAL1T",
                "current_ratio": 0.51,
                "debt_to_equity": 0.69,
                "net_debt": 526584.0,
                "quick_ratio": 0.36,
                "assets": 1564000.0,
                "debt": 564821.0,
                "current_assets": 139767.0,
                "eps_fy": 0.06,
                "eps_ttm": 0.06,
                "eps_diluted_ttm": 0.06,
                "ebitda": 157691.0,
                "gross_profit_mrq": 86682.0,
                "gross_profit_fy": 175469.0,
                "revenue": 949723.0,
                "eps_diluted_fy": 0.06,
                "annual_revenue": 949723.0,
                "income": 40049.0,
                "gross_mrq": 0.2027,
                "operating_mrq": 0.0691,
                "pretax_mrq": 0.0544,
                "net_mrq": 0.0448,
                "div_paid": -20096.0,
                "div_per_share": 0.12,
                "roa": 2.74,
                "roe": 5.07,
                "shares": 669882
            }
        },
        {
            "ticker_id": "TSM1T",
            "name": "TALLINNA SADAM",
            "employees": null,
            "sector": "Transportation",
            "industry": "Other Transportation",
            "financialsDaily": {
                "ticker_id": "TSM1T",
                "price": 1.67,
                "div_yield": 0.0859,
                "mkt_cap": 410280.0,
                "p_e": 9.36,
                "price_rev": 3.14,
                "p_b": 1.38,
                "ev_ebitda": 9.39,
                "ev": 694718.0,
                "chg": 0.016,
                "weekly_perf": 0.0292,
                "monthly_perf": -0.168,
                "three_month_perf": -0.2035,
                "six_month_perf": -0.1954,
                "ytd_perf": -0.2015,
                "yearly_perf": -0.2696,
                "one_year_beta": 1.04,
                "volatility": 0.016
            },
            "financialsQuarterly": {
                "ticker_id": "TSM1T",
                "current_ratio": 1.48,
                "debt_to_equity": 0.55,
                "net_debt": 172663.0,
                "quick_ratio": 1.47,
                "assets": 625532.0,
                "debt": 207846.0,
                "current_assets": 46347.0,
                "eps_fy": 0.17,
                "eps_ttm": 0.17,
                "eps_diluted_ttm": 0.17,
                "ebitda": 73999.0,
                "gross_profit_mrq": 8928.0,
                "gross_profit_fy": 50963.0,
                "revenue": 130536.0,
                "eps_diluted_fy": 0.17,
                "annual_revenue": 130536.0,
                "income": 44404.0,
                "gross_mrq": 0.4382,
                "operating_mrq": 0.3904,
                "pretax_mrq": 0.3825,
                "net_mrq": 0.3402,
                "div_paid": -34970.0,
                "div_per_share": null,
                "roa": 0.0711,
                "roe": 0.1193,
                "shares": 263000
            }
        },
        {
            "ticker_id": "TKM1T",
            "name": "TALLINNA KAUBAMAJA GRUPP",
            "employees": null,
            "sector": "Retail Trade",
            "industry": "Food Retail",
            "financialsDaily": {
                "ticker_id": "TKM1T",
                "price": 7.66,
                "div_yield": 0.0966,
                "mkt_cap": 339682.0,
                "p_e": 10.91,
                "price_rev": 0.47,
                "p_b": 1.59,
                "ev_ebitda": 7.88,
                "ev": 526185.0,
                "chg": 0.0106,
                "weekly_perf": -0.0821,
                "monthly_perf": -0.1611,
                "three_month_perf": -0.1556,
                "six_month_perf": -0.0663,
                "ytd_perf": -0.1461,
                "yearly_perf": -0.1364,
                "one_year_beta": 0.56,
                "volatility": 0.016
            },
            "financialsQuarterly": {
                "ticker_id": "TKM1T",
                "current_ratio": 1.0,
                "debt_to_equity": 0.9,
                "net_debt": 163695.0,
                "quick_ratio": 0.41,
                "assets": 522313.0,
                "debt": 204324.0,
                "current_assets": 135838.0,
                "eps_fy": 0.76,
                "eps_ttm": 0.76,
                "eps_diluted_ttm": 0.76,
                "ebitda": 66783.0,
                "gross_profit_mrq": 23752.0,
                "gross_profit_fy": 83647.0,
                "revenue": 717223.0,
                "eps_diluted_fy": 0.76,
                "annual_revenue": 717223.0,
                "income": 31137.0,
                "gross_mrq": 0.1127,
                "operating_mrq": 0.0504,
                "pretax_mrq": 0.0522,
                "net_mrq": 0.0434,
                "div_paid": -28917.0,
                "div_per_share": 0.73,
                "roa": 0.0667,
                "roe": 0.1373,
                "shares": 40729
            }
        }
    ];
    beforeEach(() => {
        wrapper = shallow(<FilterComponent resetFilterInputs={mockResetFilterInputs}
                                           handleRangeSliderChange={mockHandleRangeSliderChange}
                                           handleFilterInputChange={mockHandleFilterInputChange}
                                           onClose={mockOnClose}
                                           filterInputs={mockFilterInputs}
                                           tickerData={mockTickerData}/>);
        instance = wrapper.instance();
        jest.clearAllMocks();
    });

    describe('positiveValuesFilter function', () => {
        it('should return true if object matches constraints', () => {
            expect(instance.positiveValuesFilter(mockTickerData[0], 0, 1, mockTickerData[0].financialsDaily.price)).toEqual(true)
        })
        it('should return false if object does not match constraints', () => {
            expect(instance.positiveValuesFilter(mockTickerData[0], 0, 0.5, mockTickerData[0].financialsDaily.price)).toEqual(false)
        })
    })

    describe('positiveAndNegativeValues function', () => {
        it('should return true if object matches constraints', () => {
            expect(instance.positiveAndNegativeValuesFilter(mockTickerData[0], 0, 1, mockTickerData[0].financialsDaily.price)).toEqual(true)
        })
        it('should return false if object does not match constraints', () => {
            expect(instance.positiveAndNegativeValuesFilter(mockTickerData[0], 0, 0.5, mockTickerData[0].financialsDaily.price)).toEqual(false)
        })
    })

    describe('sliderValuesFilter function', () => {
        it('should return true if object matches constraints', () => {
            expect(instance.sliderValuesFilter(mockTickerData[0], [0, 2000], 100, 2000, mockTickerData[0].financialsQuarterly.annual_revenue)).toEqual(true);
        })
        it('should return false if object does not match constraints', () => {
            expect(instance.sliderValuesFilter(mockTickerData[0], [1500, 2000], 0, 2000, mockTickerData[0].financialsQuarterly.annual_revenue)).toEqual(false);
        })
    })

    describe('oneYearBetaFilter function', () => {
        it('should call "positiveValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveValuesFilter")
            instance.oneYearBetaFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.oneYearBetaMin, mockFilterInputs.oneYearBetaMax, mockTickerData[0].financialsDaily.one_year_beta);
        })
    })

    describe('threeMonthsPerfFilter function', () => {
        it('should call "positiveAndNegativeValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveAndNegativeValuesFilter")
            instance.threeMonthsPerfFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.threeMonthPerfMin, mockFilterInputs.threeMonthPerfMax, mockTickerData[0].financialsDaily.three_month_perf);
        })
    })

    describe('sixMonthsPerfFilter function', () => {
        it('should call "positiveAndNegativeValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveAndNegativeValuesFilter")
            instance.sixMonthsPerfFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.sixMonthPerfMin, mockFilterInputs.sixMonthPerfMax, mockTickerData[0].financialsDaily.six_month_perf);
        })
    })

    describe('annualRevenueFilter function', () => {
        it('should call "sliderValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "sliderValuesFilter")
            instance.annualRevenueFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.annualRevenueRange, 0, 2000, mockTickerData[0].financialsQuarterly.annual_revenue);
        })
    })

    describe('assetsFilter function', () => {
        it('should call "sliderValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "sliderValuesFilter")
            instance.assetsFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.assetsRange, 0, 5000, mockTickerData[0].financialsQuarterly.assets);
        })
    })

    describe('chgFilter function', () => {
        it('should call "positiveAndNegativeValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveAndNegativeValuesFilter")
            instance.chgFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.chgMin, mockFilterInputs.chgMax, mockTickerData[0].financialsDaily.chg);
        })
    })

    describe('currentAssetsFilter function', () => {
        it('should call "sliderValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "sliderValuesFilter")
            instance.currentAssetsFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.currentAssetsRange, 0, 1000, mockTickerData[0].financialsQuarterly.current_assets);
        })
    })

    describe('currentRatioFilter function', () => {
        it('should call "positiveValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveValuesFilter")
            instance.currentRatioFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.currentRatioMin, mockFilterInputs.currentRatioMax, mockTickerData[0].financialsQuarterly.current_ratio);
        })
    })

    describe('debtFilter function', () => {
        it('should call "sliderValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "sliderValuesFilter")
            instance.debtFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.debtRange, 0, 1000, mockTickerData[0].financialsQuarterly.debt);
        })
    })

    describe('debtToEquity function', () => {
        it('should call "positiveValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveValuesFilter")
            instance.debtToEquityFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.debtToEquityMin, mockFilterInputs.debtToEquityMax, mockTickerData[0].financialsQuarterly.debt_to_equity);
        })
    })

    describe('divPaidFilter function', () => {
        it('should call "sliderValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "sliderValuesFilter")
            instance.divPaidFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.divPaidRange, -100, 0, mockTickerData[0].financialsQuarterly.div_paid);
        })
    })

    describe('divPerShareFilter function', () => {
        it('should call "positiveValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveValuesFilter")
            instance.divPerShareFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.divPerShareMin, mockFilterInputs.divPerShareMax, mockTickerData[0].financialsQuarterly.div_per_share);
        })
    })

    describe('divYieldFilter function', () => {
        it('should call "positiveValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveValuesFilter")
            instance.divYieldFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.divYieldMin, mockFilterInputs.divYieldMax, mockTickerData[0].financialsDaily.div_yield);
        })
    })

    describe('ebitdaFilter function', () => {
        it('should call "sliderValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "sliderValuesFilter")
            instance.ebitdaFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.ebitdaRange, 0, 1000, mockTickerData[0].financialsQuarterly.ebitda);
        })
    })

    describe('epsFyFilter function', () => {
        it('should call "positiveAndNegativeValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveAndNegativeValuesFilter")
            instance.epsFyFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.epsFyMin, mockFilterInputs.epsFyMax, mockTickerData[0].financialsQuarterly.eps_fy);
        })
    })

    describe('epsTtmFilter function', () => {
        it('should call "positiveAndNegativeValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveAndNegativeValuesFilter")
            instance.epsTtmFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.epsTtmMin, mockFilterInputs.epsTtmMax, mockTickerData[0].financialsQuarterly.eps_ttm);
        })
    })

    describe('epsDilutedFyFilter function', () => {
        it('should call "positiveAndNegativeValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveAndNegativeValuesFilter")
            instance.epsDilutedFyFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.epsDilutedFyMin, mockFilterInputs.epsDilutedFyMax, mockTickerData[0].financialsQuarterly.eps_diluted_fy);
        })
    })

    describe('epsDilutedTtmFilter function', () => {
        it('should call "positiveAndNegativeValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveAndNegativeValuesFilter")
            instance.epsDilutedTtmFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.epsDilutedTtmMin, mockFilterInputs.epsDilutedTtmMax, mockTickerData[0].financialsQuarterly.eps_diluted_ttm);
        })
    })

    describe('evFilter function', () => {
        it('should call "sliderValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "sliderValuesFilter")
            instance.evFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.evRange, -2000, 2000, mockTickerData[0].financialsDaily.ev);
        })
    })

    describe('evEbitdaFilter function', () => {
        it('should call "positiveAndNegativeValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveAndNegativeValuesFilter")
            instance.evEbitdaFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.evEbitdaMin, mockFilterInputs.evEbitdaMax, mockTickerData[0].financialsDaily.ev_ebitda);
        })
    })

    describe('grossMrqFilter function', () => {
        it('should call "positiveValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveValuesFilter")
            instance.grossMrqFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.grossMrqMin, mockFilterInputs.grossMrqMax, mockTickerData[0].financialsQuarterly.gross_mrq);
        })
    })

    describe('grossProfitFyFilter function', () => {
        it('should call "sliderValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "sliderValuesFilter")
            instance.grossProfitFyFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.grossProfitFyRange, -200, 200, mockTickerData[0].financialsQuarterly.gross_profit_fy);
        })
    })

    describe('grossProfitMrqFilter function', () => {
        it('should call "sliderValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "sliderValuesFilter")
            instance.grossProfitMrqFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.grossProfitMrqRange, -200, 200, mockTickerData[0].financialsQuarterly.gross_profit_mrq);
        })
    })

    describe('incomeFilter function', () => {
        it('should call "sliderValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "sliderValuesFilter")
            instance.incomeFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.incomeRange, -100, 100, mockTickerData[0].financialsQuarterly.income);
        })
    })

    describe('mktCapFilter function', () => {
        it('should call "sliderValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "sliderValuesFilter")
            instance.mktCapFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.mktCapRange, 0, 2000, mockTickerData[0].financialsDaily.mkt_cap);
        })
    })

    describe('monthlyPerfFilter function', () => {
        it('should call "positiveAndNegativeValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveAndNegativeValuesFilter")
            instance.monthlyPerfFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.monthlyPerfMin, mockFilterInputs.monthlyPerfMax, mockTickerData[0].financialsDaily.monthly_perf);
        })
    })

    describe('netDebtFilter function', () => {
        it('should call "sliderValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "sliderValuesFilter")
            instance.netDebtFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.netDebtRange, -2000, 2000, mockTickerData[0].financialsQuarterly.net_debt);
        })
    })

    describe('netMrqFilter function', () => {
        it('should call "positiveValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveValuesFilter")
            instance.netMrqFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.netMrqMin, mockFilterInputs.netMrqMax, mockTickerData[0].financialsQuarterly.net_mrq);
        })
    })

    describe('operatingMrqFilter function', () => {
        it('should call "positiveValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveValuesFilter")
            instance.operatingMrqFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.operatingMrqMin, mockFilterInputs.operatingMrqMax, mockTickerData[0].financialsQuarterly.operating_mrq);
        })
    })

    describe('pEFilter function', () => {
        it('should call "positiveValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveValuesFilter")
            instance.pEFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.p_eMin, mockFilterInputs.p_eMax, mockTickerData[0].financialsDaily.p_e);
        })
    })

    describe('pBFilter function', () => {
        it('should call "positiveValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveValuesFilter")
            instance.pBFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.p_bMin, mockFilterInputs.p_bMax, mockTickerData[0].financialsDaily.p_b);
        })
    })

    describe('pretaxMrqFilter function', () => {
        it('should call "positiveValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveValuesFilter")
            instance.pretaxMrqFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.pretaxMrqMin, mockFilterInputs.pretaxMrqMax, mockTickerData[0].financialsQuarterly.pretax_mrq);
        })
    })

    describe('priceFilter function', () => {
        it('should call "positiveValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveValuesFilter")
            instance.priceFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.priceMin, mockFilterInputs.priceMax, mockTickerData[0].financialsDaily.price);
        })
    })

    describe('priceToRevFilter function', () => {
        it('should call "positiveValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveValuesFilter")
            instance.priceToRevFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.priceToRevMin, mockFilterInputs.priceToRevMax, mockTickerData[0].financialsDaily.price_rev);
        })
    })

    describe('quickRatioFilter function', () => {
        it('should call "positiveValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveValuesFilter")
            instance.quickRatioFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.quickRatioMin, mockFilterInputs.quickRatioMax, mockTickerData[0].financialsQuarterly.quick_ratio);
        })
    })

    describe('revenueFilter function', () => {
        it('should call "sliderValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "sliderValuesFilter")
            instance.revenueFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.revenueRange, 0, 2000, mockTickerData[0].financialsQuarterly.revenue);
        })
    })

    describe('roaFilter function', () => {
        it('should call "positiveAndNegativeValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveAndNegativeValuesFilter")
            instance.roaFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.roaMin, mockFilterInputs.roaMax, mockTickerData[0].financialsQuarterly.roa);
        })
    })

    describe('roeFilter function', () => {
        it('should call "positiveAndNegativeValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveAndNegativeValuesFilter")
            instance.roeFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.roeMin, mockFilterInputs.roeMax, mockTickerData[0].financialsQuarterly.roe);
        })
    })

    describe('sharesFilter function', () => {
        it('should call "sliderValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "sliderValuesFilter")
            instance.sharesFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.sharesRange, 0, 1000, mockTickerData[0].financialsQuarterly.shares);
        })
    })

    describe('volatilityFilter function', () => {
        it('should call "positiveValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveValuesFilter")
            instance.volatilityFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.volatilityMin, mockFilterInputs.volatilityMax, mockTickerData[0].financialsDaily.volatility);
        })
    })

    describe('weeklyPerfFilter function', () => {
        it('should call "positiveAndNegativeValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveAndNegativeValuesFilter")
            instance.weeklyPerfFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.weeklyPerfMin, mockFilterInputs.weeklyPerfMax, mockTickerData[0].financialsDaily.weekly_perf);
        })
    })

    describe('yearlyPerfFilter function', () => {
        it('should call "positiveAndNegativeValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveAndNegativeValuesFilter")
            instance.yearlyPerfFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.yearlyPerfMin, mockFilterInputs.yearlyPerfMax, mockTickerData[0].financialsDaily.yearly_perf);
        })
    })

    describe('ytdPerfFilter function', () => {
        it('should call "positiveAndNegativeValuesFilter" function', () => {
            const spy = jest.spyOn(instance, "positiveAndNegativeValuesFilter")
            instance.ytdPerfFilter(mockTickerData[0]);
            expect(spy).toBeCalledWith(mockTickerData[0], mockFilterInputs.ytdPerfMin, mockFilterInputs.ytdPerfMax, mockTickerData[0].financialsDaily.ytd_perf);
        })
    })

    describe('onClose function', () => {
        it('should call "props.onClose" function', () => {
            instance.onClose();
            expect(mockOnClose).toBeCalled();
        })
    })

    describe('handleInputChange function', () => {
        it('should call "handleFilterInputChange" and "filterResult" function', () => {
            const spy = jest.spyOn(instance, "filterResult")
            const mockEvent = {
                target: {
                    name: "oneYearBetaMin",
                    value: "1"
                }
            };
            instance.handleInputChange(mockEvent);
            expect(spy).toBeCalled();
            expect(mockHandleFilterInputChange).toBeCalled();
            expect(mockHandleFilterInputChange).toBeCalledWith(mockEvent);
        })
    })

    describe('handleSliderChange function', () => {
        it('should call "handleRangeSliderChange" and "filterResult" function', () => {
            const spy = jest.spyOn(instance, "filterResult")
            const mockEvent = {
                target: {
                    name: "assetsRange",
                    value: [1000, 2000]
                }
            }
            instance.handleSliderChange(mockEvent.target.name, mockEvent.target.value);
            expect(spy).toBeCalled();
            expect(mockHandleRangeSliderChange).toBeCalled();
            expect(mockHandleRangeSliderChange).toBeCalledWith(mockEvent.target.name, mockEvent.target.value)
        })
    })

    describe('resetFilterInputs function', () => {
        it('should call "props.resetFilterInputs" and "filterResult" function', () => {
            const spy = jest.spyOn(instance, "filterResult")
            instance.resetFilterInputs();
            expect(spy).toBeCalled();
            expect(mockResetFilterInputs).toBeCalled()
        })
    })
})