import {
  WrapperList,
  ListItems
} from './styles';

import {
  InputRoundedSearch
} from '../../components';

const listMock: {
  id: string,
  name: string
}[] = [];

interface Props {
  maxHeight?: string; 
}

export default function ListWithSearch({ maxHeight }: Props) {
  return(
    <WrapperList>
      <InputRoundedSearch
        type='text'
        placeholder="Search"
        maxWidth='495px'
        width='100%'
        margin="10px 0px"
      />
      <ListItems.Area 
        maxHeight={maxHeight}
      >
        {listMock && listMock.length ?
            listMock.map(l => {
              return(
                <ListItems.Item key={l.id}>
                  <ListItems.ImageItem />
                  <ListItems.Label 
                    textUppercase 
                    className='label-list-search'
                  >
                      {l.name}
                  </ListItems.Label>
                </ListItems.Item>
              )
            })
          : null
        }
      </ListItems.Area>
    </WrapperList>
  )
}