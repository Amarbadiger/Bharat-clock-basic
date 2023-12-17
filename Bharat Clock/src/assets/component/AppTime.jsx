function AppTime(){
    let time =new Date();
    return(
        <p>this is current Date & Time: {time.toLocaleTimeString()} || {time.toLocaleDateString()}</p>
    );
}
export default AppTime;