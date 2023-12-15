import Avatar from '../../components/Avatar'
import Dropdown from '../../components/Dropdown'
import { ActionListContainer } from './style'

const ActionList = () => {
  return (
    <ActionListContainer>
      <Avatar userName={'Totó'} imageUrl={'https://placedog.net/202/200'} />
      <Dropdown
        name={'New'}
        options1={'Escrever email'}
        options2={'Nova tarefa'}
        options3={'Abrir agenda'}
      />
    </ActionListContainer>
  )
}

export default ActionList
