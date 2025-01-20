import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import NoData from "../components/NoData";
import SummaryApi from "../common/SummaryApi";
import Axios from "../utils/Axios";
import AxiosToastError from "../utils/AxiosToastError";

const MyOrders = () => {
  const orders = useSelector((state) => state.orders.order);
  const user = useSelector((state) => state.user);

  console.log("order Items", orders);
  return (
    <div>
      {/* {!orders[0] && <NoData />}
      {orders.map((order, index) => {
        return (
          <div
            key={order._id + index + "order"}
            classNameName="order rounded p-4 text-sm"
          >
            <p>Order No : {order?.orderId}</p>
            <div classNameName="flex gap-3">
              <img src={order.product_details.image[0]} classNameName="w-14 h-14" />
              <p classNameName="font-medium">{order.product_details.name}</p>
            </div>
          </div>
        );
      })} */}

      <div className="flex flex-col justify-start items-start  bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        <p className="text-md  font-semibold leading-6 xl:leading-5 text-gray-800">
          Dear {user?.name} <span>Your Orders</span>
        </p>

        {!orders[0] && <NoData />}
        {orders.map((order, index) => {
          return (
            <div
              key={order._id + index + "order"}
              className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full"
            >
              <div className="pb-4 md:pb-8 w-full md:w-40">
                <img
                  className="w-full block"
                  src={order.product_details.image[0]}
                  alt="dress"
                />
              </div>
              <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-3">
                  <p>Order No : {order?.orderId}</p>
                  <h3 className="text-xl  xl:text-2xl font-semibold leading-6 text-gray-800">
                    {order.product_details.name}
                  </h3>
                  <p className="text-base xl:text-lg leading-6">
                    Payment status: {order.payment_status}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
