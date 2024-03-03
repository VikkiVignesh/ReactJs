function List(props)
{
return (
 <ul>
   {props.list.map((item)=>{
    return <li key={item.id}>{item.title}</li>
   })
}
 </ul>
);
}
export default List;