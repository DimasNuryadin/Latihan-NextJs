import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import styles from '../../styles/Users.module.css'

interface UsersProps {
  readonly dataUsers: Array<any>;
}

export default function UsersPage(props: UsersProps) {
  const router = useRouter();
  const { dataUsers } = props;

  // console.log(dataUsers);
  return (
    <Layout pageTitle="User Page">
      {dataUsers.map((user) => (
        <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </Layout>
  )
}

// Get Static Props
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();

  return {
    props: {
      dataUsers: dataUsers,
    },
  };
}
