export async function safeApiCall(apiCallFn, navigate) {
  try {
    return await apiCallFn();
  } catch (err) {
    const errorData = err.response?.data || {
      status: err.response?.status || 500,
      message: "Error inesperado",
      error: "Error",
      path: window.location.pathname,
      timestamp: new Date().toISOString(),
    };
    navigate("/error", { state: errorData });
    throw err; 
  }
}
