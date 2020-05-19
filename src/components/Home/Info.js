import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title'
export default function Info() {
    return (
        <section className="py-5" >
        <div className="container">
<Title title="our story" />
        <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">

                <p className="lead text-muted mb-5">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dolore voluptatum? Sequi eveniet doloribus nisi alias distinctio culpa repellendus facilis optio esse minus quae, voluptate animi ut quis similique veritatis tempora reiciendis eius quo delectus porro pariatur harum autem earum! Temporibus, magnam et, totam ad eligendi autem facilis, reprehenderit cum velit deleniti ullam a aliquid quisquam vitae veniam. Earum aspernatur commodi possimus ipsam labore quas animi, exercitationem quidem voluptates ducimus cumque eos enim fugit sint a dolores. Suscipit qui atque sapiente quam ad sunt architecto quae doloremque dignissimos, cumque adipisci ab, modi culpa. Quasi deleniti officia corporis fugit vero alias!

                </p>
                <Link to="/about/">

                    <button className="btn text-uppercase btn-yellow">about page</button>
                </Link>
            </div>
        </div>
        </div>
        </section >
    )
}
