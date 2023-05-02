// import type { PageServerLoad } from "./$types";

import  type {Actions } from "@sveltejs/kit";

// export const load: PageServerLoad = async () => {
    
// };
export const actions: Actions = {
    login: async ({request , cookies}) => {
const data = await request.formData()
const username = data.get('username')
const password = data.get('password')
if (!username || !password) {
    return{
        message : "Invalid username or password"
    }
   }
   cookies.set('username', username.toString(), {path: '/' })
   return { message: 'Success'}
    },
    register: async ({request , cookies}) => {
        const data = await request.formData()
        const username = data.get('username')
        const password = data.get('password')
        if (!username || !password) {
            return{
                message : "Invalid username or password"
            }
           }
           cookies.set('username', username.toString(), {path: '/' })
           return { message: 'Successfully registered'}
            }
};