import React from 'react'
import FlowDesign from '@pages/FlowDesign'
import DevInspectorWrapper from '@wrappers/DevInspectorWrapper'

function App() {
  return (
    <DevInspectorWrapper>
      <div className="App">
        <FlowDesign />
      </div>
    </DevInspectorWrapper>
  )
}

export default App
