import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

class Content extends React.Component {
    render() {
        return (
            <>
              {this.props.dataFromParent.map((module) => (
                <div>
                <h1 key={module.ModuleID}>{module.ModuleName}</h1>
                
                {module.Updates.map((updateItem, index) => (
                  <div>
                    <h2>Count: {String(updateItem.Selected)}</h2>
                    <CheckBoxComponent label={updateItem.Reason} onClick={this.props.onUserSelection} />
                    <span>{String(this.props.dataFromParent.onUserSelection)}</span>
                  </div>
                ))}
                </div>
              ))}
            </>
          );
    }
}
;

export default Content;