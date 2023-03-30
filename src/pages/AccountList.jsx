import React from "react";

const AccountList = ({ item }) => {
  return (
    <div>
      <ul>
        <li>
          <div className="money">
            <div className="money__number">
              <h2>Nickname</h2>
              <h5>{item.number}</h5>
            </div>
            <div className="money__balance">
              <h5>
                balance: <span>${item.balance}</span>{" "}
              </h5>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AccountList;
