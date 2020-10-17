import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>This App rules!</h1>
    Log in to find out why
    <Link to="/dashboard">Go to the dashboard</Link>
  </Layout>
);
