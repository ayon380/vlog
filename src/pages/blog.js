import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
const Blog = (props) => {
  console.log(props);
  const [blogs, setblogs] = useState(props.allBlogs);
  useEffect(() => {
    console.log("Blog page loaded");
    fetch("/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((b) => {
        console.log(b);
        setblogs(b);
      });
  }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blog) => {
          return (<>
            <Link href={`/blogpost/${blog.slug}`}>
              <div className={styles.blogh3}>
                <h3>{blog.title}</h3>
              </div>
            </Link>
            <p className={styles.blogtitle}>{blog.content.substr(0, 100)}</p></>
          );
        })}
      </main>
    </div>
  );
};
export async function getServerSideProps() {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs=await data.json();
  console.log(allBlogs);
  return {
    props: { allBlogs }
  }
}
export default Blog;
