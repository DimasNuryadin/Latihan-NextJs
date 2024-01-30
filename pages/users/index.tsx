import Layout from "@/components/Layout";

interface UsersProps {
  readonly dataUsers: Array<any>;
}

export default function UsersPage(props: UsersProps) {
  const { dataUsers } = props;

  // console.log(dataUsers);
  return (
    <Layout pageTitle="User Page">
      {dataUsers.map(user => {
        return (
          <>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </>
        )
      })}
      <p>UsersPage</p>
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
