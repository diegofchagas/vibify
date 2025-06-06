import { PlayCircleIcon } from '@phosphor-icons/react'
import { CardContainer, CardImage, TextBox } from './style'
import { Link } from 'react-router'

export const CardsArtists = ({id, name,image,song, cardType}) => {

  //const routePrefix = cardType === 'songs' ? "/song" : "/artist"

  return (
      <CardContainer to={`${cardType}/${id}`}>
      <CardImage>
      <img src={image} alt={`imagem do artista ${name}` } />
      </CardImage>
      <TextBox className='box-texts'>
      <strong> <Link to={`${cardType}/${id}`}>{name}</Link></strong>
      <span>{song ?? "Artista"}</span>
      </TextBox>
      <PlayCircleIcon size={48} weight='fill' />
    </CardContainer>
  )
}
