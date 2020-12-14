import Profile from "./Components/Profile/Profile"
import img from "./img/Hweda Bargo.jpg"
function App() {
  return (
    <div className="App">
         <Profile name='Hweda Hassan Bargo' bio={`Hello , my name is Hweda and I am 27 years old, I have my own project, and I also work as the CEO of two companies, Unit for Technical Solutions, and the other is Communications.`} profission='Mobile and website application developer, data analysis and e-marketing' img= {img}/>
    </div>
  );
}

export default App;
