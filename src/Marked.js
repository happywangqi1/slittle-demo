import React, { PropTypes } from 'react'
import marked from 'marked';

class Marked extends React.Component {
  render () {
    let xxx =marked('# abc');
    let a =marked('<pre>*sncsdcs*</pre>')
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html:xxx}}/>
        <div dangerouslySetInnerHTML={{__html:a}}/>
      </div>
    )
  }
}

export default Marked;
