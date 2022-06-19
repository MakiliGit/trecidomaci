

import { Button, CardMedia, Grid, Paper } from '@mui/material'
import React from 'react'
import { Product } from './products'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";


interface Props {
  product: Product,
  onClick: (id: string) => void
}

export default function ProductItem(props: Props) {
  return (
    <Grid key={props.product.id} item>
      <Paper
        sx={{
          height: "auto",
          width: 300,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
        style={{
          paddingTop: "3%",
          paddingBottom: "3%",
        }}
      >
        <CardMedia
          component="img"
          height="190"
          image={`./${props.product.image_path}.jpg`}
          alt={props.product.title}
        />
        <h3>{props.product.title}</h3>
        <p>Kategorija: {props.product.category}</p>
        <h4>{props.product.price}</h4>
        <Button variant="outlined" endIcon={<AddShoppingCartIcon />} onClick={e => props.onClick(props.product.id)}>
          Dodaj u korpu
        </Button>
      </Paper>
    </Grid>
  )
}
