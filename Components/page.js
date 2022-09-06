import * as React from 'react';
import { data } from './datasource';
import Sidebar from './sidebar'
import Content from './content'

class Parent extends React.Component {state = { data } 
render() {

    const onModuleSelectionMade = (selection) => {
        //Update your state with the selection
        //Input here could be an array or however you want to handle it
        console.log(selection.Reason)
    }

    return (
        <div className="Page">
        <div>
            <Sidebar dataFromParent = {this.state.data} />
            <Content dataFromParent = {this.state.data} onUserSelection={onModuleSelectionMade}/>
        </div>
      </div>
    );}
  }

  export default Parent;