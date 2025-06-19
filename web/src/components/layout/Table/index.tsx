import React from "react";

import DataTable, { type TableStyles } from "react-data-table-component";
import type { Product } from "../../../interface/product";
import type { Order, OrderItem } from "../../../interface/orderItem";

interface ITable {
    data: Array<Object> | Product | OrderItem | Order | undefined,
    column: Array<Object>,
    titleTable?: string,
    typeMessage?: boolean,
    refExcel?: any,
    progressPending?: boolean,
}

const Table: React.FC<ITable> = ({ data, column, typeMessage, progressPending }) => {


    const customStyles: TableStyles = {
        table: {
            style: {
                borderCollapse: 'collapse',
            },
        },
        headRow: {
            style: {
                backgroundColor: '#f4f4f4',
                border: '1px solid #ccc',
            },
        },
        headCells: {
            style: {
                border: '1px solid #ccc',
            },
        },
        rows: {
            style: {
                height: '100px',
                border: '1px solid #ccc',
            },
        },
        cells: {
            style: {
                display: 'flex',
                height: '100px',
                padding: '0.5rem',
                border: '1px solid #ccc',
            },
        },
    };

    return (

        <>

            <div className="w-full h-full p-4 bg-white border border-[#12638F] rounded-xs shadow-md">

                <DataTable
                    columns={column}
                    data={Array.isArray(data) ? data : []}
                    striped={true}
                    responsive={true}
                    customStyles={customStyles}
                    pagination={true}
                    fixedHeader={true}
                    progressPending={progressPending}
                    noDataComponent={typeMessage ? 'Erro ao carregar os dados...' : 'Nenhum dado encontrado!'}
                    noTableHead={false}

                />

            </div>


        </>


    )
}

export default Table