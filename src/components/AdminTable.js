export function AdminTable(props) {
    const table_name = props.action_value;
    switch (table_name) {
        case 'add':
            return <>add</>
        case 'modify':
            return <>modify</>
        case 'delete':
            return <>delete</>
        default:
          return <></>
    }
}
  
  export default AdminTable;
  