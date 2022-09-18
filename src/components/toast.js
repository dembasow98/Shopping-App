//import snackbar and alert from material ui
import {Alert}  from '@mui/material';
import {useSelector, useDispatch} from 'react-redux';
import { uiActions } from '../store/ui-slice';

const Toast = ({type, message}) => {

    const notification = useSelector(state => state.ui.notification);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(uiActions.showNotification({
            open: false,
        }));
    }
   
    return (
        <>
           {
            notification.open && (
                <Alert severity={type} onClose={handleClose}>{message}</Alert>
            )
           }
        </>
    );
};


export default Toast;