// import { formatAmount } from "@/lib/utils";
import React from "react";
// import CountUp from "react-countup";
import AnimatedCounter from "./animatedCounter";
import DoughnutChart from "./doughnutChart";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank accounts: {totalBanks} </h2>

        <div className="flex flex-col  gap-2">
          <p className="total-balance-label">Total currrent balance</p>
          <div className="total-balance-amount flex flex-center gap-2">
            {/* <CountUp end={100} /> */}
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;