import ImageView from "../../components/shared/ImageView";

export const columnsInProduction: Array<Object> = [
    {
        name: 'Img:',
        center: "true",
        selector: (row: any) => (
            <ImageView imgSrc={row.img} imgAlt={row.name} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} />
        )
    },
    {
        name: 'Nome:',
        center: "true",
        width: '35%',
        heigth: '100%',
        selector: (row: any) => row.name,

    },
    {
        name: 'Preço:',
        center: "true",
        selector: (row: any) => (<p> R$ {row.price} </p>)


    },
    {
        name: 'Estoque:',
        center: "true",
        selector: (row: any) => (<p> {row.stock_quantity} Un.</p>)

    },
];