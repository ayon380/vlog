import React from "react";

import styles from "../../styles/Blog.module.css";
const Slug = (props) => {
  const [blog, setblog] = React.useState(props.b);
  console.log(blog.content);
  const { title, content, slug } = blog;
  console.log(title);
  return <div className={styles.container}>
    <main className={styles.main}>
      <h1>{blog && blog.title}</h1>
      <hr />
      <div>
        {blog && blog.content}
      </div>
    </main>
  </div>;
};
export async function getServerSideProps(context) {
  const { slug } = context.query;
  console.log(slug);
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let myblog = await data.json();
  let b = JSON.parse(myblog);
  console.log();
  return {
    props: { b },
  }
}
export default Slug;