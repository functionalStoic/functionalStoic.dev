import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import type { PageProps } from "gatsby";

const NotFound = (_props: PageProps) => (
  <Layout>
    <h1>404 - Page Not Found</h1>
    <p>Unfortunately we couldn't find what you were looking for :(</p>
    <a href="/">Go back home →</a>
  </Layout>
);

export default NotFound;
