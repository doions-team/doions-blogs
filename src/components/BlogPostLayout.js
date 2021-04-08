import React from "react";
import { Link, useCurrentRoute, useView } from "react-navi";
import { MDXProvider } from "@mdx-js/react";
import siteMetadata from "../siteMetadata";
import { formatDate } from "../utils/formats";

// import ArticleMeta from "./ArticleMeta";
// import Bio from "./Bio";
import styles from "./BlogPostLayout.module.css";

function BlogPostLayout({ blogRoot }) {
  let { title, data, url } = useCurrentRoute();
  let { connect, content, head } = useView();
  let { MDXComponent /* readingTime */ } = content;

  // The content for posts is an MDX component, so we'll need
  // to use <MDXProvider> to ensure that links are rendered
  // with <Link>, and thus use pushState.
  return connect(
    <>
      {head}
      <article className={styles.container}>
        <header className={styles.header}>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <pre>{JSON.stringify(blogRoot)}</pre>
          {/* <ArticleMeta
            blogRoot={blogRoot}
            meta={data}
            readingTime={readingTime}
          /> */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
            }}
          >
            <div style={{ fontSize: "2rem" }}>Author</div>
            <div style={{ margin: "0rem 1rem" }}></div>
            <time
              style={{ fontSize: "1rem" }}
              dateTime={data.date.toUTCString()}
            >
              {formatDate(data.date)}
            </time>{" "}
          </div>

          <div className={styles.title}>
            <Link href={url.pathname}>{title}</Link>
          </div>
        </header>
        <MDXProvider
          components={{
            a: Link,
            wrapper: ({ children }) => (
              <div className={styles.content}>{children}</div>
            ),
          }}
        >
          <MDXComponent />
        </MDXProvider>
        <footer className={styles.footer}>
          {/* <div className={styles.title}>
            <Link href={blogRoot}>{siteMetadata.title}</Link>
          </div> */}
          {/* <Bio className={styles.bio} /> */}
          <section className={styles.links}>
            {data.previousDetails && (
              <Link
                className={styles.previous}
                href={data.previousDetails.href}
              >
                ← {data.previousDetails.title}
              </Link>
            )}
            {data.nextDetails && (
              <Link className={styles.next} href={data.nextDetails.href}>
                {data.nextDetails.title} →
              </Link>
            )}
          </section>
        </footer>
      </article>
    </>
  );
}

export default BlogPostLayout;
