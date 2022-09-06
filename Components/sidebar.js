import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Search, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

export default class App extends React.Component {
    constructor() {
        super(...arguments);
        this.toolbarOptions = ['Search'];
    }
    
    render() {
        return <GridComponent dataSource={data} toolbar={this.toolbarOptions} height={272}>
          <ColumnsDirective>
              <ColumnDirective field='ModuleLink' disableHtmlEncode={false} width='125' textAlign="Right"/>
          </ColumnsDirective>
          <Inject services={[Search, Toolbar]}/>
      </GridComponent>;
    }
}
;