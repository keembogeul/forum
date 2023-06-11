import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  try {
    let db = (await connectDB).db("forum");

    await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(req.query.objectId) });

    res.status(200).json("게시글 삭제 완료!");
  } catch (error) {
    res.status(500).json({ message: "서버 에러!!", error_msg: error.message });
  }
}
