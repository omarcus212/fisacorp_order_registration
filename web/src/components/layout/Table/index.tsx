import React from "react";

import DataTable, { type TableStyles } from "react-data-table-component";

interface ITable {
    data: Array<Object>,
    column: Array<Object>,
    titleTable?: string,
    typeMessage?: boolean,
    refExcel?: any
}

const Table: React.FC<ITable> = ({ data, column, typeMessage }) => {


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
                    data={data}
                    striped={true}
                    responsive={true}
                    customStyles={customStyles}
                    pagination={true}
                    fixedHeader={true}
                    noDataComponent={typeMessage ? 'Erro ao carregar os dados...' : 'Nada a trazer...'}
                    noTableHead={true}

                />

            </div>


        </>


    )
}

export default Table