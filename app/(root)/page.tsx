import React from "react";
import HeaderBox from "@/components/ui/headerBox";
import TotalBalanceBox from "@/components/ui/totalBalanceBox";
import RightSidebar from "@/components/ui/rightSidebar";

const Home = () => {
  const loggedIn = {
    firstName: "Shailly",
    lastName: "Sahay",
    email: "shaillysahayy@gmail.com",
  };

  return (
    <section className="home ">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1335.25}
          />
        </header>
        RECENT TRASNACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: "123.5" }, { currentBalance: 143.5 }]}
      />
    </section>
  );
};

export default Home;
