import React from "react";

const AccountList = ({ item }) => {
  return (
    <div>
      <h1>{item.number}</h1>
      <h2>${item.balance}</h2>
    </div>
  );
};

export default AccountList;
