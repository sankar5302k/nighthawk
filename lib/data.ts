"use client"

// This file would normally contain actual data fetching logic
// For educational purposes, we're simulating the data

export async function getAnalysisResults(scanId: string) {
  // In a real application, this would fetch actual results from a database or API
  // For educational purposes, we're returning mock data

  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 1500))

  return {
    url: "37foyrhrygc6m75hs4zbxnzyjlddx2keemrrjwdhdgvtrhuwemrqvad.onion",
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
        name: "Outdated PHP Version",
        risk: 70,
        details: "Server is running PHP 5.4.3 which has known RCE vulnerabilities",
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
      { name: "PHP", version: "5.4.3" },
      { name: "Apache", version: "2.4.10" },
      { name: "MySQL", version: "5.5.62" },
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
}
