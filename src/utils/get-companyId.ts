import { useAuth0 } from "../business/auth/hooks";
import { config } from "../private";



export const getCompanyId = (user: any) => {
    if(user) {
        let key = config.auth0.namespace + '/user_metadata';
        let companyId: string = (user as any)[key].companyList;
        if(companyId && companyId.length > 0) {
            return companyId;
        } else {
            return '';
        }
    } else {
        return '';
    }
    
}