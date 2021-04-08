import React from "react";
import { Link } from "react-navi";
import ArticleMeta from "./ArticleMeta";
import styles from "./ArticleSummary.module.css";

function ArticleSummary({ blogRoot, route }) {
  return (
    <article className={styles.ArticleSummary}>
      <div style={{ textAlign: "start" }}>
        <ArticleMeta blogRoot={blogRoot} meta={route.data} />
        <div style={{ fontSize: "2rem" }}>
          <Link href={route.url.href}>{route.title}</Link>
        </div>
        <div style={{ fontSize: "1rem" }}>{route.data.spoiler}</div>
      </div>
    </article>
  );
}

export default ArticleSummary;
