import React, { memo, useMemo } from 'react'
import PropTypes from 'prop-types'

import {
  makeStyles,
  CardActionArea,
  CardContent,
  Card,
  Grid
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { EmptyCard } from 'client/components/Cards'

const gridValues = [false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const useStyles = makeStyles(() => ({
  cardPlus: {
    height: '100%',
    minHeight: 140,
    display: 'flex',
    textAlign: 'center'
  }
}))

const ListCards = memo(({
  list,
  breakpoints,
  handleCreate,
  ButtonCreateComponent,
  CardComponent,
  cardsProps,
  EmptyComponent,
  displayEmpty
}) => {
  const classes = useStyles()

  return (
    <Grid container spacing={3}>
      {handleCreate &&
        useMemo(
          () => (
            <Grid item {...breakpoints}>
              {ButtonCreateComponent ? (
                <ButtonCreateComponent onClick={handleCreate} />
              ) : (
                <Card className={classes.cardPlus} raised>
                  <CardActionArea onClick={handleCreate}>
                    <CardContent>
                      <AddIcon />
                    </CardContent>
                  </CardActionArea>
                </Card>
              )}
            </Grid>
          ),
          [handleCreate, classes]
        )}
      {Array.isArray(list) &&
        list.length > 0 ? (
          list?.map((value, index) => (
            <Grid key={`card-${index}`} item {...breakpoints}>
              <CardComponent value={value} {...cardsProps({ index, value })} />
            </Grid>
          ))
        ) : (
          (displayEmpty || EmptyComponent) && (
            <Grid item {...breakpoints}>
              {EmptyComponent ?? <EmptyCard />}
            </Grid>
          )
        )}
    </Grid>
  )
})

ListCards.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
  breakpoints: PropTypes.shape({
    xs: PropTypes.oneOf(gridValues),
    sm: PropTypes.oneOf(gridValues),
    md: PropTypes.oneOf(gridValues),
    lg: PropTypes.oneOf(gridValues),
    xl: PropTypes.oneOf(gridValues)
  }),
  handleCreate: PropTypes.func,
  ButtonCreateComponent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.object,
    PropTypes.element
  ]),
  CardComponent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.object,
    PropTypes.element
  ]),
  cardsProps: PropTypes.func,
  EmptyComponent: PropTypes.oneOfType([
    PropTypes.element
  ]),
  displayEmpty: PropTypes.bool
}

ListCards.defaultProps = {
  list: [],
  breakpoints: { xs: 12, sm: 4, md: 3, lg: 2 },
  handleCreate: undefined,
  ButtonCreateComponent: undefined,
  CardComponent: null,
  cardsProps: () => undefined,
  EmptyComponent: undefined,
  displayEmpty: false
}

ListCards.displayName = 'ListCards'

export default ListCards
