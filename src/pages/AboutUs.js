import React from 'react'
import sarveshImg from './sarvesh.jpg';

const AboutUs = () => {
  return (
    <div style={{ padding: '20px' }}>
        <center>
    <h1>About Us</h1>
    <section>
        <h2>Our Mission</h2>
        <p>"Exploring the essence of coffee, one blog post at a time. Join us on a journey of flavor, community, and culture, where every word is a blend of passion and expertise. From brewing tips to tales of origin, our blog is your portal to the heart of the coffee experience. Dive into the world of beans, brews, and beyond, and awaken your senses with every read. Welcome to our coffee shop's digital haven, where stories are brewed with love and served with a side of inspiration."</p>
    </section>
    <section>
        <h2>Our History</h2>
        <p>"Embark on a nostalgic journey through the heart of our coffee shop's history, where each cup tells a tale of passion and perseverance since our establishment in 2006. Discover the roots of our beloved brews, steeped in tradition and crafted with care for over a decade. Join us as we reminisce on cherished memories, milestones, and the unwavering commitment to serving excellence in every sip. From humble beginnings to cherished memories, our coffee shop's story is a testament to the enduring power of community and the love for great coffee. Step into our world and taste the legacy that has been brewing for generations."</p>
    </section>
    <section>
        <h2>Meet the Team</h2>
        <div className="team-container">
            {/* Example team member, repeat this structure for each member */}
            <div className="team-member">
                <img src={sarveshImg} alt="Sarvesh Nanche" className="team-member-img" />
                <h3>Sarvesh Nanche</h3>
                <p>Manager</p>
            </div>
        </div>
    </section>
    <section>
        <h2>Our Achievements</h2>
        <p>"From humble beginnings to extraordinary heights, our coffee journey is a testament to dedication and passion. With each aromatic cup, we've woven stories of community, innovation, and excellence. Our achievements stand as a testament to the relentless pursuit of quality and the unwavering commitment to our craft. As we celebrate our milestones, we raise our cups to the countless moments of joy, connection, and inspiration shared with every sip. Here's to the dreams realized, the challenges conquered, and the countless memories created along the way. Join us in savoring the sweetness of success, brewed with love in every drop."</p>
    </section>
    <section>
        <h2>Our Vision</h2>
        <p>"Guided by a relentless passion for exceptional coffee experiences, our vision extends beyond serving beverages; it encompasses creating moments of connection, inspiration, and delight. We aspire to be more than just a coffee shop; we aim to be a beacon of warmth, community, and innovation in the world of specialty coffee. With every cup we serve, we seek to ignite the senses, spark conversations, and cultivate a culture of appreciation for the craft of coffee. Our vision is to continually elevate the coffee experience, pioneering new flavors, techniques, and experiences that leave a lasting impact on our patrons and the coffee industry as a whole. Together, let's embark on a journey fueled by creativity, curiosity, and a shared love for the perfect cup of coffee."</p>
    </section>
    </center>
</div>
  )
}

export default AboutUs
