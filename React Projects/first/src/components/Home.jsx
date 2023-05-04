import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>Techstar</h1>
          <p>Solution to all your tech needs</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            everyday. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex numquam
            at, voluptate id beatae reiciendis dolor hic facilis dolorum,
            accusantium ad sequi consequatur? Provident laborum facere minima
            quia cumque non exercitationem excepturi aut vero quas ea beatae
            minus accusamus magnam voluptatibus consequuntur nesciunt ex error,
            dolore illo modi soluta. Cupiditate aut iste quisquam in iusto
            aliquam, maxime hic quasi ea est? Perspiciatis sunt dicta ullam
            eligendi. Sapiente provident mollitia ad, numquam perferendis nulla
            quos porro consequatur repellendus incidunt similique voluptatum
            non. Nam adipisci consectetur voluptate laboriosam ea quia officia
            praesentium deleniti necessitatibus non possimus quaerat eos numquam
            earum, quidem eveniet.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>

            <article>
                <div style={{animationDelay:"0.3s"}}>
                   <AiFillGoogleCircle/>
                   <p>Google</p>
                </div>

                <div style={{animationDelay:"0.5s"}}>
                   <AiFillAmazonCircle/>
                   <p>Amazon</p>
                </div>

                <div style={{animationDelay:"0.7s"}}>
                   <AiFillYoutube/>
                   <p>Youtube</p>
                </div>

                <div style={{animationDelay:"1s"}}>
                   <AiFillInstagram/>
                   <p>Instagram</p>
                </div>
            </article>
        </div>
      </div>
    </>
  );
};

export default Home;
