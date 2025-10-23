import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export const SalesChart = () => {
  const data = [
    { label: "Electronics", value: 45, color: "#3b82f6" },
    { label: "Clothing", value: 30, color: "#8b5cf6" },
    { label: "Books", value: 15, color: "#10b981" },
    { label: "Other", value: 10, color: "#f59e0b" },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 backdrop-blur-xl rounded-b-2xl p-6 border border-slate-700/50">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">
          Sales by Category
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Product Distribution
        </p>
      </div>

      <div className="flex justify-center">
        <PieChart
          series={[
            {
              innerRadius: 50,
              outerRadius: 100,
              data,
              arcLabel: "value",
            },
          ]}
          width={250}
          height={200}
          margin={{ right: 5 }}
          hideLegend
        />
      </div>

      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            {/* Left side: dot + label */}
            <div className="flex items-center space-x-3">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                {item.label}
              </span>
            </div>

            {/* Right side: percentage */}
            <div className="text-sm font-semibold text-slate-800 dark:text-white">
              {item.value}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
