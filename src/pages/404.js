import React, { Component } from "react"
import Layout from "../layouts"
import { Link } from "gatsby"
import '../css/global.css'
import * as errorStyles from "./404.module.css"

class ErrorPage extends Component {
    
    render() {
        return (
            <Layout>
                <div className="flex-grow flex flex-wrap w-full">
                    <section 
                        className="h-screen w-full ml-auto relative flex flex-wrap content-center"
                        aria-label="Introduction"
                        >
<div className="w-full text-center">
<h1 className={errorStyles.header}>404</h1>
<p><Link to="/" className={errorStyles.link}>Take Me Away</Link></p>
</div>

                    </section>
                    
                </div>

            </Layout>
        )
    }
}

export default ErrorPage