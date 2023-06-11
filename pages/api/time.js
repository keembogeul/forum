export default function GetTime(req, res) {
  console.log(req.query);

  if (req.method === "GET") {
    let date = new Date();

    return res.status(200).json(date);
  }
}
