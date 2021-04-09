import React from "react";
import { Link } from "react-navi";
import siteMetadata from "../siteMetadata";
import ArticleSummary from "./ArticleSummary";
// import Bio from "./Bio";
import Pagination from "./Pagination";
import styles from "./BlogIndexPage.module.css";

function BlogIndexPage({ blogRoot, pageCount, pageNumber, postRoutes }) {
  return (
    <div className="container">
      <header>
        <div className={styles.title}>
          <Link href={blogRoot}>{siteMetadata.title}</Link>
        </div>
        {/* <Bio /> */}
      </header>
      <div /* className={styles.articlesList} */ className="row">
        {postRoutes.map((route) => (
          <div className="col-12 col-sm-6" key={route.url.href}>
            <ArticleSummary blogRoot={blogRoot} route={route} />
          </div>
        ))}
      </div>
      {pageCount > 1 && (
        <Pagination
          blogRoot={blogRoot}
          pageCount={pageCount}
          pageNumber={pageNumber}
        />
      )}
      <footer className={styles.footer}>
        {/* <div>
          <a href="/rss.xml" target="_blank" style={{ float: "right" }}>
            RSS
          </a>
          <Link href="/about">About</Link> &bull; <Link href="/tags">Tags</Link>{" "}
          &bull;{" "}
          <a href="https://github.com/frontarm/create-react-blog">Source</a>
        </div> */}
      </footer>
    </div>
  );
}

export default BlogIndexPage;
