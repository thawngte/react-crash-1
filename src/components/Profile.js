import React, { useState, useEffect } from "react";
import PostModal from "./PostModal";

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("form-data");
    if (userData) {
      const e = JSON.parse(userData);
      setUsername(e.username);
    }
  }, []); // run on initial load

  function addPost() {
    if (post.length) {
      setPosts([...posts, post]);
      setPost("");
    }
  }

  function updatePost(e) {
    setPost(e.target.value);
  }

  return (
    <div>
      <PostModal posts={posts} />
      <center>
        <h1>What's on your mind, {username}</h1>

        <form>
          <div>Add New Post</div>

          <textarea
            value={post}
            onChange={(e) => updatePost(e)}
            rows="5"
            cols="65"
          ></textarea>
        </form>

        <button class="btn btn-primary" onClick={addPost}>
          Add Post
        </button>
        <br />

        <div style={{ marginTop: "2rem" }}>
          {posts && posts.length
            ? posts.map((post, index) => {
                if (index < 1) {
                  return (
                    <div
                      style={{
                        border: "1px solid #ccc",
                        padding: "0.5rem",
                        width: "40%",
                        margin: "2px",
                      }}
                    >
                      <button>X</button>
                      <br />
                      {post}
                    </div>
                  );
                }
              })
            : null}
        </div>



        <div style={{ marginTop: "2rem" }}>
          {posts && posts.length > 1 ? 
          <div>
          <button
            type="button"
            class="btn btn-primary mt-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={PostModal}
          >
            View All Posts
          </button>
        </div> : null}
        </div>




        
      </center>
    </div>
  );
};

export default Profile;
