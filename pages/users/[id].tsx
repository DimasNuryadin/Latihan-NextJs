import Layout from '../../components/Layout'

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}
interface UserDetailProps {
  readonly user: User;
}
export default function UserDetail(props: UserDetailProps) {
  const { user } = props;
  return (
    <div>
      <Layout pageTitle="User Detail">
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
      </Layout>
    </div>
  )
}

// Get Static Paths
export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();

  const paths = dataUsers.map((user: User) => ({
    params: {
      id: `${user.id}`,
    },
  }));
  return {
    paths,
    // jika tidak ada url yang ditemukan maka di larikan ke 404 page
    fallback: false,
  }
}

interface GetStaticProps {
  params: {
    id: string;
  }
}

// Untuk memberikan data untuk per masing2 user
export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    }
  }
}