export default async function handler(req, res) {
  const url =
    "https://api.aladhan.com/v1/timingsByCoordinates?latitude=36.448&longitude=6.262&method=4&school=0";

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data.data.timings);
  } catch (e) {
    res.status(500).json({ error: "Failed to load prayer times" });
  }
}
