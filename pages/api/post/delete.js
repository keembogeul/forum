import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const db = (await connectDB).db("forum");
      await db.collection("post").deleteOne({ _id: new ObjectId(req.body) });

      //   res.status(200).json("삭제완료");
      res.redirect(302, "/list");
    } catch (error) {
      return res
        .status(500)
        .json({ message: "서버 에러!!", error_msg: error.message });
    }
  }
}
