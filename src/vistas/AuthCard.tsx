import { ReactElement } from 'react';

interface Props {
   children: ReactElement,
   mail: string,
   password: string,
   name: string
   status: boolean
}

export function AuthCard(props: Props) {
   return (
      <div>
         <div className="d-flex justify-content-center" >
            {props.children}
         </div>
      </div>
   );
}
