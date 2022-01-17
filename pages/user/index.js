import UserWrapper from "../../components/wrapperRoutes/userWrapper";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import moment from "moment";
import Link from "next/link";
import DrawerWrapper from "../../components/wrapperRoutes/DrawerWrapper";
const UserDashboard = () => {
  const [active, setActive] = useState(false);

  const { state: user } = useContext(Context);
  useEffect(() => {
    if (user == null) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [user]);
  return (
    <DrawerWrapper>
      <UserWrapper>
        {active && (
          <>
            <div className="container mx-auto my-5 p-5">
              <div className="md:flex no-wrap md:-mx-2 ">
                <div className="w-full md:w-3/12 md:mx-2">
                  <div className="bg-white p-3 border-t-4 border-primary">
                    <div className="image overflow-hidden">
                      <img
                        className="h-auto w-full mx-auto"
                        src="https://media.istockphoto.com/vectors/male-profile-flat-blue-simple-icon-with-long-shadow-vector-id522855255?k=20&m=522855255&s=612x612&w=0&h=fLLvwEbgOmSzk1_jQ0MgDATEVcVOh_kqEe0rqi7aM5A="
                        alt=""
                      />
                    </div>
                    <h1 className="text-accent font-bold text-xl leading-8 my-1">
                      {user.user.name}
                    </h1>
                    <h3 className="text-gray-600 font-sm text-semibold leading-6">
                      {user.user.email}
                    </h3>

                    <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                      <li className="flex items-center py-3">
                        <span>Account Status</span>
                        <span className="ml-auto">
                          <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                            Active
                          </span>
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span>Member since</span>
                        <span className="ml-auto">
                          {moment(user.user.createdAt).format("MMM Do YY")}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="my-4"></div>
                </div>
                <div className="w-full md:w-9/12 mx-2 h-64">
                  <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                      <span clas="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">About</span>
                    </div>
                    <div className="text-gray-700">
                      <div className="grid md:grid-cols-2 text-sm">
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Name</div>
                          <div className="px-4 py-2">{user.user.name}</div>
                        </div>

                        <div className="dropdown dropdown-hover">
                          <div
                            tabindex="0"
                            className=" border-2 text-center rounded-lg"
                          >
                            See my roles
                          </div>
                          <ul
                            tabindex="0"
                            className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-full"
                          >
                            {user.user.role.map((rl) => (
                              <li>
                                <a className="text-accent">{rl}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">E-mail</div>
                          <div className="px-4 py-2">{user.user.email}</div>
                        </div>

                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Last Updated
                          </div>
                          <div className="px-4 py-2">
                            {" "}
                            {moment(user.user.updatedAt).format("MMM Do YY")}
                          </div>
                        </div>
                      </div>
                    </div>
                    {user && user.user.role.includes("Instructor") ? (
                      <Link href="/instructor">
                        <button className="block w-full text-gray-100 text-sm rounded-lg bg-accent hover:shadow-xs p-3 my-4">
                          Instructor Dashboard
                        </button>
                      </Link>
                    ) : (
                      <button className="block w-full text-primary text-sm font-semibold rounded-lg bg-accent hover:shadow-xs p-3 my-4">
                        Become Instructor
                      </button>
                    )}
                  </div>

                  <div className="my-4"></div>

                  <div className="bg-white p-4  shadow-lg  rounded-lg">
                    <div className="grid grid-cols-2">
                      {user &&
                        user.user.stripe_seller &&
                        user.user.stripe_seller.charges_enabled && (
                          <div>
                            <div>
                              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                  <svg
                                    className="h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                  </svg>
                                </span>
                                <span className="tracking-wide">
                                  Stripe Bank Information{" "}
                                </span>
                              </div>
                              <ul className="list-inside space-y-2">
                                <li>
                                  <div className="text-accent">
                                    Bank Identification
                                  </div>
                                  <div className="text-secondary text-xs">
                                    {
                                      user.user.stripe_seller.external_accounts
                                        .data[0].bank_name
                                    }
                                  </div>
                                </li>
                                <li>
                                  <div className="text-accent">
                                    Country -Currency
                                  </div>
                                  <div className="text-secondary text-xs">
                                    {
                                      user.user.stripe_seller.external_accounts
                                        .data[0].country
                                    }{" "}
                                    -{" "}
                                    {
                                      user.user.stripe_seller.external_accounts
                                        .data[0].currency
                                    }
                                  </div>
                                </li>
                                <li>
                                  <div className="text-accent">
                                    Contact Number
                                  </div>
                                  <div className="text-secondary text-xs">
                                    {
                                      user.user.stripe_seller.business_profile
                                        .support_phone
                                    }
                                  </div>
                                </li>
                                <li>
                                  <div className="text-accent">
                                    Account Type
                                  </div>
                                  <div className="text-secondary text-xs">
                                    {
                                      user.user.stripe_seller.external_accounts
                                        .data[0].available_payout_methods
                                    }
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <ul className="list-inside space-y-2">
                              <li>
                                <div className="text-accent">
                                  Masters Degree in Oxford
                                </div>
                                <div className="text-secondary text-xs">
                                  March 2020 - Now
                                </div>
                              </li>
                              <li>
                                <div className="text-accent">
                                  Bachelors Degreen in LPU
                                </div>
                                <div className="text-secondary text-xs">
                                  March 2020 - Now
                                </div>
                              </li>
                            </ul>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <h1>
            <pre>{JSON.stringify(user, null, 4)}</pre>
          </h1> */}
          </>
        )}
      </UserWrapper>
      <div className=" pb-20"></div>
    </DrawerWrapper>
  );
};
export default UserDashboard;
