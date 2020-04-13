import React from "react";

export function setCellBody(row, column, i) {

    const columns = [row.name, row.employees, row.sector, row.industry, row.financialsDaily.price, row.financialsDaily.div_yield, row.financialsDaily.mkt_cap, row.financialsDaily.p_e,
        row.financialsDaily.price_rev, row.financialsDaily.p_b, row.financialsDaily.ev_ebitda, row.financialsDaily.ev, row.financialsDaily.chg, row.financialsDaily.weekly_perf,
        row.financialsDaily.monthly_perf, row.financialsDaily.three_month_perf, row.financialsDaily.six_month_perf, row.financialsDaily.ytd_perf, row.financialsDaily.yearly_perf,
        row.financialsDaily.one_year_beta, row.financialsDaily.volatility, row.financialsQuarterly.current_ratio, row.financialsQuarterly.debt_to_equity, row.financialsQuarterly.net_debt,
        row.financialsQuarterly.quick_ratio, row.financialsQuarterly.assets, row.financialsQuarterly.debt, row.financialsQuarterly.current_assets, row.financialsQuarterly.eps_fy,
        row.financialsQuarterly.eps_ttm, row.financialsQuarterly.eps_diluted, row.financialsQuarterly.ebitda, row.financialsQuarterly.gross_profit_mrq,
        row.financialsQuarterly.gross_profit_fy, row.financialsQuarterly.revenue, row.financialsQuarterly.eps_diluted_fy, row.financialsQuarterly.annual_revenue, row.financialsQuarterly.income,
        row.financialsQuarterly.gross_mrq, row.financialsQuarterly.operating_mrq, row.financialsQuarterly.pretax_mrq, row.financialsQuarterly.net_mrq, row.financialsQuarterly.div_paid,
        row.financialsQuarterly.div_per_share, row.financialsQuarterly.roa, row.financialsQuarterly.roe, row.financialsQuarterly.shares]

    const fields = ["name", "employees", "sector", "industry", "financialsDaily.price", "financialsDaily.div_yield", "financialsDaily.mkt_cap", "financialsDaily.p_e",
        "financialsDaily.price_rev", "financialsDaily.p_b", "financialsDaily.ev_ebitda", "financialsDaily.ev", "financialsDaily.chg", "financialsDaily.weekly_perf",
        "financialsDaily.monthly_perf", "financialsDaily.three_month_perf", "financialsDaily.six_month_perf", "financialsDaily.ytd_perf", "financialsDaily.yearly_perf",
        "financialsDaily.one_year_beta", "financialsDaily.volatility", "financialsQuarterly.current_ratio", "financialsQuarterly.debt_to_equity", "financialsQuarterly.net_debt",
        "financialsQuarterly.quick_ratio", "financialsQuarterly.assets", "financialsQuarterly.debt", "financialsQuarterly.current_assets", "financialsQuarterly.eps_fy",
        "financialsQuarterly.eps_ttm", "financialsQuarterly.eps_diluted", "financialsQuarterly.ebitda", "financialsQuarterly.gross_profit_mrq",
        "financialsQuarterly.gross_profit_fy", "financialsQuarterly.revenue", "financialsQuarterly.eps_diluted_fy", "financialsQuarterly.annual_revenue", "financialsQuarterly.income",
        "financialsQuarterly.gross_mrq", "financialsQuarterly.operating_mrq", "financialsQuarterly.pretax_mrq", "financialsQuarterly.net_mrq", "financialsQuarterly.div_paid",
        "financialsQuarterly.div_per_share", "financialsQuarterly.roa", "financialsQuarterly.roe", "financialsQuarterly.shares"]

    for (i = 0; i < columns.length; i++) {
        if (column.field === fields[i]) {
            if (columns[i] === null) {
                return <p>-</p>
            } else {
                return <p>{columns[i]}</p>
            }
        }
    }
}