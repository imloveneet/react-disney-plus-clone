import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import db from '../firebase'

const Detail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState()
  useEffect(() => {
    // grab the movie info from DB=
    db.collection('movies')
      .doc(id)
      .get()
      .then(res => {
        if (res.exists) {
          // save the move data
          setMovie(res.data())
        } else {
          // redirect to home page
        }
      })
  }, [id])

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} alt='' lazy='true' />
          </Background>
          <ImageTitle>
            <img src={movie.titleImg} alt='' />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src='/images/play-icon-black.png' alt='' />
              <span> PLAY</span>
            </PlayButton>
            <TrainerButton>
              <img src='/images/play-icon-white.png' alt='' />
              <span>TRAILER</span>
            </TrainerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src='/images/group-icon.png' alt='' />
            </GroupWatchButton>
          </Controls>
          <SubTitle>{movie.subTitle}</SubTitle>
          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageTitle = styled.div`
  margin-top: 60px;
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;
`

const PlayButton = styled.button`
  height: 56px;
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  background: rgb(249, 249, 249);
  border: none;
  padding: 0 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;
  &:hover {
    background: rgb(198, 198, 198);
  }
`
const TrainerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 15px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`
