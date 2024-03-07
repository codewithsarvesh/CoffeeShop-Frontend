import React from 'react'

const AboutUs = () => {
  return (
    <div style={{ padding: '20px' }}>
    <h1>About Us</h1>
    <section>
        <h2>Our Mission</h2>
        <p>Our mission is to bring art and craft closer to people, showcasing unique pieces from talented artists and crafters around the world.</p>
    </section>
    <section>
        <h2>Our History</h2>
        <p>Founded in 2020, our gallery has grown from a small local space to an online platform reaching thousands of art lovers globally.</p>
    </section>
    <section>
        <h2>Meet the Team</h2>
        <div>
            {/* Example team member, repeat this structure for each member */}
            <div>
                <img src="/path-to-image.jpg" alt="Team Member Name" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                <h3>Team Member Name</h3>
                <p>Role or Short Bio</p>
            </div>
        </div>
    </section>
    <section>
        <h2>Our Achievements</h2>
        <p>We're proud to have been recognized by...</p>
    </section>
    <section>
        <h2>Our Vision</h2>
        <p>Looking forward, we aim to...</p>
    </section>
</div>
  )
}

export default AboutUs
