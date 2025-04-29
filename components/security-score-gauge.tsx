"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

interface SecurityScoreGaugeProps {
  score: number
}

export function SecurityScoreGauge({ score }: SecurityScoreGaugeProps) {
  // Calculate colors based on score
  let color = "#f87171" // red for low scores
  if (score > 70) {
    color = "#4ade80" // green for high scores
  } else if (score > 40) {
    color = "#facc15" // yellow for medium scores
  }

  const data = [
    { name: "Score", value: score },
    { name: "Remaining", value: 100 - score },
  ]

  return (
    <div className="relative w-[200px] h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            <Cell key="score" fill={color} />
            <Cell key="remaining" fill="#374151" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-4xl font-bold">{score}</div>
        <div className="text-sm text-gray-400">Security Score</div>
      </div>
    </div>
  )
}
