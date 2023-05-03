import React from 'react'
import { useState } from 'react';

import AddPlanDialog from './AddPlanDialog';

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

function Plan() {
  let [dialogState, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };


  return (
    <div className='container'>

        <div className="row">
          <div className="col-10">
            Aktif Planlarım
          </div>
          <div className="col-2 ms-auto d-flex justify-content-end">
            <Tooltip title="Etkinlik Ekle">
              <IconButton onClick={handleClickOpen}>
              <EditNoteOutlinedIcon sx={{fontSize: 30}}/>
              </IconButton>
            </Tooltip>
          </div>
        </div>

        <div className="row">


        </div>

        <AddPlanDialog dialogOpen={dialogState} setOpenDialog={setOpen} />
    </div>
  )
}

export default Plan