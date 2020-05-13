import React from "react";
import {setCellBody} from "../../../components/ScreenerComponents/TableComponentHelper";

describe('TableComponentsHelper', () => {
    let mockCompany =
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
                "net_debt": null,
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
        }

    describe('setCellBody function', () => {
        it('should return name of mockCompany', () => {
            const mockCompanyField =
                {
                    "field": "name"
                }
            expect(setCellBody(mockCompany, mockCompanyField, 0)).toEqual(<p>TALLINK GRUPP</p>)
        })

        it('should return - as employees of mockCompany is null', () => {
            const mockCompanyField =
                {
                    "field": "employees"
                }
            expect(setCellBody(mockCompany, mockCompanyField, 0)).toEqual(<p>-</p>)
        })

        it('should return formatted value of mkt_cap of mockCompany', () => {
            const mockCompanyField =
                {
                    "field": "financialsDaily.mkt_cap"
                }
            expect(setCellBody(mockCompany, mockCompanyField, 0)).toEqual(<p>{mockCompany.financialsDaily.mkt_cap / 1000}M</p>)
        })

        it('should return - as net_debt of company is null', () => {
            const mockCompanyField =
                {
                    "field": "financialsQuarterly.net_debt"
                }
            expect(setCellBody(mockCompany, mockCompanyField, 0)).toEqual(<p>-</p>)
        })
    })

})