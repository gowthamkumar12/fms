import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import unicornbikeImg from './../assets/images/unicorncoin.jpg'
import {Link} from 'react-router-dom'
import auth from '../auth/auth-helper'
import ExpenseOverview from './../expense/ExpenseOverview'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 800,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle
  },
  media: {
    minHeight: 440
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a':{
      color: '#4f83cc'
    } 
  }
}))

export default function Home(){
  const classes = useStyles()
  return (
        <>
          { auth.isAuthenticated() && 
            <ExpenseOverview/> 
          } 
          { !auth.isAuthenticated() && typeof window !== "undefined" && 
            (<Card className={classes.card}>
              <Typography variant="h6" className={classes.title}>
                Home Page
              </Typography>
              <CardMedia className={classes.media} image="https://images.unsplash.com/photo-1534951009808-766178b47a4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmluYW5jZSUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" title="Unicorn Bicycle"/>
              <CardContent>
                <Typography variant="body1" component="p">
                  Finance Management. <Link to='/signup'>Sign up</Link> or <Link to='/signin'>sign in</Link> to get started.
                </Typography>
              </CardContent>
            </Card>)
          }
        </>
    )
}