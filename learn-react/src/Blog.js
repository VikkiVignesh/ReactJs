function Blog(props)
{
    const contents=props.posts.map((post)=>
    {
        return ( <><li>{post.id}</li>
        <li>{post.name}</li>
        <li>{post.SRN}</li>
        </>);
    });
   return <div>{contents}</div>
}

export default Blog;