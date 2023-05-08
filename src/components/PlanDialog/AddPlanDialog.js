import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

import { FormControl, TextField } from '@mui/material';

import DateRange from '../DateRange/DateRange';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function AddPlanDialog(props) {
    const handleClose = () => {
        props.setOpenDialog(false)
    };

    return (
        <div className="row">
            <BootstrapDialog
                fullWidth={true}
                maxWidth="md"
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={props.dialogOpen}>

                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Bir etkinlik tanımla
                </BootstrapDialogTitle>

                <DialogContent dividers>

                    <form>
                        <div className="col-12 mb-3">
                            <FormControl style={{width: '100%'}}>
                                <TextField id="plan-title" label="Başlık Giriniz" fullWidth={true} multiline={true} minRows={1} maxRows={5} variant="outlined" />
                            </FormControl>
                        </div>

                        <div className='row'>
                            <div className='col-6 mb-3 date-range'>
                                <FormControl>
                                    <DateRange label="Etkinlik Başlangıç Tarihi" />
                                </FormControl>
                            </div>
                            <div className='col-6 mb-3 d-flex justify-content-end date-range'>
                                <FormControl>
                                    <DateRange label="Etkinlik Bitiş Tarihi" />
                                </FormControl>
                            </div>
                        </div>
                    </form>

                </DialogContent>

                <DialogActions>
                    {/* onClick={handleClose} */}
                    <Button autoFocus variant="contained" >
                        Etkinliği Başlat
                    </Button>
                </DialogActions>

                
            </BootstrapDialog>
        </div>
    );
}