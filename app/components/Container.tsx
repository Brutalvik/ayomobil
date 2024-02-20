interface ContainerProps {
    children: React.ReactNode;
}

import React, {FC} from 'react'

const Container:FC<ContainerProps> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Container