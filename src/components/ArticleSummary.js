import React from "react";
import { Link } from "react-navi";
import ArticleMeta from "./ArticleMeta";
import styles from "./ArticleSummary.module.css";

function ArticleSummary({ blogRoot, route }) {
  return (
    <article className={styles.ArticleSummary}>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <img
          className="img-fluid"
          src={route.data.cover}
          alt="cover"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div style={{ textAlign: "start" }}>
        <ArticleMeta blogRoot={blogRoot} meta={route.data} />
        <div style={{ fontSize: "2rem" }}>
          <Link href={route.url.href}>{route.title}</Link>
        </div>
        <div style={{ fontSize: "1rem" }}>{route.data.spoiler}</div>
      </div>
      {/* <pre>{JSON.stringify(route.data, null, 2)}</pre> */}
    </article>
  );
}

export default ArticleSummary;
