
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import useStyles from '../style/style';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function JobsView({ jobs, deleteHandler }) {
    const classes = useStyles()
    const [expanded, setExpended] = useState(null)


    const handleChange = (key) => {

        if (key == expanded) {
            setExpended(null)
            return null
        }
        setExpended(key)
    }


    return <Box display="flex" flexDirection="column" gap="10px">

        {jobs.map(x => {
            const job = x[1]
            const key = x[0]
            return <Accordion key={key} expanded={expanded == key} onChange={() => handleChange(key)}>
                <AccordionSummary
                    expandIcon={expanded == key ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography fontSize="20px" fontWeight="400" color="rgba(0, 0, 0, 0.6)">
                        {x[0]}
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        {job.map(y => {
                            return <ListItem key={y.id} className={classes.list__item} ><Typography>
                                {y.title}
                            </Typography>

                                <DeleteIcon className={classes.delete__icon} onClick={() => deleteHandler(y.id)} />
                            </ListItem>
                        })}

                    </List>

                </AccordionDetails>
            </Accordion>

        })}




    </Box>


}
