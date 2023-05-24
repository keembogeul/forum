// @ : 경로 별칭 (jsconfig.json에서 설정)
import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((a, i) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${a._id}`} className="title">
            {a.title}
          </Link>
          <p>{a.content}</p>
        </div>
      ))}
    </div>
  );
}
