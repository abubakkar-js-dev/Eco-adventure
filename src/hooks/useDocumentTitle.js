import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useDocumentTitle = (dynamicTitle) => {

    const location = useLocation();

    useEffect(()=>{
        const routesTitle = {
            '/': 'Home',
            '/update-profile' : 'Update Profile',
            '/user-profile' : 'My Profile',
            '/auth/login' : 'Login',
            '/auth/register' : 'Register',
            '/blog-details/:id' : dynamicTitle,
    
        }
        let title;
        if(location.pathname.startsWith('/blog-details/')){
            title = `${dynamicTitle} | Eco Adventure`
        }else{
            title = routesTitle[location.pathname] + ' | Eco Adventure' || 'Adventure | Eco Adventure'
        }
        document.title = title;
    },[location,dynamicTitle])

};

export default useDocumentTitle;