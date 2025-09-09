export const testCloudinaryUrl = async (url) => {
  try {
    const response = await fetch(url, { method: "HEAD" })
    console.log("[v0] Cloudinary URL test:", {
      url,
      status: response.status,
      headers: Object.fromEntries(response.headers.entries()),
    })
    return response.ok
  } catch (error) {
    console.error("[v0] Cloudinary URL test failed:", { url, error })
    return false
  }
}

export const validateImageUrl = (url) => {
  if (!url) return false

  // Check if it's a valid URL
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}
