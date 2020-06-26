import React from 'react';
import {Switch,Container,Paper,makeStyles,Grid,Button,CssBaseline,TextField,Select,MenuItem,FormControl,InputLabel,FormControlLabel, Typography} from '@material-ui/core';
import DashnoardLayout from '../../components/DashboardLayout';

const useStyles = makeStyles(theme =>({
    paper : {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(12),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    formControl: {
        minWidth: 120,
      },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    footer : {
        marginTop : theme.spacing(5),
        flexDirection : 'row-reverse'
    }
}))

export default function Devices(){
    const [active, setActive] = React.useState({
        active: true,
      });
    
      const handleChange = (event) => {
        setActive({ ...active, [event.target.name]: event.target.checked });
        
      };

    const devicesLabel = {
        title : 'Dispositivos',
        name : 'Nome do dispositivo',
        company : 'Empresa',
        type : 'Tipo',
        model : 'Modelo',
        active : 'Ativo'
    }

    const classes = useStyles();

    return(
        <Container maxWidth='md'>
            <DashnoardLayout/>
            <CssBaseline/>
                <Paper className={classes.paper}>
                    <form>
                        <Grid container spacing={4}>
                            <Grid item xs={12} align='center'>
                                <Typography variant='h4'>{devicesLabel.title}</Typography>
                            </Grid>
                            <Grid item  xs={12} sm={6}>
                                <TextField
                                label={devicesLabel.name}
                                type='text'
                                fullWidth
                                required/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className=''
                                    label={devicesLabel.company}
                                    type='text'
                                    fullWidth
                                    required/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id='type'>{devicesLabel.type}</InputLabel>
                                    <Select
                                        className={classes.selectEmpty}
                                        labelId='type'
                                        type='text'
                                        fullWidth
                                        required>
                                            <MenuItem value='Vechicle'>Vechicle</MenuItem>
                                            <MenuItem value='Sensor'>Sensor</MenuItem>
                                            <MenuItem value='Computer'>Computer</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControlLabel
                                control={
                                    <Switch
                                    checked={active.status}
                                    onChange={handleChange}
                                    color="primary"
                                    name="active"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                                }
                                label='Ativo'/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className=''
                                    label={devicesLabel.model}
                                    type='text'
                                    fullWidth
                                    required/>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.footer}>
                            <Grid item xs={6} sm={2}>
                                <Button color='primary' variant='contained'>Salvar</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
                {console.log(active)}
        </Container>
    )
}