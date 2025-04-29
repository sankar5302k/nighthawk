import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Search, AlertTriangle, Server, Database } from "lucide-react"
import { scanOnionLink } from "@/lib/actions"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center space-y-8">
        <div className="inline-block p-2 bg-purple-900/20 rounded-full mb-4">
          <Shield className="w-10 h-10 text-purple-400" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Onion Link <span className="text-purple-400">Vulnerability</span> Scanner
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          Analyze onion links for security vulnerabilities, detect RCE defects, URL issues, and more. Educational tool
          for cybersecurity research and learning.
        </p>

        <form action={scanOnionLink} className="w-full max-w-2xl mt-8 flex flex-col space-y-4">
          <div className="relative">
            <Input
              type="text"
              name="onionUrl"
              placeholder="Enter onion link (e.g., http://example.onion)"
              className="bg-gray-800/50 border-gray-700 h-14 pl-12 pr-4 rounded-lg text-white"
              required
            />
            <Search className="absolute left-4 top-4 text-gray-500" />
          </div>
          <Button type="submit" size="lg" className="bg-purple-600 hover:bg-purple-700 text-white w-full">
            Scan for Vulnerabilities
          </Button>
        </form>

        <div className="text-sm text-gray-500 mt-4">
          For educational purposes only. Do not use for illegal activities.
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 flex flex-col items-center text-center">
          <div className="bg-purple-900/30 p-3 rounded-full mb-4">
            <AlertTriangle className="w-8 h-8 text-yellow-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Vulnerability Detection</h3>
          <p className="text-gray-400">
            Identify common security issues including XSS, SQL injection, and misconfiguration vulnerabilities.
          </p>
        </div>

        <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 flex flex-col items-center text-center">
          <div className="bg-purple-900/30 p-3 rounded-full mb-4">
            <Server className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">RCE Defect Analysis</h3>
          <p className="text-gray-400">
            Detect potential remote code execution vulnerabilities and server-side security issues.
          </p>
        </div>

        <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 flex flex-col items-center text-center">
          <div className="bg-purple-900/30 p-3 rounded-full mb-4">
            <Database className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Data Visualization</h3>
          <p className="text-gray-400">
            Interactive charts and graphs to visualize security analysis results and vulnerability metrics.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our scanner uses advanced techniques to analyze onion sites and detect potential security issues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-purple-400">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Input Onion Link</h3>
            <p className="text-gray-400">Enter the .onion URL you want to analyze for educational purposes.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-purple-400">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Automated Analysis</h3>
            <p className="text-gray-400">Our system performs web scraping and runs multiple security checks.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-purple-400">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">View Results</h3>
            <p className="text-gray-400">
              Get detailed reports with interactive visualizations of detected vulnerabilities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-purple-800/30">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to enhance your security knowledge?</h2>
            <p className="text-gray-400">Start scanning and learning about web vulnerabilities today.</p>
          </div>
          <Link href="#top" className="shrink-0">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
              Start Scanning
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>Created for educational purposes only. This tool is designed for cybersecurity research and learning.</p>
          <p className="mt-2">
            © {new Date().getFullYear()} Onion Link Vulnerability Scanner | For Hackathons & Educational Use
          </p>
        </div>
      </footer>
    </div>
  )
}
