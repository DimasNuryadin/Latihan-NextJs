import Layout from "@/components/Layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <Layout pageTitle="Homepage">
      <Image src="/Profile.png" width={200} height={200} alt="Profile" />
      <h1 className={styles['title-homepage']}>Welcome Dimas</h1>
    </Layout>
  );
}
