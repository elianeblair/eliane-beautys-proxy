export default async function handler(req, res) {
  const SCRIPT_URL =
    "https://script.google.com/macros/library/d/1aY35RJe6Q3aAO8s_-Kz2jFD__BWa3xRpYvvSbWgWMt-UawWRl_1jpP93/3";

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
