import { basketActions } from "./basket-slice";
import { uiActions } from "./ui-slice";

export const fetchData = () => {
    return async (dispatch) => {
        const fetchHandler = async () => {
            const response = await fetch("https://react-redux-apps-50376-default-rtdb.firebaseio.com/products.json");
            const data = await response.json();

            if (response.ok) {
                dispatch(uiActions.showNotification({
                    open: true,
                    type: "success",
                    message: "Fetching basket data from the firebase successfully!"
                }));
            }
           
            return data;
        };
        try {
            const basketData = await fetchHandler();
            dispatch(basketActions.getFirebaseData(basketData));
        } catch (error) {
            dispatch(uiActions.showNotification({
                open: true,
                type: "error",
                message: "Fetching data request failed!!!"
            })); 
        }
    }
}


export const sendBasketData = (basket) => {
    return async (dispatch) => {
        //Display the warning message while sending the request
        dispatch(uiActions.showNotification({
            open: true,
            type: 'warning',
            message: 'Sending request to the database...'
        }));
        //Send the request to the server
        const  sendRequest = async () => {
            //Display the warning message while sending the request
            dispatch(uiActions.showNotification({
                open: true,
                type: 'warning',
                message: 'Sending request to the database...'
            }));

            const response = await fetch(
                "https://react-redux-apps-50376-default-rtdb.firebaseio.com/products.json", 
                {
                    method: "PUT",
                    body: JSON.stringify(basket),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await response.json();
            console.log(data);

            //Display the success message after the request is sent successfully
            dispatch(uiActions.showNotification({
                open: true,
                type: 'success',
                message: 'Request sent successfully!'
            }));
        };

        try{
            await sendRequest();
        }
        catch(error){
            //Display the error message if the request fails
            dispatch(uiActions.showNotification({
                open: true,
                type: 'error',
                message: 'Request failed!'
            }));
        }
    }
    
}