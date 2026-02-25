export default async function handler(req, res) {
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzgnVScH-2T4fWgbX7xnHMo4eNS351WwfxILLLc0hTvo7hTKWd0Zj3873LAE8ZOmUbu/exec";

  try {
    const queryString = new URLSearchParams(req.query).toString();

    const response = await fetch(`${SCRIPT_URL}?${queryString}`);
    const text = await response.text();

    res.setHeader("Content-Type", "application/javascript; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");

    return res.status(200).send(text);
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: "Proxy error",
      detail: error.message,
    });
  }
}
