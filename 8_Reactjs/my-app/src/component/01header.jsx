import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import About from './about';
import Loops from './Loops';
import Compo from './03compo'
import State from './05state'
import Mariage from './mariage'
import Lifecycle from './06LifeCycle'
import Api from './07API'
import Usestate from './function component/01usestate'
import Useeffect from './function component/02useeffect'
import Useref from './function component/03useref'
import Usereducer from './function component/04usereducer'
import Usecontext from './function component/05useContext'
import Fetchapi from './function component/06Fetchapi';
import Usedebugvalue from './function component/07usedebugvalue';
import Parents from '../component/parents';
import Program from './function component/program';
function header(props) {
    const Numbers = {'/home':'Home','/about':'About','/loops':'Loosps','/compo':'Compo','/state':'state','/mariage':'Mariage','/lifecycle':'LifeCycle','/api':'API','/usestate':'Usestate','/useeffect':'Useeffect','/useref':'Useref','/usereducer':'Usereducer','/usecontext':'Usecontext','/fetchapi':'Fetchapi','/usedebugvalue':'Usedebugvalue','/parents':'Parents','/program':'Program'}
    // console.log(Numbers);
    const returndata = Object.entries(Numbers).map((res,i)=>{
    return <li className='nav-item' key={(i)}>
      <Link className='nav-link' to={res[0]}>{res[1]}</Link>
    </li>
    })
    return (
       <>
       <Router>
       <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">


        {returndata}


      </ul>
    </div>
  </div>
</nav>
<Routes>
    <Route path='/home' element={<Home></Home>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/loops' element={<Loops></Loops>}></Route>
    <Route path='/compo' element={<Compo></Compo>}></Route>
    <Route path='/state' element={<State></State>}></Route>
    <Route path='/Mariage' element={<Mariage></Mariage>}></Route>
    <Route path='/LifeCycle' element={<Lifecycle></Lifecycle>}></Route>
    <Route path='/api' element={<Api></Api>}></Route>
    <Route path='/usestate' element={<Usestate></Usestate>}></Route>
    <Route path='/useeffect' element={<Useeffect></Useeffect>}></Route>
    <Route path='/useref' element={<Useref></Useref>}></Route>
    <Route path='/usereducer' element={<Usereducer></Usereducer>}></Route>
    <Route path='/usecontext' element={<Usecontext></Usecontext>}></Route>
    <Route path='/fetchapi' element={<Fetchapi></Fetchapi>}></Route>
    <Route path='/usedebugvalue' element={<Usedebugvalue></Usedebugvalue>}></Route>
    <Route path='/parents' element={<Parents></Parents>}></Route>
    <Route path='/program' element={<Program></Program>}></Route>
</Routes>

</Router>

       </>
    );
}

export default header;