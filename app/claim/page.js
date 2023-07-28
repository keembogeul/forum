import axios from "axios";
import SelectClaimList from "./SelectClaimList";
import styles from "./SelectClaimList.module.css";

export default async function List() {
  let response = await axios.get("https://v2.washswat.com/v2/smile/main/");
  let result = response.data?.content;
  return (
    <>
      <span className={styles["claim-title"]}>어떤 문제가 있나요?</span>
      <SelectClaimList result={result} />
    </>
  );
}
