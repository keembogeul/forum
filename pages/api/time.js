export default function GetTime(req, res) {
  if (req.method === "GET") {
    let date = new Date();

    return res.status(200).json(date);
  }
}
