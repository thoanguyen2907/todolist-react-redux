import React from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';


class App extends React.Component {

    

  render(){
    
  return (
    <div className="container">
      {/*TITLE: START*/}
        <Title />
           {/*TITLE: END*/}
         {/*ADD-FORM: START*/}

        <div className="row">
        <Form/>

          {/*ADD-FORM: END*/}
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            
        {/*FIND-SEARCH-SORT: START*/}
           <Control/>
         {/*SORT: START*/}
         {/*FIND-SEARCH-SORT: End*/}

            {/*LIST: START*/}
           <List />
             {/*LIST: START*/}
           
          </div>
        </div>
      </div>
  );
}
}

export default App;
