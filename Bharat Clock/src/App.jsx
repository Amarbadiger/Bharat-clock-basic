import AppName from "./assets/component/AppName";
import AppTitle from "./assets/component/AppTitle";
import AppTime from "./assets/component/AppTime";
function App(){
  return(
    <center>
      <div className="main">
      <AppName/>
      <AppTitle/>
      <AppTime/>
    </div>
    </center>
    
    
  );
}
export default App;