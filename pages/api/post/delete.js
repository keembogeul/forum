import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  // DELETE로 보냈을 때 body값이 제대로 전달되지 않음
  if (req.method == "POST") {
    try {
      let db = (await connectDB).db("forum");

      await db.collection("post").deleteOne({ _id: new ObjectId(req.body) });

      res.status(200).json("게시글이 삭제되었습니다!");
    } catch (error) {
      res
        .status(500)
        .json({ message: "서버 에러!!", error_msg: error.message });
    }
  }
}
