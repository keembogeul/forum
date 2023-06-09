import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  // console.log(req.body);

  if (req.method === "POST") {
    if (req.body.title === "") {
      return res.status(500).json("제목을 입력해주세요!");
    }
    try {
      let updateData = { title: req.body.title, content: req.body.content };
      const db = (await connectDB).db("forum");
      await db
        .collection("post")
        .updateOne(
          { _id: new ObjectId(req.body.objectId) },
          { $set: updateData }
        );

      res.redirect(302, "/list");
    } catch (error) {
      return res
        .status(500)
        .json({ message: "서버 에러!!", error_msg: error.message });
    }
  }
}
