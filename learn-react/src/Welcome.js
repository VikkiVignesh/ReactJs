function hello(props) {

    return(
       
        <div>
            Hello ,{props.users.first},{props.users.last}
        </div>
    );
}

export default hello;