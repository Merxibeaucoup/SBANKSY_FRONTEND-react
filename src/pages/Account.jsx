import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import newRequest from "../utils/newRequest";
import AccountList from "./AccountList";
import {
  BiBarChartSquare,
  BiMessageSquareAdd,
  BiArea,
  BiMoney,
} from "react-icons/bi";
import {
  BsCreditCard2Front,
  BsCalendarEvent,
  BsChatLeftDots,
  BsSendCheck,
  BsArrowUp,
} from "react-icons/bs";
import { MdOutlineSettingsApplications } from "react-icons/md";

const Account = () => {
  const [userAccountNumbers, setUserAccountNumbers] = useState([]);
  const { user } = useContext(AuthContext);
  const [state] = useState({
    logo: "assets/images/logo.svg",
  });

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
    <div className="account__container">
      <div className="account__wrapper">
        <div className="account">
          <div className="account__left">
            <div className="account__left__content">
              <img src={state.logo} alt="" />
              <ul>
                <li>
                  <span>
                    <BiBarChartSquare />
                  </span>
                  Dashboad
                </li>
                <li>
                  <span>
                    <BsSendCheck />
                  </span>
                  Transactions
                </li>
                <li>
                  <span>
                    <BsCreditCard2Front />
                  </span>
                  Accounts
                </li>
                <li>
                  <span>
                    <MdOutlineSettingsApplications />
                  </span>
                  Settings
                </li>
                <li>
                  <span>
                    <BsCalendarEvent />
                  </span>
                  Calendar
                </li>
                <li>
                  <span>
                    <BsChatLeftDots />
                  </span>
                  Chat
                </li>
              </ul>
            </div>
          </div>
          <div className="account__middle">
            <div className="account__middle__header">
              <h2 className="account__middle__header-heading">Dashboard</h2>
              <h4 className="account__middle__header-time">
                <span> showing for</span> : {new Date().toLocaleString()}
              </h4>
            </div>
            <div className="account__middle__top">
              <ul>
                <li>
                  <span>
                    <BsSendCheck />
                  </span>
                  send money
                </li>
                <li>
                  <span>
                    <BiMessageSquareAdd />
                  </span>
                  deposit money
                </li>
                <li>
                  <span>
                    <BiArea />
                  </span>
                  request withdrawal
                </li>

                <li>
                  <span>
                    <BiMoney />
                  </span>
                  view balance
                </li>
              </ul>
            </div>
            <div className="account__middle__middle">
              <div className="account__middle__middle-left">
                <h2>Total Balance</h2>
                <h1>$100,000</h1>
                <p>
                  <span>
                    <BsArrowUp />
                  </span>
                  3.73%
                </p>
              </div>
              <div className="account__middle__middle-right">
                right --+ put an add in here
              </div>
            </div>
            <div className="account__middle__bottom">
              bottom --+ put transactions in here
            </div>
          </div>
          <div className="account__right">right </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

// {userAccountNumbers
//   ? userAccountNumbers.map((item) => {
//       return <AccountList item={item} key={item.id} />;
//     })
//   : null}
