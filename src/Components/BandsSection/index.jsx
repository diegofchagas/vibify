import React from 'react'
import { ContainerArtists,Section } from './style'

export const BandsSection = () => {
  return (
    <Section>
      <ContainerArtists>
        <a href="#" className='trending-music'>Artistas populares</a>
        <a href="#" className='show-all'>Mostrar tudo</a>
      </ContainerArtists>
      
    </Section>
  )
}
