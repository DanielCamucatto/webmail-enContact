import {
  AvatarContainer,
  AvatarWrapper,
  AvatarButtonImg,
  AvatarButtonOnline,
  AvatarModalLogout,
  AvatarLogout,
  AvatarUserNameBox,
  AvatarUserNameLink,
} from './styles'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

type AvatarProps = {
  userName: string
  imageUrl: string
}

const Avatar = ({ userName, imageUrl }: AvatarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const handleLogout = () => {
    toast.success('Logout realizado com sucesso', { autoClose: 2500 })

    setTimeout(() => {
      navigate('/')
    }, 3000)
  }

  return (
    <AvatarContainer>
      <AvatarWrapper>
        <AvatarButtonImg onClick={handleMenuToggle} className="">
          <img
            className="w-20 h-20 rounded-full"
            src={imageUrl}
            alt={userName}
          />
        </AvatarButtonImg>
        <AvatarButtonOnline />
      </AvatarWrapper>

      {isMenuOpen && (
        <AvatarModalLogout className="">
          <AvatarLogout onClick={handleLogout}>Logout</AvatarLogout>
        </AvatarModalLogout>
      )}
      <AvatarUserNameBox>
        <AvatarUserNameLink href="#">{userName}</AvatarUserNameLink>
      </AvatarUserNameBox>
    </AvatarContainer>
  )
}

export default Avatar
