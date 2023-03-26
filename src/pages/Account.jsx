import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import newRequest from "../utils/newRequest";
import AccountList from "./AccountList";

const Account = () => {
  const [userAccountNumbers, setUserAccountNumbers] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const userAccounts = async () => {
      try {
        const res = await newRequest.get("/account/user/accounts", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setUserAccountNumbers(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    userAccounts();
  }, []);

  return (
    <div>
      {userAccountNumbers
        ? userAccountNumbers.map((item) => {
            return <AccountList item={item} key={item.id} />;
          })
        : null}
    </div>
  );
};

export default Account;
