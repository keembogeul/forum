"use client";
import Link from "next/link";

// props 대신 { result } : destructuring 문법
export default async function ListItem({ result }) {
  /* 
1. let result = db 데이터 가져오기
- 서버에 부탁해서 db 게시글 가져옴 -> result = db 게시글
- 단점: 검색 노출 어려움(use client -> 유저가 화면에 접속하면 아래 html 코드부터 보여준 후 useEffect 실행 그 후 html 데이터 채워줌)

useEffect(() => {}, [])

2. props로 컴포넌트의 parent에서 result를 내려줌
*/

  //   let array = result.map((a) => a._id);

  //   console.log(result);

  return (
    <div>
      {result.map((a, i) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${result[i]._id}`} className="title">
            {a.title}
          </Link>
          <Link href={"/edit/" + result[i]._id} className="edit">
            🖌️
          </Link>
          {/* ajax 사용 -> fetch로 GET 요청 가능 (method 설정 가능) form 태그는 요청 시 항상 새로고침 - next.js는 가끔 아닐수도 */}
          <button
            className="delete"
            onClick={(e) => {
              // fetch("/api/post/delete", {
              //   method: "POST",
              //   body: result[i]._id,
              // })
              //   .then((r) => {
              //     return r.json();
              //   })
              //   .then(() => {
              //     // e = 유저가 방금 클릭한 요소
              //     e.target.parentElement.style.opacity = 0;
              //     setTimeout(() => {
              //       e.target.parentElement.style.display = "none";
              //     }, 1000);
              //   });
              fetch(`/api/test/${result[i]._id}`).then(() => {
                // e = 유저가 방금 클릭한 요소
                e.target.parentElement.style.opacity = 0;
                setTimeout(() => {
                  e.target.parentElement.style.display = "none";
                }, 1000);
              });
            }}
          >
            🗑️
          </button>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
