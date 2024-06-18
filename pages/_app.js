import { Inter } from "next/font/google";
import Layout from "@/components/layout/layout";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
