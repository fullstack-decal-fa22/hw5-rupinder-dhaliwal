import React from 'react';
import Post from "./Post";
import NewPost from "./NewPost";
import {useState, useEffect} from 'react';
import axios from 'axios';

const Feed = () => {
  // Un-comment the lines below to complete your solution
  // ====================

  const [data, setData] = useState();

  const getPostsData = () => {
     axios
       .get('http://localhost:3002/posts') //THIS IS YOUR URL OF YOUR API
       .then((data) => setData(data.data)) //PROMISE API, THAT MEANS WHEN YOU GET THE DATA WHAT DO I DO WITH IT
       .catch((error) => console.log(error));  //ERROR CATCHING IN CASE WE RECIEVE AN ERROR
   };

   useEffect(() => {
     getPostsData();
   }, [data])

  // ====================

  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
      {
        data && data.map(d =>
          <Post title={d.title} body={d.body} comments={d.comments} id={d.id} key={d.id} />
        )
      }

      <NewPost />
    </div>
  )

}


export default Feed;
