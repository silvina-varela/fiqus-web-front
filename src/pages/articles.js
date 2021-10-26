import React from "react"
import styled from 'styled-components'
import data from '../content/content.json'

import Button from '../components/common/Button'
import PostThumbnail from '../components/modules/PostThumbnail'

const styles = data.styles

const MainWrapper = styled.div`
  padding-bottom: 180px;
  @media (min-width: ${styles.breakpoints.m}px) {
    padding-bottom: 228px;
  }
`
const PostsContainer = styled.div`
  padding: 40px 20px 0 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: ${styles.breakpoints.lpx}) {
    padding-top: 55px;
    padding-left: 0;
    padding-right: 0;
  }
`
const PostsWrapper = styled.div`
/*    display: flex;
    flex-wrap: wrap;
    max-width: 946px;
    justify-content: space-between;*/

    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    gap: 10px;
    padding: 0;
    max-width: 946px;
    @media (min-width: ${styles.breakpoints.m}px) {
      justify-content: flex-start;
      margin: auto;
      gap: 23px;
      padding: 0;
    };



    }
`
const BlogTitle = styled.h1`
  flex-basis: 100%;
  font-size: 2.38em;
  line-height: 49px;
  color: ${styles.colors.purplePrimary};
  margin: 0 auto 25px auto;
  text-align: center;
  @media (min-width: ${styles.breakpoints.m}px) {
    text-align: left;
    font-size: 3em;    
    line-height: 62px;
    margin-bottom: 35px;
  }
`
const Btn = styled(Button)`
  margin: 0px auto 15px auto;
`

const blogMain = (props) => {

      return (
        <MainWrapper>
          <PostsContainer>
            <PostsWrapper>
                <BlogTitle>Blog</BlogTitle>
                <PostThumbnail postTitle='Experiencia de Intercooperación' postDescription='En Fiqus comenzamos este 2020 con una gran experiencia de trabajo e intercooperació […]' postImg='blogThumbnail.png' />
                <PostThumbnail postTitle='Socios de Fiqus ganan el SpawnFest' postDescription='Los últimos días del 2018 no pasaron como cualquier otro en nuestra cooperativa, un socio […]' postImg='blogThumbnail(1).png' />
                <PostThumbnail postTitle='Violencia de género' postDescription='Hace poco menos de un año nos llegó un email del IMFC (Instituto Movilizador de […]' postImg='blogThumbnail(2).png' />
                <PostThumbnail postTitle='La Comunicación en la Cooperativa' postDescription='En Fiqus comenzamos este 2020 con una gran experiencia de trabajo e intercooperació […]' postImg='blogThumbnail(3).png' />
                <PostThumbnail postTitle='Instalando Erlang y Elixir con asdf' postDescription='Los últimos días del 2018 no pasaron como cualquier otro en nuestra cooperativa, un socio […]' postImg='blogThumbnail(4).png' />
                <PostThumbnail postTitle='Una economía con rostro humano' postDescription='Hace poco menos de un año nos llegó un email del IMFC (Instituto Movilizador de […]' postImg='blogThumbnail(5).png' />
                <PostThumbnail postTitle='Coop & travel: se acaba el sudeste asiático' postDescription='En Fiqus comenzamos este 2020 con una gran experiencia de trabajo e intercooperació […]' postImg='blogThumbnail(6).png' />
                <PostThumbnail postTitle='Django Channels: Hagamos un «snake» multijugador en la PyConAr 2016' postDescription='Los últimos días del 2018 no pasaron como cualquier otro en nuestra […]' postImg='blogThumbnail(7).png' />
                <PostThumbnail postTitle='Visita a la Fundación IPNA' postDescription='Hace poco menos de un año nos llegó un email del IMFC (Instituto Movilizador de […]' postImg='blogThumbnail(8).png' />
              </PostsWrapper>
              <Btn type='btnPrimaryPurple' theme={styles} to="#" btnText='cargar más artículos'></Btn>
            </PostsContainer>

        </MainWrapper>
      );
};

export default blogMain;