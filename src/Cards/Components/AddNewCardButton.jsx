import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

export default function AddNewCardButton() {
  const navigate = useNavigate();
  return (
    <Fab
      
      aria-label="add"
      sx={{
        position: "fixed",
        bottom: 75,
        right:{xs:7,sm:16},
        backgroundColor:"#438EFF",
        color:"white",
        scale:{xs:"0.6",sm:"0.9"},
        border:"black"
      }}
      onClick={() => {
        navigate(ROUTES.CREATE_CARD);
      }}
    >
      <AddIcon sx={{color:"white"}}/>
    </Fab>
  );
}
