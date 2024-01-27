import Layout from "@/components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout pageTitle="Homepage">
      <h1 className={styles['title-homepage']}>Welcome Dimas</h1>
    </Layout>
  );
}
