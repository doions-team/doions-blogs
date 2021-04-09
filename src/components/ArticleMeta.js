// import { join } from "path";
import React from "react";
// import { Link } from "react-navi";
import { formatDate } from "../utils/formats";
import styles from "./ArticleMeta.module.css";

function ArticleMeta({ blogRoot, meta, readingTime, avatar }) {
  let readingTimeElement;
  if (readingTime) {
    let minutes = Math.max(Math.round(readingTime.minutes), 1);
    let cups = Math.round(minutes / 5);
    readingTimeElement = (
      <React.Fragment>
        <span className={styles.readingTime}>
          {new Array(cups || 1).fill("☕️").join("")} {minutes} min read
        </span>
      </React.Fragment>
    );
  }

  return (
    <small className={styles.ArticleMeta}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img width="70px" height="70px" src={meta.avatar} alt="avatar" />
        <div style={{ paddingLeft: "1rem" }}>
          <div style={{ fontSize: "2rem" }}>{meta.author}</div>
          {/* <pre>{JSON.stringify(meta.author, null, 2)}</pre> */}
          <time style={{ fontSize: "1rem" }} dateTime={meta.date.toUTCString()}>
            {formatDate(meta.date)}
          </time>
        </div>
      </div>
      {/* {meta.tags && meta.tags.length && (

          <ul className={styles.tags}>
            {meta.tags.map(tag =>
              <li key={tag}>
                <Link href={join(blogRoot, 'tags', tag)}>{tag}</Link>
              </li>
            )}
          </ul> 
     
      )} */}
      {readingTimeElement || null}
    </small>
  );
}

export default ArticleMeta;
