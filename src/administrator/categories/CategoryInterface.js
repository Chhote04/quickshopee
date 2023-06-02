import { useState } from "react"
import { makeStyles } from '@mui/styles';
import { Avatar, Grid, TextField, Button, FormControl, InputLabel, MenuItem, IconButton, Select } from "@mui/material"
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
    },
    headingStyle: {
        fontFamily: 'poppinns',
        fontWeight: 600,
        letterSpacing: 1,
        fontSize: 18
    }
})

export default function CategoryInterface() {
    const classes = useStyles()
    const [status, setStatus] = useState('')
    const [icon, setIcon] = useState({ file: '/assets/icons/shopping-cart.png', bytes: '' })
    const [categoryName, setCategoryName] = useState('')
    const handlePicture = (event) => {

        setIcon({ file: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })

    }
    return (<div className={classes.container} >
        <div className={classes.box}>
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <div categoryName={classes.headingStyle}>Add New Category</div>
                </Grid>
                <Grid item xs={12}>
                    <TextField onChange={(event) => { setCategoryName(event.target.value) }} label="Categoty Name" variant="outlined" fullWidth />
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
                <Grid item xs={6}>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input onChange={handlePicture} hidden accept="image/*" type="file" />
                        <PhotoCamera />
                    </IconButton>
                </Grid>
                <Grid item xs={6}>
                    <Avatar alt="Icon" variant="rounded" src={icon.file} sx={{ width: 56, height: 56 }} />
                </Grid>
                <Grid item xs={6}>
                    <Button variant='contained' fullWidth>Submt</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant='contained' fullWidth>Reset</Button>
                </Grid>
            </Grid>


        </div>
    </div>)
}