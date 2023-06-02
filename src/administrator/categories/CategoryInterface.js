import { useState } from "react"
import { makeStyles } from '@mui/styles';
import { Grid, TextField, Button, FormControl, InputLabel, MenuItem, IconButton, Select } from "@mui/material"
import { PhotoCamera } from "@mui/icons-material";
const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#2d3436',
        width: '100vw',
        height: '100vh'
    },
    box: {
        width: '50vw',
        height: 'auto',
        padding: 10,
        background: '#ffff'
    }
})

export default function CategoryInterface() {
    const classes = useStyles()
    const [status, setStatus] = useState('')
    return (<div className={classes.container}>
        <div className={classes.box}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField label="Categoty Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={status} label="Status" onChange={(event) => { setStatus(event.target.value) }}>
                            <MenuItem value='continue'>Continue</MenuItem>
                            <MenuItem value='Discontinue'>Discontinue</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" />
                        <PhotoCamera />
                    </IconButton>
                </Grid>
            </Grid>

        </div>
    </div>)
}