import React from 'react'

import AOS from 'aos'
import "aos/dist/aos.css"

class Skillset extends React.Component {
    componentDidMount(){
      AOS.init({
        duration : 1
      })
    }
    render(){
        return(
            <></>
        )
    }
  };
  
  export default Skillset;