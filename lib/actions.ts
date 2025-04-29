"use server"

import { redirect } from "next/navigation"

export async function scanOnionLink(formData: FormData) {
  // Get the onion URL from the form
  const onionUrl = formData.get("onionUrl") as string

  // In a real application, this would perform actual scanning
  // For educational purposes, we're simulating the scan

  // Generate a random scan ID
  const scanId = Math.random().toString(36).substring(2, 15)

  // Redirect to the results page with the scan ID
  redirect(`/results?id=${scanId}`)
}
