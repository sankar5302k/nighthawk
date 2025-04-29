"use client"

import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface Scan {
  id: string
  url: string
  date: string
  vulnerabilities: number
  score: number
}

interface ScanHistoryTableProps {
  scans: Scan[]
  showAll?: boolean
}

export function ScanHistoryTable({ scans, showAll = false }: ScanHistoryTableProps) {
  // Function to get score badge color
  const getScoreBadge = (score: number) => {
    if (score >= 70) {
      return <Badge className="bg-green-600">{score}</Badge>
    } else if (score >= 50) {
      return <Badge className="bg-yellow-600">{score}</Badge>
    } else {
      return <Badge className="bg-red-600">{score}</Badge>
    }
  }

  // Display all scans or just the first 5
  const displayScans = showAll ? scans : scans.slice(0, 5)

  return (
    <div className="rounded-md border border-gray-700">
      <Table>
        <TableHeader className="bg-gray-900/50">
          <TableRow>
            <TableHead>URL</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Vulnerabilities</TableHead>
            <TableHead>Score</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayScans.map((scan) => (
            <TableRow key={scan.id}>
              <TableCell className="font-medium">{scan.url}</TableCell>
              <TableCell>{new Date(scan.date).toLocaleDateString()}</TableCell>
              <TableCell>{scan.vulnerabilities}</TableCell>
              <TableCell>{getScoreBadge(scan.score)}</TableCell>
              <TableCell className="text-right">
                <Link href={`/results?id=${scan.id}`}>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">View details</span>
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
