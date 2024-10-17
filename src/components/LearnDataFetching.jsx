async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}
const LearnDataFetching = async () => {
  const data = await getData();
  console.log("Data:", data);
  return (
    <>
      {/* <div>LearnDataFetching</div> */}
      {data.map((post, i) => (
        <div key={i}>
          <h3>{post.userId}</h3>
          <h2>{post.id}</h2>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default LearnDataFetching;
