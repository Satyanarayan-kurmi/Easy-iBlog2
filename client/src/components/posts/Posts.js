import Post from "../post/Post";
import "./posts.css";
// import props from

export default function Posts({postss}) {
    // let data = Array.from(posts);
    return (
    <div className="posts">
      {
      postss.map((p) => (
        <Post post={p} key={p.title} />
      ))
      }
    </div>
  );
}
