const TabCol = [
    {
        Header: 'Sl No',
        accessor: 'id',
        sortType: 'basic',
        id: 'Sl No', // to be used in column hide popover
        isSortable: true, // This prop is used for enabling sorting option to the column, if its not defined then there wont be any sort options for the column.
    },
    {
        Header: 'Name',
        accessor: 'name',
        sortType: 'basic',
        isSortable: true,
        id: 'Name',
    },
    {
        Header: 'Email',
        accessor: 'email',
        id: 'Email',
    },
    {
        Header: 'Comment',
        accessor: 'body',
        id: 'Comment',
    }
];

export default TabCol;