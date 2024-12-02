import { LogsMenu } from "./FakeLogPage";

export function ShowUserOptions({ currentUsername, showUserOptions, openOptions, closeOptions }) {  
   // const currentUsername = useOutletContext(); // use the outlet context to get the current user's username
    
    if (currentUsername) {
        return (
            <>
                <LogsMenu currentUsername={currentUsername} closeOptions={closeOptions} />
            </>
        );
    }
    
}