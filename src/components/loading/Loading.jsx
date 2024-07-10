import "./Loading.module.css"
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./Loading.module.css"
const Loading = () => {
  return (
    <div className={styles.loading}>
     <ClipLoader/>
    </div>
  )
}

export default Loading