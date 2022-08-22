import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React from "react";
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";

const ListadoNoticias = () => {
  const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias();
  const totalPaginas = Math.ceil(totalNoticias / 20);

  return (
    <>
      <Typography
        textAlign={"center"}
        marginY={5}
        variant="h3"
        component={"h2"}
      >
        Ultimas Noticias
      </Typography>
      <Grid container spacing={3}>
        {noticias.map((noticia) => (
          <Noticia key={noticia.url} noticia={noticia} />
        ))}
      </Grid>
      <Stack spacing={2}
        diercton="row"
        justifyContent={"center"}
        alignItems={"center"}  
        sx={{
          marginy: 5,
        }}
      >
        <Pagination count={totalPaginas} color='primary' onChange={handleChangePagina} page={pagina}/>
      </Stack>
    </>
  );
};

export default ListadoNoticias;
