import React from "react";
import {
  View,
  /* Link, */ NotFoundBoundary,
  useLoadingRoute,
} from "react-navi";
// import siteMetadata from "../siteMetadata";
import NotFoundPage from "./NotFoundPage";
import LoadingIndicator from "./LoadingIndicator";
import styles from "./BlogLayout.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function BlogLayout({ blogRoot, isViewingIndex }) {
  let loadingRoute = useLoadingRoute();

  return (
    <div className={styles.container}>
      <LoadingIndicator active={!!loadingRoute} />

      {
        // Don't show the header on index pages, as it has a special header.
        // !isViewingIndex && (
        //   <header>
        //     <h3 className={styles.title}>
        //       <Link href={blogRoot}>{siteMetadata.title}</Link>
        //     </h3>
        //   </header>
        // )
      }

      <main style={{ height: "100vh" }} className="position-relative">
        <Navbar />
        <NotFoundBoundary render={() => <NotFoundPage />}>
          <View />
        </NotFoundBoundary>
        <Footer />
      </main>
    </div>
  );
}

export default BlogLayout;
