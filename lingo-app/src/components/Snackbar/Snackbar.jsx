import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';

import { changeOpenStatusAction } from '../../store/notificationManagerReducer';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarView() {
    const open = useSelector(state => state.notificationManager.open);
    const type = useSelector(state => state.notificationManager.type);
    const message = useSelector(state => state.notificationManager.message);

    const dispatch = useDispatch();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(changeOpenStatusAction(false));
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={type} sx={{ width: '100%', fontSize: '1.6rem' }}>
                {message}
            </Alert>
        </Snackbar>
    );
}