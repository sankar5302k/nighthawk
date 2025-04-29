"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface DashboardChartProps {
  data: {
    month: string
    vulnerabilities: number
  }[]
}

export function DashboardChart({ data }: DashboardChartProps) {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="month" stroke="#9ca3af" tick={{ fill: "#9ca3af" }} />
          <YAxis stroke="#9ca3af" tick={{ fill: "#9ca3af" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              borderColor: "#374151",
              color: "white",
            }}
          />
          <Line
            type="monotone"
            dataKey="vulnerabilities"
            stroke="#a855f7"
            strokeWidth={2}
            dot={{ fill: "#a855f7", r: 4 }}
            activeDot={{ r: 6, fill: "#c084fc" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
