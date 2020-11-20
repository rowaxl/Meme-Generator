import React, { useState } from 'react'
import {
  TextField,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    width: '100%',
    height: 300,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 50px 0 50px',
    justifyContent: 'space-evenly'
  },
  field: {
    width: 'calc(max(300, 100%))',
  }
}))

const MemeForm = ({ onSubmit }) => {
  const styles = useStyles()
  const [firstText, setFirstText] = useState('')
  const [lastText, setLastText] = useState('')
  const [fontSize, setFontSize] = useState(20)
  const [error, setError] = useState('')

  const handleChangeFirstText = (e) => {
    const value = e.target.value
    setFirstText(value)
  }

  const handleChangeLastText = (e) => {
    const value = e.target.value
    setLastText(value)
  }

  const handleChangeFontSize = (e) => {
    const value = e.target.value

    if (value < 10 || value > 100) {
      setError('Please input valid font size. (between 10 and 100)')
      return
    }

    setError('')
    setFontSize(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmit({ firstText, lastText, fontSize })
  }

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <TextField 
        className={styles.field}
        label="First text"
        onChange={handleChangeFirstText}
      />

      <TextField
        className={styles.field}
        label="Last text"
        onChange={handleChangeLastText}
      />

      <TextField
        className={styles.field}
        type="number"
        label="Font size"
        placeholder="select between 10 to 100px (default: 20)"
        onChange={handleChangeFontSize}
        helperText={error}
        error={error.length > 0}
      />

      <Button type="submit" color="primary" variant="contained">
        Generate!
      </Button>
    </form>
  )
}

export default MemeForm
