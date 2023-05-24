// @ : 경로 별칭 (jsconfig.json에서 설정)
import { connectDB } from "@/util/database";

export default async function Home() {
  // DB 입출력 코드는 server component 안에서만 사용하도록 권장
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return <div>안녕</div>;
}
