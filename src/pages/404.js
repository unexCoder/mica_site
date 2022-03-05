import * as React from "react"
import { Link } from "gatsby"
import { mainTitle, mainNavBar} from '../styles/global.module.css'


// markup
const NotFoundPage = () => {
  return ( 
    <main className={mainTitle}>
      <title>Not found</title>
      <h1>Page not found</h1>
      <p>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        <br />
        <Link to="/" className={mainNavBar}>Go home</Link>
      </p>
    </main>
  )
}

export default NotFoundPage
