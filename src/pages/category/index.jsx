import { useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import { AddButton } from 'components/Buttons'
import CategoryCard from 'components/CategoryCard'
import FlexBetween from 'components/FlexBetween'
import Header from 'components/Header'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryOperation } from 'redux/category/categoryOperation'
import { getCategorySelector } from 'redux/category/categorySelectors'

const Category = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryOperation());
  }, [dispatch]);
  const data = useSelector(getCategorySelector);
  const isDesktop = useMediaQuery("(min-width: 1000px)");
  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Category" subtitle="See your category" />
        <AddButton to="/category/new-category" text="Add category"/>
      </FlexBetween>

      {data ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isDesktop ? undefined : "span 4" },
          }}
        >
          {data.map(
            ({
              _id,
              name,
              description,
              photo,
              quantityAllProducts,
              soldAllProducts,
              stockAllProducts,
            }) => (
              <CategoryCard
                key={_id}
                _id={_id}
                name={name}
                description={description}
                photo={photo}
                quantityAllProducts={quantityAllProducts}
                soldAllProducts={soldAllProducts}
                stockAllProducts={stockAllProducts}
              />
            )
          )}
        </Box>
      ) : (
        // додати компонент загрузки
        <>loading ...</>
      )}
    </Box>
  )
}

export default Category