import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  console.log(req.body);

  if (req.method === "POST") {
    if (req.body.title === "") {
      return res.status(500).json("제목을 입력해주세요!");
    }
    try {
      const db = (await connectDB).db("forum");
      await db.collection("post").insertOne(req.body);

      res.redirect(302, "/list");
    } catch (error) {
      return res
        .status(500)
        .json({ message: "서버 에러!!", error_msg: error.message });
    }
  }
}
