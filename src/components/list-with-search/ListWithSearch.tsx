import {
  WrapperList,
  ListItems
} from './styles';

import {
  InputRoundedSearch
} from '../../components';

import { MockListCoins } from '../../utils/mocks';
import { ListCoinsInterface } from '../../utils/interfaces';

const listMock = MockListCoins;

interface Props {
  maxHeight?: string;
  onClickItem: (item: ListCoinsInterface) => void
}

export default function ListWithSearch({ 
  maxHeight,
  onClickItem
}: Props) {

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
            listMock.map(item => {
              return(
                <ListItems.Item 
                  key={item.id}
                  onClick={() => onClickItem(item)}
                >
                  <ListItems.ImageItem />
                  <ListItems.Label 
                    className='label-list-search'
                  >
                      {item.name} - {item.projectInitials}
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