import Layout from '../components/Layout';
import axios from 'axios'

const Index = ({posts}) => {

return(
  <div>
  <>
 <Layout>Gravity Well Solutions</Layout>
  </>
<>
  <ul>
  {posts.map(post =>(
  <li key={post.id}>
    {post.title}
  </li>
))}
  </ul>
</>
</div>

  )
}




Index.getInitialProps = async ()=>{

  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  const {data} = res

  return{posts: data} // makes it available to index (Home)
}

export default Index
