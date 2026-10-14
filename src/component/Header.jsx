function Header(){
    const ctime=new Date().toLocaleTimeString();
    console.log(ctime);
    if(ctime>="3:05:00"){
        console.log("online");
    }
    else{
        console.log("offline");
    }
    return(
        <>
        Header
        </>
    )
}
export default Header;