import {useState} from 'react';
import AdminSelection from "./AdminSelection";
import AdminTable from "./AdminTable";

export function Admin() {
    const [selected_radio, setSelectedRadio] = useState();
    return (
      <>
          <AdminSelection setSelectedRadio={setSelectedRadio}/>
          <AdminTable action_value={selected_radio} />
      </>
    );
}

export default Admin;
