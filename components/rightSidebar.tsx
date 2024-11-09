import React from "react";
import Link from "next/link";

const RightSidebar = ({ user, transactions, banks }) => {
  return (
    <aside className="right-sidebar">
      <section className="flec flex-col pb-8">
        <div className="profile-banner">
          <div className="profile">
            <div className="profile-img">
              <span className="text-5xl font-bold text-blue-500">
                {user.firstName[0]}
              </span>
            </div>
            <div className="profile-details">
              <h1 className="profile-name">
                {user.firstName} {user.lastName}
              </h1>
              <p className="profilr-email">{user.email}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Banks</h2>
          {/* <Link></Link> */}
        </div>
      </section>
    </aside>
  );
};

export default RightSidebar;
