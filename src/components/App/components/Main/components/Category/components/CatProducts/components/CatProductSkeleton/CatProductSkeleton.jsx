import React from "react";
import ContentLoader from "react-content-loader";

export const CatProductSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={390}
    viewBox="0 0 300 390"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="20" y="20" rx="0" ry="0" width="260" height="260" /> 
    <rect x="20" y="290" rx="20" ry="20" width="260" height="40" /> 
    <rect x="20" y="350" rx="10" ry="10" width="70" height="25" />
  </ContentLoader>
)
