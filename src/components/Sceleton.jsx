import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = (props) => (
  <ContentLoader 
    speed={2}
    width={320}
    height={520}
    viewBox="0 0 320 520"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="180" cy="180" r="130" /> 
    <rect x="57" y="363" rx="0" ry="0" width="283" height="84" /> 
    <rect x="70" y="472" rx="0" ry="0" width="242" height="40" />
  </ContentLoader>
)

export default Sceleton