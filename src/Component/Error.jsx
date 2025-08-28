import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <section class="w3layouts-errorhny">
        <div class="w3l-error-grid py-5 text-center">
            <div class="container py-lg-4 py-md-3">
                <div class="error-block">
                    <h1>404</h1>
                    <h2>Oops, Page not found!</h2>
                    <p class="mt-4">Sorry, we're offline right now to make our site even better. Please, comeback later and check what we've
                        been upto.</p>
                    <form class="form-inline search-form mt-md-5 mt-4" action="#" method="post">
                        <input class="form-control" type="search" placeholder="Enter your text" aria-label="email" required/>
                        <button class="btn btn-style btn-primary search-btn ms-lg-4" type="submit">Search</button>
                    </form>
                    <Link to="/" class="back-button mt-md-5 mt-4"> <span class="fa fa-arrow-left mr-2"></span> Back to Home</Link>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Error
