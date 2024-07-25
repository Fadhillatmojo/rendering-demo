import { ServerComponentOne } from "@/components/server-component-one";

import { ClientComponentOne } from "@/components/client-component-one";

export default function InterleavingPage() {
  return (
    <>
      <h1>Interleaving page</h1>
      {/* import server component to server component inside servercompone*/}
      {/* <ServerComponentOne /> */}

      {/* import client component to the client component inside clientcompone*/}
      {/* <ClientComponentOne /> */}

      {/* import client component to server component inside servercompone*/}
      {/* <ServerComponentOne /> */}

      {/* import server component to client component inside clientcompoone will result and error cause if server component use as child of client component, the child will be a client component too and can't use server component resource*/}
      {/* jadi solusinya adalah jika kita mau masukin server comp ke dalam client comp tanpa mengubahnya menjadi client comp, kita bisa mempassing server component ke dalam prop dari si parent(client component)  */}
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}