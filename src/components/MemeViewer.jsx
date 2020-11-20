import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  wrap: {
    width: '100%',
    height: 'calc(100vh - 100px - 300px - 90px)',
    padding: '0 50px',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative'
  },
  image: {
    width: 'auto',
    height: '100%',
  },
  topText: { 
    position: 'absolute',
    width: '100%',
    top: 0,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 900,
    textShadow: '#000 0 0 5px'
  },
  bottomText: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 900,
    textShadow: '#000 0 0 5px'
  }
}))

const MemeViewer = ({ image, firstText, lastText, fontSize }) => {
  const styles = useStyles()

  console.log(image)

  return (
    <>
      { !image
        ? <></>
        : (
          <div className={styles.wrap}>
            <img className={styles.image} src={image.url} alt="generated-meme" />
            <Typography className={styles.topText} style={{ fontSize: `${fontSize}px` }}>
              {firstText}
            </Typography>

            <Typography className={styles.bottomText} style={{ fontSize: `${fontSize}px` }}>
              {lastText}
            </Typography>
          </div>
        )
      }
    </>
  )
}

export default MemeViewer