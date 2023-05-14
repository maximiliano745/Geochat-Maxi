import { type } from "os";
import { useState } from "react";

type Props = {
    status: boolean, 
}

export const StatusLogin = (props: Props) =>{

    

  const [inputStatus, setStatus] = useState<typeof props>({
    status:false
  });
    return(
        <div>
            StatusLogin : status
        </div>
    )
}


