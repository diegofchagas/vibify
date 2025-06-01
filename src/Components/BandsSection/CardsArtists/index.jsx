import { PlayCircleIcon } from '@phosphor-icons/react'
import { CardContainer, CardImage, TextBox } from './style'

export const CardsArtists = () => {
  return (
    <CardContainer>
      <CardImage>
      <img src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="capa do album" />
      </CardImage>
      <TextBox className='box-texts'>
      <strong> <a href="http://">Thales Roberto</a></strong>
      <a>Me faz viver</a>
      </TextBox>
      <PlayCircleIcon size={48} weight='fill' />
    </CardContainer>
  )
}
