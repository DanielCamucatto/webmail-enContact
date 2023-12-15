import Avatar from '../../components/Avatar'
import Dropdown from '../../components/Dropdown'
import Accordion from '../../components/Accordion'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import {
  ActionListContainer,
  ActionListContainerHeader,
  ActionListSeparator,
  ActionListBody,
  ActionListParagraphContainer,
  ActionListParagraph,
} from './style'

const ActionList = () => {
  const accordionItems = [
    { title: 'Conta 1', content: 'Caixa de entrada' },
    { title: 'Conta 2', content: 'Caixa de entrada' },
    { title: 'Conta 3', content: 'Caixa de entrada' },
  ]

  return (
    <ActionListContainer>
      <ActionListContainerHeader>
        <div>
          <Avatar userName={'Totó'} imageUrl={'https://placedog.net/202/200'} />
        </div>
        <div>
          <Dropdown
            name={'New'}
            options1={'Escrever email'}
            options2={'Nova tarefa'}
            options3={'Abrir agenda'}
          />
        </div>
      </ActionListContainerHeader>
      <ActionListSeparator />
      <ActionListBody>
        <ActionListParagraphContainer>
          <ActionListParagraph>
            Favoritos
            <span>
              <BiDotsVerticalRounded style={{ fontSize: '20px' }} />
            </span>
          </ActionListParagraph>
          <span>30</span>
        </ActionListParagraphContainer>
        <Accordion items={accordionItems} />
      </ActionListBody>
    </ActionListContainer>
  )
}

export default ActionList
