"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Shield, AlertTriangle, XCircle, Info } from "lucide-react"
import { VulnerabilityChart } from "@/components/vulnerability-chart"
import { SecurityScoreGauge } from "@/components/security-score-gauge"
import { VulnerabilityTable } from "@/components/vulnerability-table"
import { useSearchParams } from "next/navigation"
import { getAnalysisResults } from "@/lib/data"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const scanId = searchParams.get("id")
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadResults() {
      if (scanId) {
        try {
          const data = await getAnalysisResults(scanId)
          setResults(data)
        } catch (error) {
          console.error("Failed to load results:", error)
        } finally {
          setLoading(false)
        }
      }
    }

    loadResults()
  }, [scanId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold">Analyzing results...</h2>
          <p className="text-gray-400 mt-2">This may take a moment</p>
        </div>
      </div>
    )
  }

  // For demo purposes, we'll use mock data if no results are available
  const data = results || {
    url: "http://snl4ezg4pjeyyruayikjraqpoiz5w6izskr6z5hgdsqz4btnt6mckdyd.onion/",
    scanDate: new Date().toISOString(),
    securityScore: 42,
    vulnerabilities: {
      high: 3,
      medium: 7,
      low: 12,
      info: 5,
    },
    vulnerabilityDetails: [
      {
        id: 1,
        name: "SQL Injection",
        severity: "high",
        location: "/login.php",
        description: "Potential SQL injection vulnerability in login form",
      },
      {
        id: 2,
        name: "Cross-Site Scripting (XSS)",
        severity: "high",
        location: "/search",
        description: "Reflected XSS in search parameter",
      },
      {
        id: 3,
        name: "Remote Code Execution",
        severity: "high",
        location: "/upload.php",
        description: "Unrestricted file upload allows for potential RCE",
      },
      {
        id: 4,
        name: "Information Disclosure",
        severity: "medium",
        location: "/about",
        description: "Server information leakage in HTTP headers",
      },
      {
        id: 5,
        name: "Insecure Cookies",
        severity: "medium",
        location: "Global",
        description: "Cookies set without secure flag",
      },
      {
        id: 6,
        name: "Missing HTTP Security Headers",
        severity: "low",
        location: "Global",
        description: "Missing Content-Security-Policy header",
      },
    ],
    rceVulnerabilities: [
      {
        id: 1,
        name: "Unrestricted File Upload",
        risk: 85,
        details: "The application allows uploading of .php files without proper validation",
      },
      {
        id: 2,
        name: "Outdated next version Version",
        risk: 70,
        details: "Server is running next 13 which has known RCE vulnerabilities on api routes",
      },
      { id: 3, name: "Command Injection", risk: 90, details: "User input is passed directly to system() function" },
    ],
    urlDefects: [
      { id: 1, name: "Open Redirect", risk: 60, details: "Redirect parameter is not validated" },
      { id: 2, name: "Path Traversal", risk: 75, details: "Directory traversal possible in file parameter" },
      {
        id: 3,
        name: "URL Parameter Pollution",
        risk: 45,
        details: "Multiple parameters with the same name are processed insecurely",
      },
    ],
    technologies: [
      { name: "Next js", version: "5.4.3" },
      { name: "React js", version: "2.4.10" },
      { name: "Html", version: "5.5.62" },
    ],
    timelineData: [
      { month: "Jan", vulnerabilities: 27 },
      { month: "Feb", vulnerabilities: 24 },
      { month: "Mar", vulnerabilities: 22 },
      { month: "Apr", vulnerabilities: 27 },
      { month: "May", vulnerabilities: 18 },
      { month: "Jun", vulnerabilities: 15 },
      { month: "Jul", vulnerabilities: 27 },
    ],
  }

  const totalVulnerabilities =
    data.vulnerabilities.high + data.vulnerabilities.medium + data.vulnerabilities.low + data.vulnerabilities.info

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
            <h1 className="text-3xl md:text-4xl font-bold">Vulnerability Analysis Results</h1>
            <p className="text-gray-400 mt-2">Scan completed on {new Date(data.scanDate).toLocaleString()}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button className="bg-purple-600 hover:bg-purple-700">Download Report</Button>
          </div>
        </div>

        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl font-medium text-white">{data.url}</CardTitle>
                <CardDescription>Onion Link Analysis</CardDescription>
              </div>
              <Badge variant="outline" className="bg-purple-900/30 text-purple-300 border-purple-700">
                Educational Scan
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-sm text-gray-400">Security Score</div>
                  <Shield className={`h-5 w-5 ${data.securityScore < 50 ? "text-red-400" : "text-yellow-400"}`} />
                </div>
                <div className="text-2xl font-bold">{data.securityScore}/100</div>
                <Progress value={data.securityScore} className="h-1.5 mt-2" />
              </div>

              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-sm text-gray-400">Total Vulnerabilities</div>
                  <AlertTriangle className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold">{totalVulnerabilities}</div>
                <div className="flex mt-2 text-xs">
                  <div className="text-red-400 mr-2">High: {data.vulnerabilities.high}</div>
                  <div className="text-yellow-400 mr-2">Medium: {data.vulnerabilities.medium}</div>
                  <div className="text-blue-400">Low: {data.vulnerabilities.low}</div>
                </div>
              </div>

              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-sm text-gray-400">RCE Vulnerabilities</div>
                  <XCircle className="h-5 w-5 text-red-400" />
                </div>
                <div className="text-2xl font-bold">{data.rceVulnerabilities.length}</div>
                <div className="text-xs text-gray-400 mt-2">Critical security issues detected</div>
              </div>

              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-sm text-gray-400">URL Defects</div>
                  <Info className="h-5 w-5 text-blue-400" />
                </div>
                <div className="text-2xl font-bold">{data.urlDefects.length}</div>
                <div className="text-xs text-gray-400 mt-2">URL-related security issues</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800/50 border border-gray-700 rounded-lg mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="vulnerabilities">Vulnerabilities</TabsTrigger>
            <TabsTrigger value="rce">RCE Analysis</TabsTrigger>
            <TabsTrigger value="url">URL Defects</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle>Security Score</CardTitle>
                  <CardDescription>Overall security assessment</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <SecurityScoreGauge score={data.securityScore} />
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle>Vulnerability Distribution</CardTitle>
                  <CardDescription>By severity level</CardDescription>
                </CardHeader>
                <CardContent>
                  <VulnerabilityChart
                    data={[
                      { name: "High", value: data.vulnerabilities.high, color: "#f87171" },
                      { name: "Medium", value: data.vulnerabilities.medium, color: "#facc15" },
                      { name: "Low", value: data.vulnerabilities.low, color: "#60a5fa" },
                      { name: "Info", value: data.vulnerabilities.info, color: "#94a3b8" },
                    ]}
                  />
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle>Detected Technologies</CardTitle>
                <CardDescription>Software and frameworks identified</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {data.technologies.map((tech, index) => (
                    <div key={index} className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                      <div className="font-medium">{tech.name}</div>
                      <div className="text-sm text-gray-400">Version: {tech.version}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle>Vulnerability Trend</CardTitle>
                <CardDescription>Historical vulnerability data</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full">
                  {/* This would be a line chart component */}
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Historical vulnerability trend chart would be displayed here
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vulnerabilities">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle>Detected Vulnerabilities</CardTitle>
                <CardDescription>{totalVulnerabilities} vulnerabilities found during analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <VulnerabilityTable vulnerabilities={data.vulnerabilityDetails} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rce">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle>Remote Code Execution Vulnerabilities</CardTitle>
                <CardDescription>Critical security issues that could allow attackers to execute code</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.rceVulnerabilities.map((vuln) => (
                    <div key={vuln.id} className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-white">{vuln.name}</h3>
                        <Badge variant="outline" className="bg-red-900/30 text-red-300 border-red-700">
                          Risk: {vuln.risk}%
                        </Badge>
                      </div>
                      <p className="text-gray-400 mt-2">{vuln.details}</p>
                      <Progress value={vuln.risk} className="h-1.5 mt-4" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="url">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle>URL Defects Analysis</CardTitle>
                <CardDescription>Security issues related to URL handling and parameters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.urlDefects.map((defect) => (
                    <div key={defect.id} className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-white">{defect.name}</h3>
                        <Badge variant="outline" className="bg-yellow-900/30 text-yellow-300 border-yellow-700">
                          Risk: {defect.risk}%
                        </Badge>
                      </div>
                      <p className="text-gray-400 mt-2">{defect.details}</p>
                      <Progress value={defect.risk} className="h-1.5 mt-4" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
