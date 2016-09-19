import React, { PropTypes } from 'react'
import { getMd } from './utils/helpers'
import marked from 'marked';
import hljs from 'highlight.js'

class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:'',
      wait:true
    }
  }
  componentDidMount(){
  let add = this.props.params.title;
  console.log(this.props);
    getMd(add)
      .then((recData) =>{
      //console.log(recData.getMd);
      this.setState({
        data:recData.getMd,
        wait:false
      })
      console.log(this.state.data);

    });
  }
  render () {
      let content = this.state.wait ? '等' : marked(this.state.data);
    return(
      marked.setOptions({
        highlight: function (code) {
          return hljs.highlightAuto(code).value;
        }
      }),
      <div>
          <div dangerouslySetInnerHTML = {{__html:content}}className="blogmd"/>
      </div>
    )
  }
}

export default Blog;
