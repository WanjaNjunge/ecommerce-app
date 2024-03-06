import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';

export const generateUserId = () => {
    let userId = Cookies.get('userId');
    if (!userId) {
      userId = uuidv4();
      Cookies.set('userId', userId, { expires: 1 }); // Set cookie to expire in 1 day
    }
    return userId;
    
  };