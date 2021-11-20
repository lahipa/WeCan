import React from "react";
import cx from "classnames";
// Utils
import { limitContentText, convertToPrice } from "../../../utils/globals";

export default function CardCampaign(props) {
  const { data } = props;

  const progressbarclass = cx(
    "h-full absolute left-0 top-0",
    {
      "bg-blue-500": (data?.donation_percentage * 100) < 100,
      "bg-red-500": (data?.donation_percentage * 100) >= 100,
    }
  )

  return (
    <div
      data-testid="card"
      className="border border-gray-300 rounded-md relative overflow-hidden"
    >
      <div style={{ height: 200 }}>
        <img
          src={data?.image}
          alt={data?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col">
        <h5>{limitContentText(data?.title, 40)}</h5>
        
        <div className="py-4">
          <div className="w-full h-1 relative bg-gray-400 overflow-hidden rounded-full">
            <div data-testid="card-progress" className={progressbarclass} style={{ width: `${data?.donation_percentage * 100}%` }} />
          </div>
        </div>

        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col gap-1">
            <small className="text-gray-500">Terkumpul</small>
            <p>{convertToPrice(data?.donation_received)}</p>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <small className="text-gray-500">Sisa hari</small>
            <p>{data?.days_remaining}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
