import React from 'react'
import { Link } from "gatsby"
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const Menu = () => {
const { logo } = useStaticQuery(graphql`
query {
    logo: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
     
        fixed(width: 35, height: 35) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)
    
return (

            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link className="navbar-brand" to="/"><Img fixed={logo.childImageSharp.fixed} alt="logo"/> </Link>

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <Link to="/"  activeStyle={{ color: "red" }} className="nav-link"  activeClassName="active">Home</Link> 
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link"  to="/about" activeStyle={{ color: "red" }} activeClassName="active">About</Link> 
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link"  to="/gallery" activeStyle={{ color: "red" }}activeClassName="active">Gallery</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link"  to="/contact" activeStyle={{ color: "red" }}activeClassName="active">Contact</Link>
                    </li>
                   
                </ul>
                
               
           
   
        </nav>
)
}

export default Menu