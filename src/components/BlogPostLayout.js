import React from "react";
import { Link, useCurrentRoute, useView } from "react-navi";
import { MDXProvider } from "@mdx-js/react";
// import siteMetadata from "../siteMetadata";
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
    <div>
      {head}
      <article className={styles.container}>
        <header className={styles.header}>
          <div className="m-4">
            <a
              style={{
                textDecoration: "none",
              }}
              className=" contaner-fluid fs-2 fw-bold "
              href="/"
            >
              <span className="me-2">
                <svg
                  style={{ width: "24px", height: "24px" }}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
                  />
                </svg>
              </span>
              Blog Home
            </a>
          </div>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre>
          <pre>{JSON.stringify(blogRoot)}</pre> */}
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
            <div style={{ fontSize: "2rem" }}>{data.author}</div>
            <div style={{ margin: "0rem 1rem" }}></div>
            <time
              style={{ fontSize: "0.75rem" }}
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
              <div className={styles.content + " container "}>{children}</div>
            ),
          }}
        >
          <MDXComponent />
        </MDXProvider>
        <footer className={styles.footer + " mx-4 "}>
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
    </div>
  );
}

export default BlogPostLayout;
