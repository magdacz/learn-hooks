import React, {PureComponent} from 'react';

import {AppContext} from './AppContext';



class UserInfo extends PureComponent {

    static contextType = AppContext;

    render() {

        const { isUserLogged } = this.context;
        const userInfoLogged = isUserLogged ? 'zalogowany' : 'niezalogowany';

        return(           
            <>  
                <p>Użytkownik jest {userInfoLogged}</p>
            </>
            
        )
    }
}

export default UserInfo;