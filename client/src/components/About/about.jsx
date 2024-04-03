import Navbar from "/src/components/Navbar/navbar.jsx"
import Footer from "/src/components/Footer/footer.jsx"
import './about.css'

const About = () => {
    return (
        <>
            <Navbar />
            <div className="aboutconatiner">
                <h1 className="aboutheading">The ER diagram</h1>
                <div className="er-model">
                    <div className="er-img-div"></div>
                </div>
                <h1 className="aboutheading">The <i>TEAM</i> members</h1>
                <div className="memberspics">
                <div className="details">
                        <img src="https://scontent.cdninstagram.com/v/t51.2885-19/296457828_6141059785909881_6334318010954922576_n.jpg?stp=dst-jpg_s120x120&_nc_cat=109&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=Soht-gS9qQsAX8BxwVb&_nc_ht=scontent.cdninstagram.com&oh=00_AfA7NYkekjqM5x5kSAT0qMR8XkQ_OFrhIzxAVU7z015agQ&oe=6612C58B" alt="yaswanth" className="image-person" />
                        <p>Name: Bellana Yaswanth<br/>Main Work: Web Coder</p>
                    </div>
                    <div className="details">
                        <img src="https://scontent.cdninstagram.com/v/t51.2885-19/358363378_1400724590522989_5511303305914956076_n.jpg?stp=dst-jpg_s120x120&_nc_cat=111&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=XYBz3MSBJLgAX_m59l8&_nc_ht=scontent.cdninstagram.com&oh=00_AfCQN-bqhHpKhlryEF3cnJsExaJNzhXXAxMgF_mV9jL9NA&oe=6612C28C" alt="dileep" className="image-person" />
                        <p>Name: Paila Dileep Sai<br />Main Work: UI Design</p>
                    </div>
                    <div className="details">
                        <img src="https://scontent.cdninstagram.com/v/t51.2885-19/377968549_289685867141671_3984062581959864466_n.jpg?stp=dst-jpg_s120x120&_nc_cat=111&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=vrmVU4M-iDYAX9aOD9u&_nc_ht=scontent.cdninstagram.com&oh=00_AfA8wLqqAz15FDeVcyGxOa49I63ib1UDVCoHvGWz8kS0bA&oe=6612C0C7" alt="pratham" className="image-person" />
                        <p>Name: Pratham Prajapati Arjun<br />Main Work: Data Set preparation</p>
                    </div>
                    <div className="details">
                        <img src="https://scontent.cdninstagram.com/v/t51.2885-19/316927004_1322502001857193_2487585716039789322_n.jpg?stp=dst-jpg_s120x120&_nc_cat=102&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=Gc3XGUV7MhsAX-nfwxE&_nc_ht=scontent.cdninstagram.com&oh=00_AfAu5htL95tI7qkLeMZZWLR3IwExqXxAbYDf_13MmqDJtg&oe=6612BF14" alt="gokul" className="image-person" />
                        <p>Name: K Gokul<br />Main Work: UX designer</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )   
}
export default About