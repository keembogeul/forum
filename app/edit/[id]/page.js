import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  //   console.log(props);

  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  //   console.log(result);

  return (
    <div className="p-20">
      <h4>글 수정</h4>
      <form action="/api/post/update" method="POST">
        <input name="objectId" type="hidden" defaultValue={props.params.id} />
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <button type="submit">수정</button>
      </form>
    </div>
  );
}
