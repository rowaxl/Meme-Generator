import React, { useState } from 'react'
import {
  Typography,
  CircularProgress,
  Link,
} from '@material-ui/core'

import Layout from '../components/Layout'
import MemeForm from '../components/MemeForm'
import MemeViewer from '../components/MemeViewer'

import { useGetImage } from '../api/imageHook'

const App = () => {
  const [firstText, setFirstText] = useState('')
  const [lastText, setLastText] = useState('')
  const [fontSize, setFontSize] = useState(20)
  const [selectedImage, setSelectedImage] = useState(null)
  const [loading, results] = useGetImage()

  const generateMeme = ({ firstText, lastText, fontSize }) => {
    setFirstText(firstText)
    setLastText(lastText)
    setFontSize(fontSize)

    if (results.length > 0) {
      const index = Math.floor(Math.random() * results.length)

      setSelectedImage(results[index])
    }
  }

  return (
    <Layout>
      { loading
        ? <CircularProgress size="large" />
        : (<>
            <Typography variant="h3" align="center" color="textPrimary">
              Meme Generator
            </Typography>

            <Typography variant="h6" align="center" color="textPrimary">
              Powered by <Link href="https://imgflip.com/" target="_blank" rel="noreferrer" color="primary">Imgflip</Link>
            </Typography>

            <MemeForm onSubmit={generateMeme} />

            <MemeViewer
              image={selectedImage}
              firstText={firstText}
              lastText={lastText}
              fontSize={fontSize}
            />
          </>
        )
      }
    </Layout>
  )
}

export default App