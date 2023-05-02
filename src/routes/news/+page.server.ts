import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const newsAPIkey = ''
    const news = [{
        id:1,
title :"n1"
    },
    {
        id:2,
title :"n2"
    },{
        id:3,
title :"n3"
    },
]
return {news}
};