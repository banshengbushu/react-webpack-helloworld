import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';
class Component extends React.Component {
render () {
return(<div> <p> Hello</p>
<App/>
</div>
);

}
}

render(<Component/>, document.getElementById('app'));
 

