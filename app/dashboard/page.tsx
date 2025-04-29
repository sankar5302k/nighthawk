import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, PieChart, LineChart, Activity } from "lucide-react"
import { DashboardChart } from "@/components/dashboard-chart"
import { VulnerabilityTypeChart } from "@/components/vulnerability-type-chart"
import { ScanHistoryTable } from "@/components/scan-history-table"

export default function DashboardPage() {
  // Mock data for educational purposes
  const recentScans = [
    { id: "scan1", url: "http://snl4ezg4pjeyyruayikjraqpoiz5w6izskr6z5hgdsqz4btnt6mckdyd.onion/", date: "2023-07-15", vulnerabilities: 12, score: 65 },
    { id: "scan2", url: "hhttp://snl4ezg4pjeyyruayikjraqpoiz5w6izskr6z5hgdsqz4btnt6mckdyd.onion/", date: "2023-07-14", vulnerabilities: 27, score: 42 },
    { id: "scan3", url: "http://snl4ezg4pjeyyruayikjraqpoiz5w6izskr6z5hgdsqz4btnt6mckdyd.onion/", date: "2023-07-12", vulnerabilities: 5, score: 78 },
    { id: "scan4", url: "http://snl4ezg4pjeyyruayikjraqpoiz5w6izskr6z5hgdsqz4btnt6mckdyd.onion/", date: "2023-07-10", vulnerabilities: 19, score: 51 },
    { id: "scan5", url: "http://snl4ezg4pjeyyruayikjraqpoiz5w6izskr6z5hgdsqz4btnt6mckdyd.onion/", date: "2023-07-08", vulnerabilities: 8, score: 72 },
  ]

  const vulnerabilityTypes = [
    { name: "XSS", count: 24 },
    { name: "SQL Injection", count: 18 },
    { name: "RCE", count: 12 },
    { name: "CSRF", count: 15 },
    { name: "Information Disclosure", count: 21 },
    { name: "Other", count: 10 },
  ]

  const monthlyData = [
    { month: "Jan", vulnerabilities: 42 },
    { month: "Feb", vulnerabilities: 38 },
    { month: "Mar", vulnerabilities: 45 },
    { month: "Apr", vulnerabilities: 32 },
    { month: "May", vulnerabilities: 28 },
    { month: "Jun", vulnerabilities: 24 },
    { month: "Jul", vulnerabilities: 36 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pb-16">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Scanner
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">Security Dashboard</h1>
            <p className="text-gray-400 mt-2">Comprehensive overview of your vulnerability scans</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button className="bg-purple-600 hover:bg-purple-700">New Scan</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total Scans</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-gray-400 mt-1">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Vulnerabilities Found</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">842</div>
              <p className="text-xs text-gray-400 mt-1">+5% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Average Security Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">58/100</div>
              <p className="text-xs text-gray-400 mt-1">+3% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Critical Vulnerabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-400">37</div>
              <p className="text-xs text-gray-400 mt-1">-8% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800/50 border border-gray-700 rounded-lg mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="history">Scan History</TabsTrigger>
            <TabsTrigger value="trends">Vulnerability Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="space-y-1">
                    <CardTitle>Monthly Vulnerability Trend</CardTitle>
                    <CardDescription>Number of vulnerabilities found per month</CardDescription>
                  </div>
                  <LineChart className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent className="pt-6">
                  <DashboardChart data={monthlyData} />
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="space-y-1">
                    <CardTitle>Vulnerability Types</CardTitle>
                    <CardDescription>Distribution by vulnerability category</CardDescription>
                  </div>
                  <PieChart className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <VulnerabilityTypeChart data={vulnerabilityTypes} />
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="space-y-1">
                  <CardTitle>Recent Scans</CardTitle>
                  <CardDescription>Your latest vulnerability scans</CardDescription>
                </div>
                <Activity className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <ScanHistoryTable scans={recentScans} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle>Scan History</CardTitle>
                <CardDescription>Complete history of your vulnerability scans</CardDescription>
              </CardHeader>
              <CardContent>
                <ScanHistoryTable scans={recentScans} showAll={true} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle>Vulnerability Trends</CardTitle>
                <CardDescription>Long-term security trends and analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center text-gray-400 py-12">
                  Detailed trend analysis charts would be displayed here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
