function Student(props)
{
    console.log(props)
    return (
        <div style={{backgroundColor: "skyblue", margin:10}}>
        <h2>Mr. {props.name}</h2>
        <h2>Email : {props.email}</h2>
        </div>
    )
}
export default Student;