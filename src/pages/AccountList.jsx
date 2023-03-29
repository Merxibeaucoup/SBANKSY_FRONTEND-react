import React from "react";

const AccountList = ({ item }) => {
  return (
    <div>
      <ul>
        <li>
          <p>
            {item.number} : {item.balance}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default AccountList;
