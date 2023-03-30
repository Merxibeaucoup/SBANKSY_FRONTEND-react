import React from "react";

const AccountList = ({ item }) => {
  return (
    <div>
      <ul>
        <li>
          <div className="money">
            <div className="money__number">
              <p>Nickname</p>
              <h3>{item.number}</h3>
            </div>
            <div className="money__balance">
              <p>
                balance: <span>${item.balance.toLocaleString("en-US")}</span>{" "}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AccountList;
