import React from 'react'

const WithLabel = (WrapperComponent) => {
  return function EnhancedComponent(props) {
    return <WrapperComponent {...props}/>
    }
  };

export default WithLabel
