<img src="https://reffect.co.jp/wp-content/uploads/2023/03/mocking_service_worker.png" height="150px" style="padding-inline:40%"/>

## 🚀 Aprendizado importante commit anterior

<p>pegar um type atravez de um objeto, referencia</p>

```bash
 /src/api/mocks/get-orders-mock.ts
```
<p>aqui temos uma interface, e queremos tipa somente com o campo status </p>

```ts
 export interface getOrdersType{
    orders: {
        orderId: string;
        createdAt: string
        status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
        customerName: string;
        total: number;
    }[];
    meta: {
        pageIndex: number;
        perPage: number;
        totalCount: number;
    };
}
```
<p>agora pegamos somente o campo status</p>

```ts
    //aqui pegamos somente o campo orders
    type Orders = getOrdersType['orders']
    //agora criamos um type que obtem somente o campo order, [number] para dizer que é qualquer posição
    // do array e não uma fixa e pegamos o campo [status]
    type OrderStatus = getOrdersType['orders'][number]['status']
```
<p>pegando o params do request.url com facilidade</p>

```ts
    //aqui criamos uma url ja que request.url vem como string, e teriamos de dar um split para pegarmos os  params
    const { searchParams } = new URL(request.url)
    // e agora podemos pergar muitas coisas da url ex:
    const { searchParams,href,pathname } = new URL(request.url)
    
```

 
## ❗ antes de começar a utilizar, LEMBRE de rodar o codigo run correto ❗

```bash
 npm run dev:test
```


