import { PlayCircleIcon } from '@phosphor-icons/react'
import { CardContainer, CardImage, TextBox } from './style'

export const CardsArtists = ({id, name,image,banner,song}) => {
  return (
    <CardContainer>
      <CardImage>
      <img src={image} alt={`imagem do artista ${name}` } />
      </CardImage>
      <TextBox className='box-texts'>
      <strong> <a href="http://">{name}</a></strong>
      <a>{song ?? "Artista"}</a>
      </TextBox>
      <PlayCircleIcon size={48} weight='fill' />
    </CardContainer>
  )
}
