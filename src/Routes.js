import React from "react";
import { Routes, Route } from "react-router-dom";
import {
StartupTiles, 
StartupCreate, StartupEdit, StartupView
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                        <Route path="Startups/view/:id" element={<StartupView {...props} title={'View Startup'} />} />
                        <Route path="Startups/edit/:id" element={<StartupEdit {...props} title={'Edit Startup'} />} />
                        <Route path="Startups/create" element={<StartupCreate {...props} title={'Create Startup'} />} />

                <Route path="/tiles" element={<StartupTiles {...props} title={'Tiles'} />} />
        </Routes>
    )

};

export default Component;