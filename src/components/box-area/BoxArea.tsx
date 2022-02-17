import React from 'react'

import {
  Box
} from './styles'

type Props = {
  childrenLeft: React.ReactNode,
  childrenRight: React.ReactNode
}

export default function BoxArea({childrenLeft, childrenRight}: Props) {
  return(
    <Box.Container>
      <Box.AreaLeft>
        {childrenLeft}
      </Box.AreaLeft>
      <Box.AreaRight>
        {childrenRight}
      </Box.AreaRight>
    </Box.Container>
  )
}