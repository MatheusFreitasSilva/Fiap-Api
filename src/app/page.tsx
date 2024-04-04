import { Item } from "./interface";
import Person from "./components/Person";

const dataPerson: Item[] = [
  {
    name: "Matheus",
    address: "Rua dos caralhos voadores, 69 - Jardim do Eden",
    phone: "(11) 99999-9999",
    email: "matheus@mail.com.br",
    status: "Success"
  },
  {
    name: "Maria",
    address: "Rua do caqui, 82 - Jardim do Eden",
    phone: "(11) 98888-8888",
    email: "maria@mail.com.br",
    status: "Error"
},
  {
    name: "Joao",
    address: "Rua da Jabuticaba, 52 - Jardim Malacabado",
    phone: "(11) 96418-5484",
    email: "joao@mail.com.br",
    status: "Success"
  },
  {
    name: "Luiz",
    address: "Rua do Décimo Dedo, 13 - Jardim da Indenização",
    phone: "(11) 97895-6542",
    email: "lulis@mail.com.br",
    status: "Success"
  },
  {
    name: "Jair",
    address: "Rua da Colostomia, 21 - Jardim Bolsa de Fezes",
    phone: "(11) 90666-6660",
    email: "jair@mail.com.br",
    status: "Error"
  }
]

export default function Home() {
 return( 
  <main>
    {
      dataPerson.map((item: Item) => {
        return(
          <Person
          status={item.status}
          key="value"
          name={item.name}
          address={item.address}
          phone={item.address}
          email={item.email}
         />
        )
      }
    )
    }
  </main>
 )
}
