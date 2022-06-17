import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="skeleton"
    
  >
 <circle cx="154" cy="126" r="126" /> 
    <rect x="30" y="263" rx="9" ry="9" width="280" height="24" /> 
    <rect x="31" y="312" rx="8" ry="8" width="280" height="88" /> 
    <rect x="32" y="421" rx="8" ry="8" width="90" height="27" /> 
    <rect x="132" y="409" rx="9" ry="9" width="150" height="44" />
  </ContentLoader>
)

export default Skeleton